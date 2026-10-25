import { Link } from "react-router-dom";
import "./Home.css";

export default function ContactCTA() {
  return (
    <section className="cta" aria-labelledby="cta-title">
      <div className="container">
        <div className="cta__inner">
          <div>
            <p className="section-kicker">PRÓXIMO PASSO</p>
            <h2 id="cta-title">Uma boa conversa também pode virar um experimento.</h2>
            <p>Se você quer falar sobre um projeto, tecnologia ou oportunidade, vamos conversar.</p>
          </div>
          <Link to="/contato" className="btn btn--primary">Entrar em contato <span aria-hidden="true">↗</span></Link>
        </div>
      </div>
    </section>
  );
}
