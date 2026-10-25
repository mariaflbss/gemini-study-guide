import { parse } from "yaml";

/** Separa o frontmatter YAML do corpo Markdown. */
export function splitFrontmatter(raw: string): { data: Record<string, unknown>; body: string } {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!match) return { data: {}, body: raw };
  return { data: (parse(match[1]) ?? {}) as Record<string, unknown>, body: match[2] };
}

/** Quebra o corpo em seções por título de nível 2 (## Título). */
export function splitSections(body: string, slugify: (s: string) => string): Record<string, string> {
  const sections: Record<string, string> = {};
  const parts = body.split(/^##\s+(.+)$/m);
  for (let i = 1; i < parts.length; i += 2) {
    sections[slugify(parts[i].trim())] = (parts[i + 1] ?? "").trim();
  }
  return sections;
}
