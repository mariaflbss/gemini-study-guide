import { Link } from "react-router-dom";
import Rich from "../ui/Rich";
import type { Project } from "../../lib/types";
import "./Projects.css";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="pcard card">
      <Link to={`/projetos/${project.slug}`} className="pcard__cover-link" aria-label={`Ver ${project.title}`}>
        <div className="pcard__cover">
          {project.cover ? (
            <img src={project.cover.src} alt={project.cover.alt} loading="lazy" />
          ) : (
            <div className="pcard__fallback" aria-hidden="true">Prévia do projeto</div>
          )}
        </div>
      </Link>
      <div className="pcard__body">
        <p className="pcard__kind">
          {project.tool || project.kind}
          {project.week ? ` · Semana ${project.week}` : ""}
        </p>
        <h3 className="pcard__title">
          <Link to={`/projetos/${project.slug}`}>
            {project.title}
          </Link>
        </h3>
        <p className="pcard__summary">
          <Rich>{project.summary}</Rich>
        </p>
        <ul className="tag-list pcard__tags" aria-label="Tecnologias">
          {project.tech.slice(0, 4).map((t) => (
            <li key={t} className="tag">{t}</li>
          ))}
        </ul>
        <div className="pcard__actions">
          <Link to={`/projetos/${project.slug}`} className="btn btn--primary btn--small">Ver projeto</Link>
          <Link to={`/projetos/${project.slug}#teste-pratico`} className="btn btn--ghost btn--small">Testar agora ↗</Link>
        </div>
      </div>
    </article>
  );
}
