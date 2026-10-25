import { Link } from "react-router-dom";
import PromptDemo from "./PromptDemo";
import { site } from "../../lib/content";
import "./Home.css";

export default function HomeHero() {
  return (
    <section className="hhero" aria-labelledby="home-title">
      <div className="hhero__ambient hhero__ambient--one" aria-hidden="true" />
      <div className="hhero__ambient hhero__ambient--two" aria-hidden="true" />
      <div className="hhero__ambient hhero__ambient--three" aria-hidden="true" />
      <div className="container hhero__inner">
        <div className="hhero__intro">
          <p className="hhero__eyebrow">
            <span className="hhero__eyebrow-mark" aria-hidden="true"><i /><i /><i /><i /></span>
            Portfólio de tecnologia, IA e aprendizagem
          </p>
          <p className="hhero__hello">Oi, eu sou <strong>{site.name}</strong>.</p>
          <h1 id="home-title" className="hhero__title">
            Um espaço para aprender, experimentar e <span className="hhero__title-accent">transformar estudo em prática.</span>
          </h1>
          <p className="hhero__lead">
            Um registro da minha jornada entre tecnologia, aprendizagem e construção de coisas que fazem sentido.
          </p>
          <div className="hhero__actions">
            <Link to="/embaixadora-estudantil-google" className="btn btn--primary">Ver minha jornada <span aria-hidden="true">↗</span></Link>
            <Link to="/projetos" className="btn btn--ghost">Ver projetos</Link>
          </div>
        </div>

        <PromptDemo />
      </div>

      <div className="hhero__scroll" aria-hidden="true">
        <span>Role para explorar</span>
        <span className="hhero__scroll-line" />
      </div>
    </section>
  );
}
