import { useMemo, useState } from "react";
import PageHeader from "../components/ui/PageHeader";
import ProjectCard from "../components/projects/ProjectCard";
import Seo from "../components/ui/Seo";
import { isPlaceholder, projects } from "../lib/content";
import "../components/projects/Projects.css";
import "./pages.css";

export default function Projects() {
  const published = projects.filter((p) =>
    !isPlaceholder(p.title) &&
    !isPlaceholder(p.summary) &&
    !isPlaceholder(p.problem) &&
    !isPlaceholder(p.objective) &&
    !isPlaceholder(p.process) &&
    !isPlaceholder(p.learning) &&
    p.results.length > 0 &&
    p.results.every((result) => !isPlaceholder(result))
  );
  const tags = useMemo(() => Array.from(new Set(published.flatMap((p) => p.tags))).sort((a, b) => a.localeCompare(b)), [published]);
  const [tag, setTag] = useState<string | null>(null);
  const shown = tag ? published.filter((p) => p.tags.includes(tag)) : published;

  return (
    <>
      <Seo title="Projetos" path="/projetos" description="O que eu criei a partir do que aprendi como Embaixadora Estudantil do Google: cada projeto nasceu de uma ferramenta específica, com problema, processo, prompts e resultado." />
      <PageHeader
        crumbs={[{ label: "Início", to: "/" }, { label: "Projetos" }]}
        title="Projetos"
        lead="Esta área reúne projetos práticos quando houver uma experiência completa para documentar. Cada projeto terá sua própria página, com contexto, objetivo, processo, resultado e evidências — sem inventar atividades ou resultados."
      />
      <section className="page-section">
        <div className="container">
          {tags.length > 1 && (
            <div className="filters" role="group" aria-label="Filtrar por tag">
              <button type="button" className="filter-chip" aria-pressed={tag === null} onClick={() => setTag(null)}>
                Todos ({published.length})
              </button>
              {tags.map((t) => (
                <button key={t} type="button" className="filter-chip" aria-pressed={tag === t} onClick={() => setTag(t)}>
                  {t}
                </button>
              ))}
            </div>
          )}
          {shown.length > 0 ? (
            <div className="project-grid" aria-live="polite">
              {shown.map((p) => (
                <ProjectCard key={p.slug} project={p} />
              ))}
            </div>
          ) : (
            <div className="empty projects__more">
              <strong>Nenhum projeto publicado ainda.</strong> Esta área será preenchida quando você adicionar experiências práticas completas, com contexto, implementação, resultado e evidência.
            </div>
          )}
        </div>
      </section>
    </>
  );
}
