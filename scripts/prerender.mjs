/**
 * Pós-build: gera um index.html por rota, com title, description e Open Graph
 * corretos. Assim o LinkedIn (que não executa JavaScript) mostra o cartão
 * certo para cada semana e cada projeto. Também gera sitemap.xml e robots.txt.
 */
import { readFileSync, writeFileSync, mkdirSync, readdirSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { parse } from "yaml";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const dist = join(root, "dist");
const site = JSON.parse(readFileSync(join(root, "content/site.json"), "utf8"));
const template = readFileSync(join(dist, "index.html"), "utf8");

const frontmatter = (raw) => {
  const m = raw.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  return m ? parse(m[1]) ?? {} : {};
};
const list = (dir, filter) =>
  existsSync(join(root, dir)) ? readdirSync(join(root, dir)).filter(filter) : [];
const read = (p) => readFileSync(join(root, p), "utf8");
const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");

const routes = [
  { path: "/", title: site.title, description: site.description },
  { path: "/sobre", title: `Sobre · ${site.brand}`, description: "Quem eu sou, como aprendo e o que estou estudando: IA, ferramentas Google e desenvolvimento web." },
  { path: "/projetos", title: `Projetos · ${site.brand}`, description: "O que eu criei a partir do que aprendi: problema, ferramenta, processo, prompts e resultado." },
  { path: "/evolucao", title: `Evolução · ${site.brand}`, description: "Reflexão e próximos passos de cada semana, para acompanhar como o aprendizado vem evoluindo." },
  { path: "/embaixadora-estudantil-google", title: `Embaixadora Estudantil do Google · ${site.brand}`, description: "Minha jornada semana a semana como Embaixadora Estudantil do Google: desafios, aprendizados, experimentos e projetos." },
  { path: "/contato", title: `Contato · ${site.brand}`, description: "Como falar comigo: GitHub, LinkedIn e e-mail." },
  { path: "/guia-gemini", title: `Documentação · ${site.brand}`, description: "Três formas de pensar com IA: conversar, explorar, criar. Um passeio visual pelo Google Gemini, Gemini Notebook e Gemini Canvas.", image: "/assets/projects/ecossistema-gemini.png" },
];

for (const f of list("content/ambassador", (f) => /^week-.*\.md$/.test(f))) {
  const d = frontmatter(read(`content/ambassador/${f}`));
  routes.push({
    path: `/embaixadora-estudantil-google/semana-${d.number}`,
    title: `Semana ${d.number}: ${d.theme} · ${site.brand}`,
    description: d.summary,
  });
}
for (const f of list("content/projects", (f) => /^[^_].*\.md$/.test(f))) {
  const d = frontmatter(read(`content/projects/${f}`));
  routes.push({
    path: `/projetos/${f.replace(/\.md$/, "")}`,
    title: `${d.title} · ${site.brand}`,
    description: d.summary,
    image: d.cover?.src,
  });
}
for (const f of list("docs", (f) => f.endsWith(".md"))) {
  const h1 = read(`docs/${f}`).match(/^#\s+(.+)$/m)?.[1] ?? f;
  const first = read(`docs/${f}`).split(/\n\n/).find((p) => p && !p.startsWith("#") && !p.startsWith(">")) ?? "";
  routes.push({
    path: `/guia-gemini/docs/${f.replace(/\.md$/, "")}`,
    title: `${h1} · ${site.brand}`,
    description: first.replace(/\s+/g, " ").slice(0, 200),
  });
}

const abs = (u) => (u.startsWith("http") ? u : `${site.url}${u}`);

function seoBlock(r) {
  const url = `${site.url}${r.path === "/" ? "" : r.path}`;
  const image = abs(r.image ?? "/assets/og-image.png");
  const t = esc(r.title);
  const d = esc(r.description);
  return `<title>${t}</title>
    <meta name="description" content="${d}" />
    <link rel="canonical" href="${url}" />
    <meta property="og:type" content="${r.path.startsWith("/embaixadora-estudantil-google/") || r.path.startsWith("/projetos/") ? "article" : "website"}" />
    <meta property="og:site_name" content="${esc(site.brand)}" />
    <meta property="og:locale" content="pt_BR" />
    <meta property="og:title" content="${t}" />
    <meta property="og:description" content="${d}" />
    <meta property="og:url" content="${url}" />
    <meta property="og:image" content="${image}" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${t}" />
    <meta name="twitter:description" content="${d}" />
    <meta name="twitter:image" content="${image}" />`;
}

const block = /<!--SEO_START-->[\s\S]*?<!--SEO_END-->/;
for (const r of routes) {
  const html = template.replace(block, `<!--SEO_START-->\n    ${seoBlock(r)}\n    <!--SEO_END-->`);
  const out = r.path === "/" ? join(dist, "index.html") : join(dist, r.path, "index.html");
  mkdirSync(dirname(out), { recursive: true });
  writeFileSync(out, html);
}

const today = new Date().toISOString().slice(0, 10);
writeFileSync(
  join(dist, "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${routes
    .map((r) => `  <url><loc>${site.url}${r.path === "/" ? "" : r.path}</loc><lastmod>${today}</lastmod></url>`)
    .join("\n")}\n</urlset>\n`
);
writeFileSync(join(dist, "robots.txt"), `User-agent: *\nAllow: /\nSitemap: ${site.url}/sitemap.xml\n`);
// Fallback de SPA para hospedagens que servem 404.html (ex.: GitHub Pages)
writeFileSync(join(dist, "404.html"), readFileSync(join(dist, "index.html"), "utf8"));

console.log(`prerender: ${routes.length} rotas geradas em dist/`);
