import { useMemo, useState } from "react";
import CopyButton from "../ui/CopyButton";
import "./Home.css";

const DEMO = "Quero organizar meus estudos para uma prova de desenvolvimento web em cinco dias, com um plano simples e prático.";

const SIGNALS = [
  { id: "papel", label: "Papel / atuação", short: "quem deve responder", keys: ["atue", "atuar", "como", "professor", "professora", "especialista", "mentor", "mentora", "analista", "papel", "atuação"] },
  { id: "contexto", label: "Contexto", short: "de onde você parte", keys: ["sou", "estou", "aula", "disciplina", "prova", "projeto", "estudos", "faculdade", "curso", "cinco dias"] },
  { id: "tarefa", label: "Tarefa", short: "o que precisa ser feito", keys: ["quero", "preciso", "me ajude", "explique", "compare", "reescreva", "liste", "analise", "crie", "faça", "montar", "organizar"] },
  { id: "restricoes", label: "Restrições", short: "o que precisa respeitar", keys: ["tenho", "tempo", "dia", "dias", "até", "sem", "limite", "não", "apenas", "máximo", "mínimo", "cinco"] },
  { id: "formato", label: "Formato", short: "como quer receber", keys: ["lista", "tabela", "passo", "passos", "resumo", "formato", "cronograma", "plano", "parágrafos", "tópicos"] },
];

export default function PromptDemo() {
  const [text, setText] = useState("");
  const normalized = text.toLocaleLowerCase();

  const active = useMemo(() => SIGNALS.map((signal) => ({
    ...signal,
    active: signal.keys.some((key) => normalized.includes(key)),
  })), [normalized]);

  const activeCount = active.filter((signal) => signal.active).length;
  const backgroundClass = activeCount === 0 ? "pdemo--empty" : `pdemo--${activeCount}`;

  const message = activeCount === 0
    ? "Escreva uma ideia. A interface vai mostrar quais elementos já apareceram."
    : activeCount === 5
      ? "Seu prompt já reúne os cinco blocos. Agora você pode experimentar, testar e revisar."
      : "Continue escrevendo. Quanto mais claro o contexto e a tarefa, mais útil tende a ser a instrução.";

  return (
    <section className={`pdemo ${backgroundClass}`} aria-label="Laboratório interativo de construção de prompts">
      <div className="pdemo__topline">
        <span className="pdemo__kicker">EXPERIMENTO AO VIVO</span>
        <span className="pdemo__status"><i /> sua ideia, em construção</span>
      </div>

      <div className="pdemo__heading">
        <div>
          <p>Uma ideia pode ganhar contexto.</p>
          <h2>Veja o prompt ganhar forma enquanto você escreve.</h2>
        </div>
        <span className="pdemo__count" aria-live="polite">{activeCount}/5 elementos</span>
      </div>

      <div className="pdemo__workspace">
        <div className="pdemo__workspace-head">
          <span>O QUE VOCÊ QUER CONSTRUIR?</span>
          <div className="pdemo__workspace-actions">
            <button type="button" className="pdemo__example" onClick={() => setText(DEMO)}>Usar exemplo</button>
            {text && <CopyButton text={text} label="Copiar" />}
          </div>
        </div>
        <textarea
          value={text}
          onChange={(event) => setText(event.target.value)}
          aria-label="Escreva o que você quer explorar"
          placeholder="Quero entender..."
          rows={4}
        />

        <div className="pdemo__signals" aria-live="polite">
          {active.map((signal, index) => (
            <div key={signal.id} className={`pdemo__signal pdemo__signal--${index + 1}${signal.active ? " is-active" : ""}`}>
              <span className="pdemo__signal-mark" aria-hidden="true" />
              <div>
                <strong>{signal.label}</strong>
                <small>{signal.active ? signal.short : "ainda não apareceu"}</small>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="pdemo__hint">
        <span className="pdemo__hint-dot" aria-hidden="true" />
        <span>{message}</span>
      </div>
    </section>
  );
}
