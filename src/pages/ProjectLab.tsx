import { useParams, Link } from "react-router-dom";
import { getProject } from "../lib/content";
import NotFound from "./NotFound";
import ProjectLabFrame from "../components/projects/ProjectLabFrame";
import Seo from "../components/ui/Seo";
import "../components/projects/Projects.css";

export default function ProjectLab() {
  const { slug } = useParams();
  const project = getProject(slug);
  if (!project) return <NotFound />;

  return (
    <>
      <Seo title={`Testar — ${project.title}`} description={`Teste prático do projeto ${project.title}.`} path={`/projetos/${project.slug}/testar`} />
      <main className="project-lab-page">
        <div className="project-lab-page__top container">
          <div>
            <p className="project-demo__eyebrow">TESTE PRÁTICO</p>
            <h1>{project.title}</h1>
            <p>Você está usando o projeto diretamente dentro do portfólio.</p>
          </div>
          <Link to={`/projetos/${project.slug}`} className="btn btn--ghost">← Voltar ao projeto</Link>
        </div>
        <div className="project-lab-page__frame">
          <ProjectLabFrame slug={project.slug} title={project.title} />
        </div>
      </main>
    </>
  );
}
