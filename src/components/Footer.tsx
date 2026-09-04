import { SparkMark } from "./icons";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <SparkMark size={20} />
          <span>Ecossistema Gemini</span>
        </div>
        <p className="footer__disclaimer">
          Este é um projeto de portfólio independente e educacional, criado
          para estudar e apresentar o ecossistema Gemini. Não é um site
          oficial do Google, e não é afiliado, endossado ou patrocinado pelo
          Google. Google, Gemini, Gemini Notebook e Gemini Canvas são marcas
          registradas da Google LLC.
        </p>
        <p className="footer__meta">
          Documentação técnica em <code>/docs</code>. Referências em{" "}
          <a href="./docs/referencias.md">docs/referencias.md</a>.
        </p>
      </div>
    </footer>
  );
}
