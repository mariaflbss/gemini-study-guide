import neuralNetworkPlayground from "../../../public/labs/neural-network-playground.html?raw";
import doDadoAoInsight from "../../../public/labs/do-dado-ao-insight.html?raw";
import daExperienciaAoValor from "../../../public/labs/da-experiencia-ao-valor.html?raw";

type Props = {
  slug: string;
  title: string;
};

const labs: Record<string, string> = {
  "neural-network-playground": neuralNetworkPlayground,
  "do-dado-ao-insight": doDadoAoInsight,
  "da-experiencia-ao-valor": daExperienciaAoValor,
};

export default function ProjectLabFrame({ slug, title }: Props) {
  const html = labs[slug];

  if (!html) {
    return <p className="pside__empty">Teste prático indisponível para este projeto.</p>;
  }

  return (
    <iframe
      className="project-demo__iframe"
      srcDoc={html}
      title={`Teste prático — ${title}`}
      allow="fullscreen"
    />
  );
}
