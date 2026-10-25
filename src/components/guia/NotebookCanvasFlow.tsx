import "./NotebookCanvasFlow.css";

const LEFT = [
  { label: "Explorar informações", tool: "Notebook" },
  { label: "Compreender", tool: "Notebook" },
  { label: "Organizar", tool: "Notebook" },
];

const RIGHT = [
  { label: "Criar / transformar", tool: "Canvas" },
  { label: "Resultado", tool: "Canvas" },
];

export default function NotebookCanvasFlow() {
  return (
    <section id="fluxo" className="section flow">
      <div className="container">
        <h2 className="flow__title">
          Dois momentos de um mesmo processo
        </h2>
        <p className="flow__lead">
          Notebook e Canvas não competem entre si — eles representam etapas
          diferentes de como uma pessoa lida com informação. Esta não é uma
          regra rígida de funcionamento, apenas uma forma conceitual de
          entender como as duas ferramentas podem se complementar.
        </p>

        <div className="flow__diagram">
          <div className="flow__column">
            <span className="flow__column-label flow__column-label--notebook">
              Gemini Notebook
            </span>
            <p className="flow__column-sub">exploração e compreensão</p>
            <ol className="flow__nodes">
              {LEFT.map((item) => (
                <li key={item.label}>{item.label}</li>
              ))}
            </ol>
          </div>

          <div className="flow__bridge" aria-hidden="true">
            <svg viewBox="0 0 120 240" preserveAspectRatio="none">
              <path
                d="M4 30 C 70 30 50 210 116 210"
                fill="none"
                stroke="url(#bridge-gradient)"
                strokeWidth="3"
                strokeDasharray="2 10"
                strokeLinecap="round"
              />
              <defs>
                <linearGradient id="bridge-gradient" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="var(--cyan)" />
                  <stop offset="100%" stopColor="var(--magenta)" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <div className="flow__column flow__column--right">
            <span className="flow__column-label flow__column-label--canvas">
              Gemini Canvas
            </span>
            <p className="flow__column-sub">criação e transformação</p>
            <ol className="flow__nodes">
              {RIGHT.map((item) => (
                <li key={item.label}>{item.label}</li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
