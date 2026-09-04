import "./GeminiSection.css";

const MODALITIES = [
  { label: "Texto", note: "escrever, resumir, explicar, traduzir" },
  { label: "Imagem", note: "descrever, comparar, gerar, editar" },
  { label: "Áudio", note: "ouvir, transcrever, responder por voz" },
  { label: "Vídeo", note: "assistir e interpretar cenas" },
  { label: "Documentos", note: "ler PDFs e planilhas longas" },
];

export default function GeminiSection() {
  return (
    <section id="gemini" className="section gemini">
      <div className="container gemini__grid">
        <div>
          <h2 className="gemini__title">
            O Gemini não lê só palavras —
            <br />
            ele lê <span className="gradient-text">contexto</span>.
          </h2>
          <p className="gemini__lead">
            Gemini é a família de modelos de inteligência artificial do
            Google. A ideia central é simples de explicar, mesmo sendo
            tecnicamente sofisticada: em vez de entender apenas texto, o
            modelo foi treinado para raciocinar sobre várias formas de
            informação ao mesmo tempo — texto, imagens, áudio, vídeo e
            documentos — dentro de uma mesma conversa.
          </p>
          <p className="gemini__lead">
            Isso muda o tipo de pergunta que você pode fazer. Em vez de
            descrever uma imagem para a IA, você mostra a imagem. Em vez de
            copiar trechos de um PDF de 200 páginas, você entrega o
            documento inteiro. O Gemini também está presente em diferentes
            lugares — como assistente conversacional, dentro de apps do
            Google e como base para ferramentas como o Notebook e o Canvas,
            que este projeto explora nas próximas seções.
          </p>
        </div>
        <ul className="gemini__modalities" aria-label="Formatos que o Gemini processa">
          {MODALITIES.map((m) => (
            <li key={m.label}>
              <span className="gemini__modality-label">{m.label}</span>
              <span className="gemini__modality-note">{m.note}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
