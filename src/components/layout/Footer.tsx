import { Link } from "react-router-dom";
import { SparkMark } from "../icons";
import AppLink from "../ui/AppLink";
import { site } from "../../lib/content";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__about">
            <div className="footer__brand">
              <SparkMark size={20} />
              <span>{site.handle}</span>
            </div>
            <p className="footer__tagline">{site.tagline}</p>
          </div>

          <nav aria-label="Páginas" className="footer__col">
            <h2 className="footer__title">Páginas</h2>
            <Link to="/sobre">Sobre</Link>
            <Link to="/projetos">Projetos</Link>
            <Link to="/evolucao">Evolução</Link>
            <Link to="/contato">Contato</Link>
          </nav>

          <nav aria-label="Embaixadora Estudantil do Google" className="footer__col">
            <h2 className="footer__title">Embaixadora Estudantil do Google</h2>
            <Link to="/embaixadora-estudantil-google">Jornada completa</Link>
            <Link to="/embaixadora-estudantil-google">Semanas 1–9</Link>
          </nav>

          <nav aria-label="Documentação" className="footer__col">
            <h2 className="footer__title">Documentação</h2>
            <Link to="/guia-gemini">Guia visual</Link>
            <Link to="/guia-gemini/docs/google-gemini">Documentação técnica</Link>
            <Link to="/guia-gemini/docs/referencias">Referências</Link>
            <AppLink href={site.links.github}>GitHub</AppLink>
          </nav>
        </div>

        <p className="footer__disclaimer">
          Este é um laboratório pessoal de aprendizagem e experimentação em tecnologia, independente. Não é um site
          oficial do Google e não é afiliado, endossado ou patrocinado pelo Google. Google, Gemini, Gemini Notebook e
          Gemini Canvas são marcas registradas da Google LLC.
        </p>
        <p className="footer__meta">© {new Date().getFullYear()} {site.handle}. Feito com React, TypeScript e Markdown.</p>
      </div>
    </footer>
  );
}
