import "./DocsBridge.css";

const DOCS = [
  {
    file: "google-gemini.md",
    title: "Google Gemini",
    desc: "O ecossistema, os conceitos e a multimodalidade explicados em profundidade.",
    url: "https://github.com/mariaflbss/gemini-study-guide/blob/main/docs/google-gemini.md",
  },
  {
    file: "gemini-notebook.md",
    title: "Gemini Notebook",
    desc: "Fontes, contexto, grounding e o funcionamento conceitual do produto.",
    url: "https://github.com/mariaflbss/gemini-study-guide/blob/main/docs/gemini-notebook.md",
  },
  {
    file: "gemini-canvas.md",
    title: "Gemini Canvas",
    desc: "Artefatos, criação, edição e os fluxos de trabalho possíveis.",
    url: "https://github.com/mariaflbss/gemini-study-guide/blob/main/docs/gemini-canvas.md",
  },
  {
    file: "grounding-e-fontes.md",
    title: "Grounding e fontes",
    desc: "Por que respostas ancoradas em fontes ajudam — e onde ainda falham.",
    url: "https://github.com/mariaflbss/gemini-study-guide/blob/main/docs/grounding-e-fontes.md",
  },
  {
    file: "engenharia-de-prompts.md",
    title: "Engenharia de prompts",
    desc: "Como estruturar instruções para obter respostas melhores.",
    url: "https://github.com/mariaflbss/gemini-study-guide/blob/main/docs/engenharia-de-prompts.md",
  },
  {
    file: "notebook-e-canvas.md",
    title: "Notebook + Canvas",
    desc: "Como as duas ferramentas podem participar de um mesmo fluxo.",
    url: "https://github.com/mariaflbss/gemini-study-guide/blob/main/docs/notebook-e-canvas.md",
  },
  {
    file: "limitacoes-e-confiabilidade.md",
    title: "Limitações e confiabilidade",
    desc: "Alucinações, excesso de confiança e a necessidade de revisão humana.",
    url: "https://github.com/mariaflbss/gemini-study-guide/blob/main/docs/limitacoes-e-confiabilidade.md",
  },
  {
    file: "referencias.md",
    title: "Referências",
    desc: "As fontes oficiais usadas para construir esta documentação.",
    url: "https://github.com/mariaflbss/gemini-study-guide/blob/main/docs/referencias.md",
  },
];

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
          técnica está separada em arquivos Markdown, um por tema.
        </p>

        <ul className="docsbridge__list">
          {DOCS.map((doc) => (
            <li key={doc.file}>
              <a
                href={doc.url}
                className="docsbridge__link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="docsbridge__link-title">{doc.title}</span>
                <span className="docsbridge__link-desc">{doc.desc}</span>
                <span className="docsbridge__link-file">
                  docs/{doc.file}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
