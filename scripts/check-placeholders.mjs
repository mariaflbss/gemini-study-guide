/** Lista tudo o que ainda está como [ADICIONAR ...] para você completar. */
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join, dirname, relative } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const dirs = ["content", "docs"];
const found = [];

function walk(dir) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) walk(p);
    else if (/\.(md|json)$/.test(name) && !name.startsWith("_")) {
      readFileSync(p, "utf8").split("\n").forEach((line, i) => {
        for (const m of line.matchAll(/\[ADICIONAR[^\]]*\]/g)) found.push(`${relative(root, p)}:${i + 1}  ${m[0]}`);
      });
    }
  }
}
dirs.forEach((d) => walk(join(root, d)));

console.log(found.length ? found.join("\n") : "Nenhuma pendência encontrada.");
console.log(`\n${found.length} pendência(s).`);
