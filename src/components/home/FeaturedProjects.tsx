import { Link } from "react-router-dom";
import ProjectCard from "../projects/ProjectCard";
import { isPlaceholder, projects } from "../../lib/content";
import "./Home.css";

export default function FeaturedProjects() {
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
  const featured = published.filter((p) => p.featured);
  const list = featured.length ? featured : published.slice(0, 3);
  return (
    <section className="section featured" aria-labelledby="featured-title">
      <div className="container">
        <div className="featured__head">
          <div className="section-head">
            <h2 id="featured-title">Projetos em destaque</h2>
            <p>Espaço reservado para projetos práticos completos, com contexto, processo, resultado e evidências.</p>
          </div>
          <Link to="/projetos" className="btn btn--ghost btn--small">Todos os projetos</Link>
        </div>
        {list.length > 0 ? (
          <div className="project-grid">
            {list.map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>
        ) : (
          <div className="featured__empty">
            <p className="section-kicker">EM CONSTRUÇÃO</p>
            <h3>Nenhum projeto prático publicado ainda.</h3>
            <p>Esta área fica reservada para experiências que tenham uma história real, implementação e evidências. Quando houver um projeto pronto para mostrar, ele entra aqui.</p>
            <Link to="/projetos" className="btn btn--ghost btn--small">Abrir área de projetos <span aria-hidden="true">→</span></Link>
          </div>
        )}
      </div>
    </section>
  );
}
