import { Link } from "react-router-dom";
import PageHeader from "../components/ui/PageHeader";
import Timeline from "../components/ambassador/Timeline";
import Seo from "../components/ui/Seo";
import { site, weeks } from "../lib/content";
import "../components/ambassador/Ambassador.css";

export default function AmbassadorHub() {
  const withMasterclass = weeks.find((w) => w.masterclass);
  return (
    <>
      <Seo
        title="Embaixadora Estudantil do Google"
        path="/embaixadora-estudantil-google"
        description="Minha jornada semana a semana como Embaixadora Estudantil do Google: desafios, aprendizados, experimentos e projetos com Gemini e ferramentas Google."
      />
      <PageHeader
        crumbs={[{ label: "Início", to: "/" }, { label: "Embaixadora Estudantil do Google" }]}
        title="Minha jornada como Embaixadora Estudantil do Google"
        lead="Cada semana do programa está registrada aqui: o que foi proposto, o que foi aprendido, suas aplicações e as evidências que forem realmente relevantes."
      >
        <ol className="cycle" aria-label="Método: aprender, explorar, experimentar, aplicar, construir, documentar">
          {site.method.map((m) => (
            <li key={m.label}>{m.label}</li>
          ))}
        </ol>
      </PageHeader>

      <section className="page-section">
        <div className="container hub">
          <div className="hub__main">
            <div className="journey-stages" aria-label="Etapas da jornada">
            <article className="card journey-stage">
              <span className="journey-stage__eyebrow">01 · Explorar</span>
              <h2>Interagir</h2>
              <p>Aprender a conversar com a tecnologia, testar possibilidades e compreender como contexto e intenção mudam os resultados.</p>
            </article>
            <article className="card journey-stage">
              <span className="journey-stage__eyebrow">02 · Investigar</span>
              <h2>Analisar</h2>
              <p>Organizar informações, formular perguntas, identificar padrões e avaliar conclusões com base em evidências.</p>
            </article>
            <article className="card journey-stage">
              <span className="journey-stage__eyebrow">03 · Gerar valor</span>
              <h2>Aplicar</h2>
              <p>Relacionar experiências, competências e oportunidades de aplicação acadêmica e profissional.</p>
            </article>
            </div>
            <Timeline weeks={weeks} />
          </div>
          <aside className="hub__aside">
            <div className="card">
              <h2>Como ler esta página</h2>
              <p>Abra uma semana para ver contexto, desafios, aprendizados, experimentos e evidências. Cada semana tem um endereço próprio, então pode ser compartilhada sozinha.</p>
            </div>
            {withMasterclass?.masterclass && (
              <div className="card card--link hub__special">
                <p className="hub__special-label">{withMasterclass.masterclass.label}</p>
                <h2>
                  <Link to={`/embaixadora-estudantil-google/${withMasterclass.slug}#masterclass`} className="stretched">
                    IA e Inteligência Coletiva, com {withMasterclass.masterclass.speaker}
                  </Link>
                </h2>
                <p>Camadas de prompt, metodologia híbrida e geração de movimento.</p>
              </div>
            )}
            <div className="card">
              <h2>Sobre o programa</h2>
              <p>Este site é um registro pessoal. Não é um site oficial do Google e não representa o programa.</p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
