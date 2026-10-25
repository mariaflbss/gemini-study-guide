import { useState } from "react";
import CopyButton from "../../ui/CopyButton";
import Rich from "../../ui/Rich";
import { isPlaceholder } from "../../../lib/content";
import type { Module } from "../../../lib/types";

type Props = Extract<Module, { type: "prompt-compare" }>;

export default function PromptCompare({ title, before, after, lenses }: Props) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="mod pc">
      <h4 className="mod__title">{title}</h4>
      <div className="pc__cols">
        <div className="pc__col">
          <div className="pc__head">
            <p className="pc__label">{before.label}</p>
            <CopyButton text={before.text} />
          </div>
          <p className="pc__text">{before.text}</p>
        </div>
        <div className="pc__col pc__col--after">
          <div className="pc__head">
            <p className="pc__label">{after.label}</p>
            {!isPlaceholder(after.text) && <CopyButton text={after.text} />}
          </div>
          <p className="pc__text"><Rich>{after.text}</Rich></p>
        </div>
      </div>
      <div className="pc__lenses">
        <p className="mod__hint">Perguntas de auditoria. Clique em uma lente:</p>
        <div className="pc__chips" role="group" aria-label="Lentes de auditoria">
          {lenses.map((l, i) => (
            <button key={l.name} type="button" className="chip-btn" aria-pressed={open === i} aria-controls="pc-panel" onClick={() => setOpen(open === i ? null : i)}>
              {l.name}
            </button>
          ))}
        </div>
        <p id="pc-panel" className="pc__panel" aria-live="polite">
          {open !== null ? <><strong>{lenses[open].name}:</strong> {lenses[open].question}</> : "Escolha uma lente para ver a pergunta."}
        </p>
      </div>
    </div>
  );
}
