import { ArtifactIcon } from "./icons";
import "./CanvasSection.css";

const ARTIFACTS = ["Texto e documentos", "Código", "Páginas e protótipos", "Aplicações simples", "Slides"];

export default function CanvasSection() {
  return (
    <section id="canvas" className="section canvas">
      <div className="container canvas__grid">
        <div className="canvas__copy">
          <ArtifactIcon size={44} />
          <h2 className="canvas__title">Gemini Canvas</h2>
          <p className="canvas__body">
            Se o Notebook é sobre explorar o que já existe, o{" "}
            <strong>Canvas</strong> é sobre construir algo novo. É um espaço
            de edição em tempo real onde uma ideia — escrita em uma frase —
            pode virar um documento, um trecho de código ou um protótipo
            editável, com o Gemini ajustando o resultado conforme você pede
            mudanças.
          </p>
          <p className="canvas__body">
            Em vez de receber uma resposta e copiar o texto para outro
            programa, você edita diretamente ali: seleciona um trecho, pede
            para reescrever, ajusta o tom, troca uma função de lugar. O
            Canvas guarda essas alterações no próprio espaço de trabalho,
            como um rascunho vivo.
          </p>
        </div>
        <div className="canvas__panel">
          <p className="canvas__panel-label">O que pode nascer no Canvas</p>
          <ul className="canvas__list">
            {ARTIFACTS.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
