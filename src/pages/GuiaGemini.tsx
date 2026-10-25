import { Link } from "react-router-dom";
import PageHeader from "../components/ui/PageHeader";
import Seo from "../components/ui/Seo";
import { docs } from "../lib/content";
import "./pages.css";

export default function GuiaGemini() {
  return (
    <>
      <Seo
        title="Documentação técnica"
        path="/guia-gemini"
        description="Índice da documentação técnica do portfólio: conceitos, métodos, limites, ferramentas e referências oficiais."
      />
      <PageHeader
        crumbs={[{ label: "Início", to: "/" }, { label: "Documentação técnica" }]}
        title="Documentação técnica"
        lead="Uma área dedicada exclusivamente a documentação: conceitos, métodos, limites e referências. Experiências, projetos e evidências ficam nas páginas correspondentes."
      />

      <main className="docs-index page-section">
        <div className="container">
          <div className="docs-index__intro">
            <span className="section-kicker">ÍNDICE · {String(docs.length).padStart(2, "0")} DOCUMENTOS</span>
            <h2>Conhecimento organizado para consulta.</h2>
            <p>Os documentos abaixo explicam tecnicamente os temas estudados, sem misturar a documentação com o registro de projetos ou atividades práticas.</p>
          </div>

          <div className="docs-index__grid">
            {docs.map((doc, index) => (
              <Link key={doc.slug} to={`/guia-gemini/docs/${doc.slug}`} className="docs-index__card">
                <div className="docs-index__number">{String(index + 1).padStart(2, "0")}</div>
                <div className="docs-index__body">
                  <h3>{doc.title}</h3>
                  <p>{doc.desc}</p>
                  <span className="docs-index__open">Ler documentação <span aria-hidden="true">↗</span></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
