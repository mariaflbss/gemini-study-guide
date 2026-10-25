import { Link } from "react-router-dom";
import PageHeader from "../components/ui/PageHeader";
import Markdown from "../components/markdown/Markdown";
import StatusBadge from "../components/ambassador/StatusBadge";
import Seo from "../components/ui/Seo";
import { site, weeks } from "../lib/content";
import "./pages.css";

export default function Evolucao() {
  const ordered = [...weeks].sort((a, b) => b.number - a.number);

  return (
    <>
      <Seo
        title="Evolução"
        path="/evolucao"
        description="Um painel com a reflexão e os próximos passos de cada semana, em ordem — para acompanhar como o aprendizado vem evoluindo."
      />
      <PageHeader
        crumbs={[{ label: "Início", to: "/" }, { label: "Evolução" }]}
        title="Como isso vem evoluindo"
        lead="A cada semana eu registro o que ainda não entendi bem e o que pretendo tentar a seguir. Esta página junta essas duas partes de todas as semanas, da mais recente para a primeira — é o que uso para revisar antes de decidir o próximo passo."
      />

      <section className="page-section">
        <div className="container evo">
          <ol className="evo__list">
            {ordered.map((w) => (
              <li key={w.slug} className="card evo__item">
                <div className="evo__head">
                  <Link to={`/embaixadora-estudantil-google/${w.slug}`} className="evo__week">
                    Semana {w.number}: {w.theme}
                  </Link>
                  <StatusBadge status={w.status} />
                </div>
                <div className="evo__cols">
                  <div>
                    <h2>Reflexão</h2>
                    <Markdown>{w.sections["reflexao"] ?? "Reflexão não registrada nesta página."}</Markdown>
                  </div>
                  <div>
                    <h2>Próximos passos</h2>
                    <Markdown>{w.sections["proximos-passos"] ?? "Próximos passos não registrados nesta página."}</Markdown>
                  </div>
                </div>
                <Link to={`/embaixadora-estudantil-google/${w.slug}#reflexao`} className="link-inline">
                  Ver a semana completa
                </Link>
              </li>
            ))}
          </ol>

          <aside className="card evo__method" aria-label="Método">
            <h2>O método por trás disso</h2>
            <p>Estas três etapas se repetem ao longo da jornada e dos projetos.</p>
            <ol>
              {site.method.map((m) => (
                <li key={m.label}>
                  <strong>{m.label}.</strong> {m.text}
                </li>
              ))}
            </ol>
          </aside>
        </div>
      </section>
    </>
  );
}
