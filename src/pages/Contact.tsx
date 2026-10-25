import PageHeader from "../components/ui/PageHeader";
import AppLink from "../components/ui/AppLink";
import Seo from "../components/ui/Seo";
import CopyButton from "../components/ui/CopyButton";
import { site } from "../lib/content";
import "./pages.css";

export default function Contact() {
  const email = "laboissieremaria@gmail.com";
  const linkedin =
    "https://www.linkedin.com/in/maria-fernanda-laboissiere-25362b353/";

  return (
    <>
      <Seo
        title="Contato"
        path="/contato"
        description="Como falar comigo: GitHub, LinkedIn e e-mail."
      />

      <PageHeader
        crumbs={[
          { label: "Início", to: "/" },
          { label: "Contato" },
        ]}
        title="Contato"
        lead="Se algum projeto ou aprendizado daqui fez sentido para você, vamos conversar."
      />

      <section className="page-section">
        <div className="container contact">
          <div className="card contact__item">
            <h2>GitHub</h2>
            <p>Código dos projetos e da documentação.</p>

            <AppLink
              href={site.links.github}
              className="btn btn--ghost btn--small"
            >
              github.com/{site.handle}
            </AppLink>
          </div>

          <div className="card contact__item">
            <h2>LinkedIn</h2>
            <p>Atualizações da jornada e dos projetos.</p>

            <AppLink
              href={linkedin}
              className="btn btn--ghost btn--small"
            >
              Abrir perfil
            </AppLink>
          </div>

          <div className="card contact__item">
            <h2>E-mail</h2>
            <p>Para propostas e conversas mais longas.</p>

            <span className="contact__mail">
              <a
                href={`mailto:${email}`}
                className="link-inline"
              >
                {email}
              </a>

              <CopyButton text={email} />
            </span>
          </div>
        </div>
      </section>
    </>
  );
}
