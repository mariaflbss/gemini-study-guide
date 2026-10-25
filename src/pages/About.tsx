import { useState } from "react";
import PageHeader from "../components/ui/PageHeader";
import Rich from "../components/ui/Rich";
import Seo from "../components/ui/Seo";
import { site } from "../lib/content";
import "./pages.css";

function Method() {
  const [active, setActive] = useState(0);
  const step = site.method[active];
  return (
    <div className="method">
      <div className="method__rail" role="group" aria-label="Etapas do método">
        {site.method.map((m, i) => (
          <button
            key={m.label}
            type="button"
            className="method__step"
            aria-pressed={i === active}
            data-done={i < active}
            onClick={() => setActive(i)}
          >
            <span className="method__dot" aria-hidden="true" />
            {m.label}
          </button>
        ))}
      </div>
      <p className="method__text" aria-live="polite">
        <strong>{step.label}.</strong> {step.text}
      </p>
    </div>
  );
}

export default function About() {
  return (
    <>
      <Seo title="Sobre" path="/sobre" description="Quem eu sou, como aprendo e o que estou estudando: IA, ferramentas Google e desenvolvimento web." />
      <PageHeader crumbs={[{ label: "Início", to: "/" }, { label: "Sobre" }]} title="Quem eu sou" lead={site.tagline} />

      <section className="page-section">
        <div className="container about__grid">
          <div className="about__bio">
            {site.bio.map((p, i) => (
              <p key={i}><Rich>{p}</Rich></p>
            ))}
          </div>
          <aside className="card about__facts" aria-label="Resumo">
            <dl>
              <dt>Área</dt>
              <dd>{site.role}</dd>
              <dt>Programa</dt>
              <dd>Embaixadora Estudantil do Google</dd>
              <dt>Interesses</dt>
              <dd>{site.interests.join(", ")}</dd>
            </dl>
          </aside>
        </div>
      </section>

      <section id="metodo" className="page-section page-section--alt">
        <div className="container">
          <h2>Como eu aprendo</h2>
          <p className="lead">Três etapas que guiam tanto os projetos quanto a documentação deste site. Clique em uma etapa.</p>
          <Method />
        </div>
      </section>

      <section id="habilidades" className="page-section">
        <div className="container">
          <h2>Habilidades e ferramentas</h2>
          <p className="lead">Somente o que aparece nos projetos e nas atividades documentadas aqui.</p>
          <div className="skills">
            {site.skills.map((g) => (
              <div className="card skills__group" key={g.group}>
                <h3>{g.group}</h3>
                {g.note && <p className="skills__note">{g.note}</p>}
                <ul className="tag-list">
                  {g.items.map((it) => (
                    <li key={it} className={/^\[ADICIONAR/.test(it) ? undefined : "tag"}>
                      <Rich>{it}</Rich>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
