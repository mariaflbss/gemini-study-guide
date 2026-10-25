import { Link } from "react-router-dom";
import { weeks } from "../../lib/content";
import "./Home.css";

export default function AmbassadorSpotlight() {
  return (
    <section className="spot" aria-labelledby="spot-title">
      <div className="spot__ambient" aria-hidden="true" />
      <div className="container spot__inner">
        <div className="spot__copy">
          <p className="section-kicker section-kicker--light">EMBAIXADORA ESTUDANTIL DO GOOGLE</p>
          <h2 id="spot-title">Uma experiência que virou parte da minha jornada.</h2>
          <p>
            A documentação registra o que o programa propõe e o que aprendo ao longo dele. Evidências práticas entram
            somente quando existe uma experiência real para mostrar.
          </p>
          <Link to="/embaixadora-estudantil-google" className="btn btn--light">Abrir a jornada <span aria-hidden="true">↗</span></Link>
        </div>

        <ol className="spot__weeks" aria-label="Semanas registradas">
          {weeks.map((w, i) => (
            <li key={w.slug}>
              <Link to={`/embaixadora-estudantil-google/${w.slug}`}>
                <span className="spot__num">{String(i + 1).padStart(2, "0")}</span>
                <span className="spot__week-copy">
                  <small>Semana {w.number}</small>
                  <strong>{w.theme}</strong>
                </span>
                <span className="spot__go" aria-hidden="true">↗</span>
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
