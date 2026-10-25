import { Link } from "react-router-dom";
import "./Home.css";

const STEPS = [
  { number: "01", label: "Explorar", text: "Começo pela pergunta, pela documentação e pelo contexto. Antes de construir, quero entender o problema.", to: "/guia-gemini", cta: "Ver documentação", color: "blue" },
  { number: "02", label: "Investigar", text: "Transformo curiosidade em experimento: comparo caminhos, testo ferramentas e registro o que realmente aprendo.", to: "/embaixadora-estudantil-google", cta: "Ver a jornada", color: "red" },
  { number: "03", label: "Gerar valor", text: "O aprendizado ganha forma em projetos, evidências e decisões que posso levar para a vida acadêmica e profissional.", to: "/projetos", cta: "Ver projetos", color: "green" },
];

export default function JourneyPath() {
  return (
    <section className="section journey" aria-labelledby="journey-title">
      <div className="container">
        <div className="journey__intro">
          <div className="section-head">
            <p className="section-kicker">MEU PROCESSO</p>
            <h2 id="journey-title">Uma jornada, não uma lista.</h2>
            <p>O portfólio acompanha como uma pergunta vira investigação, experiência e aprendizado compartilhável.</p>
          </div>
          <span className="journey__formula" aria-hidden="true">pergunta → experiência → evidência → evolução</span>
        </div>

        <ol className="journey__steps">
          {STEPS.map((s) => (
            <li key={s.label} className={`journey__step journey__step--${s.color}`}>
              <div className="journey__step-top">
                <span className="journey__index">{s.number}</span>
                <span className="journey__arrow" aria-hidden="true">↗</span>
              </div>
              <h3>{s.label}</h3>
              <p>{s.text}</p>
              <Link to={s.to} className="link-inline">{s.cta} <span aria-hidden="true">→</span></Link>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
