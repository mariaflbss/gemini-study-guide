import "./UseCases.css";

const CASES = [
  {
    persona: "Estudante",
    steps: ["Fontes de uma disciplina", "Perguntas", "Resumo", "Material de estudo"],
  },
  {
    persona: "Pesquisa",
    steps: ["Artigos", "Organização", "Comparação", "Síntese"],
  },
  {
    persona: "Desenvolvimento",
    steps: ["Documentação", "Compreensão", "Ideias", "Protótipo"],
  },
  {
    persona: "Criação",
    steps: ["Informação", "Estrutura", "Conteúdo", "Página ou aplicação"],
  },
];

export default function UseCases() {
  return (
    <section className="section usecases">
      <div className="container">
        <h2 className="usecases__title">Quatro maneiras de usar isso</h2>
        <div className="usecases__grid">
          {CASES.map((c) => (
            <div className="usecases__item" key={c.persona}>
              <h3 className="usecases__persona">{c.persona}</h3>
              <p className="usecases__steps">
                {c.steps.map((s, i) => (
                  <span key={s}>
                    {s}
                    {i < c.steps.length - 1 && <span className="usecases__sep"> → </span>}
                  </span>
                ))}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
