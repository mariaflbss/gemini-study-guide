import "./Hero.css";

export default function Hero() {
  return (
    <section id="topo" className="hero">
      <div className="hero__blob hero__blob--a" aria-hidden="true" />
      <div className="hero__blob hero__blob--b" aria-hidden="true" />
      <div className="container hero__inner">
        <p className="hero__kicker">Um projeto de portfólio, não oficial</p>
        <h1 className="hero__title">
          Três formas de pensar com IA:
          <br />
          <span className="gradient-text">conversar, explorar, criar.</span>
        </h1>
        <p className="hero__lead">
          Este projeto reúne o Google Gemini, o Gemini Notebook e o Gemini
          Canvas em uma única experiência — para entender o que cada um faz,
          onde eles se cruzam e por que a diferença entre eles importa.
        </p>
        <div className="hero__actions">
          <a href="#gemini" className="btn btn--primary">
            Começar a explorar
          </a>
          <a href="#documentacao" className="btn btn--ghost">
            Ir direto para a documentação
          </a>
        </div>
      </div>
      <svg className="hero__wave" viewBox="0 0 1440 90" preserveAspectRatio="none" aria-hidden="true">
        <path
          d="M0 40 C 240 90 480 0 720 30 C 960 60 1200 10 1440 45 L1440 90 L0 90 Z"
          fill="var(--bg)"
        />
      </svg>
    </section>
  );
}
