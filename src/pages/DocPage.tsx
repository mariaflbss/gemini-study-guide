import { Link, useParams } from "react-router-dom";
import PageHeader from "../components/ui/PageHeader";
import Markdown from "../components/markdown/Markdown";
import Seo from "../components/ui/Seo";
import { docs, getDoc } from "../lib/content";
import NotFound from "./NotFound";
import "./pages.css";

export default function DocPage() {
  const { slug } = useParams();
  const doc = getDoc(slug);
  if (!doc) return <NotFound />;
  const i = docs.findIndex((d) => d.slug === doc.slug);
  const prev = docs[i - 1];
  const next = docs[i + 1];

  return (
    <>
      <Seo title={doc.title} description={doc.desc} path={`/guia-gemini/docs/${doc.slug}`} type="article" />
      <PageHeader
        crumbs={[{ label: "Início", to: "/" }, { label: "Documentação", to: "/guia-gemini" }, { label: doc.title }]}
        title={doc.title}
        lead={doc.desc}
      />
      <div className="container docpage">
        <nav aria-label="Documentação" className="docpage__nav">
          <Link to="/guia-gemini" className="docpage__back">← Guia visual</Link>
          <ul>
            {docs.map((d) => (
              <li key={d.slug}>
                <Link to={`/guia-gemini/docs/${d.slug}`} aria-current={d.slug === doc.slug ? "page" : undefined}>{d.title}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <article className="docpage__body">
          <Markdown docBase="/guia-gemini/docs">{doc.body}</Markdown>
          <nav className="pager" aria-label="Documento anterior e seguinte">
            {prev ? <Link to={`/guia-gemini/docs/${prev.slug}`} className="pager__prev"><span>Anterior</span>{prev.title}</Link> : <span />}
            {next ? <Link to={`/guia-gemini/docs/${next.slug}`} className="pager__next"><span>Próximo</span>{next.title}</Link> : <span />}
          </nav>
        </article>
      </div>
    </>
  );
}
