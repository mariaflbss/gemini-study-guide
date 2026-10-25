import { Link, useParams } from "react-router-dom";
import PageHeader from "../components/ui/PageHeader";
import Markdown from "../components/markdown/Markdown";
import Rich from "../components/ui/Rich";
import Seo from "../components/ui/Seo";
import ProjectCard from "../components/projects/ProjectCard";
import StatusBadge from "../components/ambassador/StatusBadge";
import Challenge from "../components/ambassador/Challenge";
import Evidence from "../components/ambassador/Evidence";
import Masterclass from "../components/ambassador/Masterclass";
import { ReadingProgress, WeekToc, type TocItem } from "../components/ambassador/WeekNav";
import { getProject, getWeek, projects, weeks } from "../lib/content";
import NotFound from "./NotFound";
import "../components/ambassador/Ambassador.css";
import "../components/projects/Projects.css";

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="wsec" aria-labelledby={`${id}-h`}>
      <h2 id={`${id}-h`}>{title}</h2>
      {children}
    </section>
  );
}

export default function WeekPage() {
  const { slug } = useParams();
  const week = getWeek(slug);
  if (!week) return <NotFound />;

  const idx = weeks.findIndex((w) => w.slug === week.slug);
  const prev = weeks[idx - 1];
  const next = weeks[idx + 1];
  const md = (key: string) => week.sections[key] ?? "Seção não registrada nesta página.";

  const linked = [
    ...(week.project ? [getProject(week.project)].filter(Boolean) : []),
    ...projects.filter((p) => p.week === week.number && p.slug !== week.project),
  ] as NonNullable<ReturnType<typeof getProject>>[];

  const toc: TocItem[] = [
    { id: "contexto", label: "Contexto" },
    { id: "desafios", label: "Atividades propostas" },
    { id: "aprendizados", label: "Aprendizados" },
    { id: "ferramentas", label: "Ferramentas" },
    ...(week.masterclass ? [{ id: "masterclass", label: "Masterclass" }] : []),
    { id: "experimentacao", label: "Experimentação" },
    { id: "aplicacao-pratica", label: "Aplicação prática" },
    { id: "projeto-relacionado", label: "Projeto relacionado" },
    { id: "evidencias", label: "Evidências" },
    { id: "reflexao", label: "Reflexão" },
    { id: "proximos-passos", label: "Próximos passos" },
  ];

  return (
    <>
      <Seo
        title={`Semana ${week.number}: ${week.theme}`}
        description={week.summary}
        path={`/embaixadora-estudantil-google/${week.slug}`}
        type="article"
      />
      <ReadingProgress />
      <PageHeader
        crumbs={[{ label: "Início", to: "/" }, { label: "Embaixadora Estudantil do Google", to: "/embaixadora-estudantil-google" }, { label: `Semana ${week.number}` }]}
        title={<>Semana {week.number}: {week.theme}</>}
        lead={week.summary}
      >
        <div className="whead__meta">
          <StatusBadge status={week.status} />
          <ul className="tag-list" aria-label="Ferramentas">
            {week.tools.map((t) => (
              <li key={t} className={/^\[ADICIONAR/.test(t) ? undefined : "tag"}><Rich>{t}</Rich></li>
            ))}
          </ul>
        </div>
      </PageHeader>

      <div className="container week">
        <WeekToc items={toc} />

        <div className="week__body">
          <Section id="contexto" title="Contexto"><Markdown>{md("contexto")}</Markdown></Section>

          <Section id="desafios" title="Atividades propostas">
            <div className="chal-list">
              {week.challenges.map((c) => (
                <Challenge key={c.id} item={c} />
              ))}
            </div>
          </Section>

          <Section id="aprendizados" title="Aprendizados"><Markdown>{md("aprendizados")}</Markdown></Section>

          <Section id="ferramentas" title="Ferramentas">
            <ul className="tag-list">
              {week.tools.map((t) => (
                <li key={t} className={/^\[ADICIONAR/.test(t) ? undefined : "tag"}><Rich>{t}</Rich></li>
              ))}
            </ul>
            <h3 className="wsec__sub">Possíveis aplicações</h3>
            <ul className="wlist">
              {week.applications.map((a) => (
                <li key={a}><Rich>{a}</Rich></li>
              ))}
            </ul>
          </Section>

          {week.masterclass && (
            <Section id="masterclass" title={week.masterclass.label}>
              <Masterclass data={week.masterclass} />
            </Section>
          )}

          <Section id="experimentacao" title="Experimentação"><Markdown>{md("experimentacao")}</Markdown></Section>
          <Section id="aplicacao-pratica" title="Aplicação prática"><Markdown>{md("aplicacao-pratica")}</Markdown></Section>

          <Section id="projeto-relacionado" title="Projeto relacionado">
            {linked.length > 0 ? (
              <div className="project-grid">
                {linked.map((p) => (
                  <ProjectCard key={p.slug} project={p} />
                ))}
              </div>
            ) : (
              <div className="empty">
                <p>Nenhum projeto foi vinculado a esta semana.</p>
                <p style={{ marginTop: 10 }}>Projetos relevantes podem ser adicionados aqui quando houver uma relação real com o conteúdo da semana.</p>
              </div>
            )}
          </Section>

          <Section id="evidencias" title="Evidências"><Evidence items={week.evidence} /></Section>
          <Section id="reflexao" title="Reflexão"><Markdown>{md("reflexao")}</Markdown></Section>
          <Section id="proximos-passos" title="Próximos passos"><Markdown>{md("proximos-passos")}</Markdown></Section>

          <nav className="pager" aria-label="Semana anterior e seguinte">
            {prev ? (
              <Link to={`/embaixadora-estudantil-google/${prev.slug}`} className="pager__prev"><span>Semana anterior</span>Semana {prev.number}: {prev.theme}</Link>
            ) : <span />}
            {next ? (
              <Link to={`/embaixadora-estudantil-google/${next.slug}`} className="pager__next"><span>Próxima semana</span>Semana {next.number}: {next.theme}</Link>
            ) : <span />}
          </nav>
        </div>
      </div>
    </>
  );
}
