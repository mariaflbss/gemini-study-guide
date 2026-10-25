import { Link } from "react-router-dom";
import PageHeader from "../components/ui/PageHeader";
import Seo from "../components/ui/Seo";

export default function NotFound() {
  return (
    <>
      <Seo title="Página não encontrada" path="/404" />
      <PageHeader title="Página não encontrada" lead="O endereço não existe ou foi movido. Volte para o início ou veja os projetos." />
      <section className="page-section">
        <div className="container" style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
          <Link to="/" className="btn btn--primary">Ir para o início</Link>
          <Link to="/projetos" className="btn btn--ghost">Ver projetos</Link>
        </div>
      </section>
    </>
  );
}
