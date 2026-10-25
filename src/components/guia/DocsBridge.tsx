import { Link } from "react-router-dom";
import { docs } from "../../lib/content";
import "./DocsBridge.css";



export default function DocsBridge() {
  return (
    <section id="documentacao" className="section docsbridge">
      <div className="container">
        <p className="docsbridge__kicker">Quer ir além?</p>

        <h2 className="docsbridge__title">
          Tudo aqui foi pensado para despertar curiosidade — não para
          esgotar o assunto.
        </h2>

        <p className="docsbridge__lead">
          Se você quer entender o que está por trás dessa experiência —
          arquitetura conceitual, limitações, boas práticas — a documentação
          técnica está separada em arquivos Markdown, um por tema. Ela abre aqui
          mesmo, e os arquivos originais estão no repositório.
        </p>

        <ul className="docsbridge__list">
          {docs.map((doc) => (
            <li key={doc.slug}>
              <Link to={`/guia-gemini/docs/${doc.slug}`} className="docsbridge__link">
                <span className="docsbridge__link-title">{doc.title}</span>
                <span className="docsbridge__link-desc">{doc.desc}</span>
                <span className="docsbridge__link-file">
                  docs/{doc.slug}.md
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
