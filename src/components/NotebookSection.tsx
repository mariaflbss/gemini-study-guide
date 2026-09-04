import { SourcesIcon, FlowArrow } from "./icons";
import "./NotebookSection.css";

const STEPS = ["Fontes", "Notebook", "Perguntas", "Compreensão", "Síntese"];

export default function NotebookSection() {
  return (
    <section id="notebook" className="section notebook">
      <div className="container">
        <div className="notebook__intro">
          <SourcesIcon size={44} />
          <h2 className="notebook__title">Gemini Notebook</h2>
        </div>
        <p className="notebook__hook">
          Imagine não precisar conversar com uma IA no vazio. Em vez disso,
          você reúne um conjunto de materiais — artigos, anotações, PDFs,
          transcrições — dentro de um espaço só seu, e passa a explorar
          exatamente aquele conhecimento por meio de perguntas.
        </p>
        <p className="notebook__body">
          É essa a proposta do <strong>Gemini Notebook</strong> (o produto
          que a maioria conhece pelo nome anterior, NotebookLM). Ele funciona
          como um caderno de pesquisa: você adiciona as suas fontes, e as
          respostas do Gemini passam a se basear naquele material — com
          citações que apontam de volta para o trecho exato de onde a
          informação veio. O resultado é uma conversa ancorada no que você
          realmente forneceu, não em conhecimento genérico da internet.
        </p>

        <div className="notebook__flow" role="img" aria-label="Fluxo conceitual: Fontes, Notebook, Perguntas, Compreensão, Síntese">
          {STEPS.map((step, i) => (
            <div className="notebook__flow-item" key={step}>
              <div className="notebook__flow-node">{step}</div>
              {i < STEPS.length - 1 && <FlowArrow className="notebook__flow-arrow" />}
            </div>
          ))}
        </div>
        <p className="notebook__caption">
          Uma simplificação conceitual do que acontece ao usar o Notebook —
          não uma descrição da arquitetura interna do produto.
        </p>
      </div>
    </section>
  );
}
