import { Link, useParams } from "react-router-dom";
import PageHeader from "../components/ui/PageHeader";
import Markdown from "../components/markdown/Markdown";
import Rich from "../components/ui/Rich";
import AppLink from "../components/ui/AppLink";
import Seo from "../components/ui/Seo";
import { getProject, getWeek } from "../lib/content";
import NotFound from "./NotFound";
import "../components/projects/Projects.css";
import "./pages.css";

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = getProject(slug);
  if (!project) return <NotFound />;

  const week = project.week ? getWeek(`semana-${project.week}`) : undefined;
  const fromProgram = project.origin === "embaixadora-estudantil-google";
  const { github, demo, live } = project.links;

  return (
    <>
      <Seo
        title={project.title}
        description={project.summary}
        path={`/projetos/${project.slug}`}
        image={project.cover?.src}
        type="article"
      />
      <PageHeader
        crumbs={[{ label: "Início", to: "/" }, { label: "Projetos", to: "/projetos" }, { label: project.title }]}
        title={project.title}
        lead={<Rich>{project.summary}</Rich>}
      >
        <ul className="tag-list pdetail__tags" aria-label="Tags">
          {project.tags.map((t) => (
            <li key={t} className="tag">{t}</li>
          ))}
        </ul>
      </PageHeader>

      <section className="page-section">
        <div className="container">
          {fromProgram && (
            <p className="origin">
              <span aria-hidden="true">✦</span>
              <span>
                {week ? (
                  <>
                    <strong>Projeto desenvolvido durante a Semana {week.number} do programa de Embaixadores Estudantis do Google.</strong>{" "}
                    <Link to={`/embaixadora-estudantil-google/${week.slug}`} className="link-inline">Ver a semana {week.number}</Link>
                  </>
                ) : (
                  <>
                    <strong>Projeto criado a partir da minha jornada como Embaixadora Estudantil do Google.</strong>{" "}
                    <Link to="/embaixadora-estudantil-google" className="link-inline">Ver a jornada</Link>
                  </>
                )}
              </span>
            </p>
          )}

          {demo && (
            <section className="pdetail__demo" id="teste-pratico" aria-labelledby="teste-pratico-title">
              <div className="pdetail__demo-head">
                <div>
                  <p className="pdetail__eyebrow">TESTE PRÁTICO</p>
                  <h2 id="teste-pratico-title">Experimente o projeto aqui</h2>
                  <p>Em vez de apenas ler sobre o projeto, você pode interagir com a experiência nesta própria página.</p>
                </div>
                {live && (
                  <AppLink href={live} className="btn btn--ghost btn--small">Abrir projeto publicado ↗</AppLink>
                )}
              </div>
              <div className="pdetail__demo-frame">
                <iframe
                  src={demo}
                  title={`Teste prático — ${project.title}`}
                  loading="lazy"
                  allow="fullscreen"
                />
              </div>
            </section>
          )}

          <div className="pdetail">
            <div className="pdetail__main">
              <div className="pcase">
                <div>
                  <h2>Problema</h2>
                  <p><Rich>{project.problem}</Rich></p>
                </div>
                <div>
                  <h2>Objetivo</h2>
                  <p><Rich>{project.objective}</Rich></p>
                </div>
                <div>
                  <h2>Processo</h2>
                  <Markdown>{project.process}</Markdown>
                </div>
                {project.prompts.length > 0 && (
                  <div>
                    <h2>Prompts usados</h2>
                    <ul className="prompt-list">
                      {project.prompts.map((p) => (
                        <li key={p} className="prompt-list__item"><Rich>{p}</Rich></li>
                      ))}
                    </ul>
                  </div>
                )}
                <div>
                  <h2>Resultado</h2>
                  <ul>
                    {project.results.map((r) => (
                      <li key={r}><Rich>{r}</Rich></li>
                    ))}
                  </ul>
                </div>
                {project.learning && (
                  <div>
                    <h2>Aprendizado</h2>
                    <Markdown>{project.learning}</Markdown>
                  </div>
                )}
              </div>

              <Markdown>{project.body}</Markdown>
            </div>

            <aside className="pside" aria-label="Detalhes do projeto">
              {project.tool && (
                <div className="card">
                  <h2>Ferramenta principal</h2>
                  <p className="tag">{project.tool}</p>
                </div>
              )}
              <div className="card">
                <h2>Projeto</h2>
                <div className="pside__links">
                  {demo && <a href="#teste-pratico" className="btn btn--primary btn--small">Testar agora ↓</a>}
                  {live && <AppLink href={live} className="btn btn--ghost btn--small">Abrir projeto publicado ↗</AppLink>}
                  {github && <AppLink href={github} className="btn btn--ghost btn--small">Código no GitHub</AppLink>}
                </div>
              </div>
              <div className="card">
                <h2>Tecnologias</h2>
                <ul className="tag-list">
                  {project.tech.map((t) => (
                    <li key={t} className="tag">{t}</li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
