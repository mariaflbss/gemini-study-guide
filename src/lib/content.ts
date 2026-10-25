import site from "../../content/site.json";
import { splitFrontmatter, splitSections } from "./frontmatter";
import { slugify } from "./slug";
import type { Project, Week } from "./types";

export { site };

const weekFiles = import.meta.glob("/content/ambassador/week-*.md", {
  query: "?raw",
  import: "default",
  eager: true,
}) as Record<string, string>;

const projectFiles = import.meta.glob("/content/projects/[!_]*.md", {
  query: "?raw",
  import: "default",
  eager: true,
}) as Record<string, string>;

const docFiles = import.meta.glob("/docs/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
}) as Record<string, string>;

function fileSlug(path: string): string {
  return path.split("/").pop()!.replace(/\.md$/, "");
}

export const weeks: Week[] = Object.values(weekFiles)
  .map((raw) => {
    const { data, body } = splitFrontmatter(raw);
    const number = Number(data.number);
    return {
      slug: `semana-${number}`,
      number,
      theme: String(data.theme ?? ""),
      summary: String(data.summary ?? ""),
      status: (data.status as Week["status"]) ?? "em-documentacao",
      highlights: (data.highlights as string[]) ?? [],
      tools: (data.tools as string[]) ?? [],
      applications: (data.applications as string[]) ?? [],
      challenges: (data.challenges as Week["challenges"]) ?? [],
      masterclass: data.masterclass as Week["masterclass"],
      project: (data.project as string | null) ?? null,
      evidence: (data.evidence as Week["evidence"]) ?? [],
      sections: splitSections(body, slugify),
    } satisfies Week;
  })
  .sort((a, b) => a.number - b.number);

export function getWeek(slug: string | undefined): Week | undefined {
  return weeks.find((w) => w.slug === slug);
}

export const projects: Project[] = Object.entries(projectFiles)
  .map(([path, raw]) => {
    const { data, body } = splitFrontmatter(raw);
    return {
      slug: fileSlug(path),
      title: String(data.title ?? fileSlug(path)),
      summary: String(data.summary ?? ""),
      featured: Boolean(data.featured),
      origin: (data.origin as string | null) ?? null,
      week: data.week == null ? null : Number(data.week),
      kind: String(data.kind ?? "Projeto pessoal"),
      tags: (data.tags as string[]) ?? [],
      tech: (data.tech as string[]) ?? [],
      problem: String(data.problem ?? ""),
      objective: String(data.objective ?? ""),
      tool: String(data.tool ?? ""),
      process: String(data.process ?? ""),
      prompts: (data.prompts as string[]) ?? [],
      results: (data.results as string[]) ?? [],
      learning: String(data.learning ?? ""),
      links: (data.links as Project["links"]) ?? {},
      cover: data.cover as Project["cover"],
      body,
    } satisfies Project;
  })
  .sort((a, b) => Number(b.featured) - Number(a.featured) || a.title.localeCompare(b.title));

export function getProject(slug: string | undefined): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export const projectsOfWeek = (n: number) => projects.filter((p) => p.week === n);

/* ---------- Documentação técnica (docs/*.md) ---------- */

export interface Doc {
  slug: string;
  title: string;
  desc: string;
  body: string;
}

const DOC_ORDER: { slug: string; title: string; desc: string }[] = [
  { slug: "google-gemini", title: "Google Gemini", desc: "O ecossistema, os conceitos e a multimodalidade explicados em profundidade." },
  { slug: "gemini-notebook", title: "Gemini Notebook", desc: "Fontes, contexto, grounding e o funcionamento conceitual do produto." },
  { slug: "gemini-canvas", title: "Gemini Canvas", desc: "Artefatos, criação, edição e os fluxos de trabalho possíveis." },
  { slug: "grounding-e-fontes", title: "Grounding e fontes", desc: "Por que respostas ancoradas em fontes ajudam — e onde ainda falham." },
  { slug: "engenharia-de-prompts", title: "Engenharia de prompts", desc: "Como estruturar instruções para obter respostas melhores." },
  { slug: "notebook-e-canvas", title: "Notebook + Canvas", desc: "Como as duas ferramentas podem participar de um mesmo fluxo." },
  { slug: "limitacoes-e-confiabilidade", title: "Limitações e confiabilidade", desc: "Alucinações, excesso de confiança e a necessidade de revisão humana." },
  { slug: "referencias", title: "Referências", desc: "As fontes oficiais usadas para construir esta documentação." },
  { slug: "fundamentos-redes-neurais", title: "Fundamentos de redes neurais", desc: "Conceitos de redes neurais e aprendizado supervisionado relacionados ao Playground." },
  { slug: "do-dado-ao-insight", title: "Do dado ao insight", desc: "Como organizar dados, investigar padrões, formular insights e explicitar limitações." },
  { slug: "da-experiencia-ao-valor", title: "Da experiência ao valor", desc: "Como relacionar experiências, evidências, competências e contextos de valor." },
];

const docBodies = new Map(Object.entries(docFiles).map(([p, raw]) => [fileSlug(p), raw]));

export const docs: Doc[] = DOC_ORDER.filter((d) => docBodies.has(d.slug)).map((d) => ({
  ...d,
  body: docBodies.get(d.slug)!,
}));

export function getDoc(slug: string | undefined): Doc | undefined {
  return docs.find((d) => d.slug === slug);
}

/* ---------- Utilidades ---------- */

export const isPlaceholder = (value: string | undefined | null): boolean =>
  !value || /\[ADICIONAR/.test(value);

export const STATUS_LABEL: Record<Week["status"], string> = {
  planejada: "Planejada",
  "em-documentacao": "Em documentação",
  concluida: "Concluída",
};
