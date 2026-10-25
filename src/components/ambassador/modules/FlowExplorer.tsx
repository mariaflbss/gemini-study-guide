import { useState } from "react";
import type { Module } from "../../../lib/types";

type Props = Extract<Module, { type: "flow" }>;

export default function FlowExplorer({ title, steps, variant = "sequence", explore, exploreLabel }: Props) {
  const [i, setI] = useState(0);
  const step = steps[i];
  const pct = steps.length > 1 ? (i / (steps.length - 1)) * 100 : 0;
  const panelId = `flow-${title.replace(/\W+/g, "-")}`;

  return (
    <div className={`mod flow flow--${variant}`}>
      <h4 className="mod__title">{title}</h4>
      <div className="flow__track" style={{ ["--pct" as string]: `${pct}%` }}>
        <ol className="flow__steps">
          {steps.map((s, idx) => (
            <li key={s.label} style={{ ["--level" as string]: idx }}>
              <button
                type="button"
                className="flow__btn"
                aria-pressed={idx === i}
                aria-controls={panelId}
                data-passed={idx < i}
                onClick={() => setI(idx)}
              >
                <span className="flow__n" aria-hidden="true">{idx + 1}</span>
                <span>{s.label}</span>
              </button>
            </li>
          ))}
        </ol>
      </div>
      <div id={panelId} className="flow__panel" aria-live="polite">
        <p><strong>{step.label}</strong>{step.detail ? `: ${step.detail}` : ""}</p>
        <div className="flow__nav">
          <button type="button" className="chip-btn" disabled={i === 0} onClick={() => setI(i - 1)}>Anterior</button>
          <button type="button" className="chip-btn" disabled={i === steps.length - 1} onClick={() => setI(i + 1)}>Próximo</button>
        </div>
      </div>
      {explore && explore.length > 0 && (
        <div className="flow__explore">
          <p className="mod__hint">{exploreLabel ?? "Explorei"}:</p>
          <ul className="tag-list">
            {explore.map((e) => (
              <li className="tag" key={e}>{e}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
