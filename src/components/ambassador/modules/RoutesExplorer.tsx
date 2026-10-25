import { useState } from "react";
import type { Module } from "../../../lib/types";

type Props = Extract<Module, { type: "routes" }>;
type Sel = { kind: "route"; idx: number } | { kind: "letter"; idx: number } | null;

export default function RoutesExplorer({ title, start, routes, rota }: Props) {
  const [sel, setSel] = useState<Sel>({ kind: "route", idx: 0 });
  const pick = (s: Sel) => setSel((cur) => (cur && s && cur.kind === s.kind && cur.idx === s.idx ? null : s));

  return (
    <div className="mod routes">
      <h4 className="mod__title">{title}</h4>

      <div className="routes__start" aria-label="Ponto de partida">
        {start.map((s, i) => (
          <span key={s.label} className="routes__start-item">
            {i > 0 && <span className="routes__plus" aria-hidden="true">+</span>}
            <span className="routes__box">{s.label}</span>
          </span>
        ))}
      </div>
      <div className="routes__trunk" aria-hidden="true" />

      <ul className="routes__list" aria-label="Rotas">
        {routes.map((r, i) => (
          <li key={r.id}>
            <button type="button" className="routes__route" aria-pressed={sel?.kind === "route" && sel.idx === i} onClick={() => pick({ kind: "route", idx: i })}>
              <span className="routes__id">Rota {r.id}</span>
              <span className="routes__name">{r.title}</span>
            </button>
          </li>
        ))}
      </ul>

      <p className="mod__hint routes__rota-hint">Depois de escolher uma rota, avalie com a sigla ROTA:</p>
      <ul className="routes__rota" aria-label="Sigla ROTA">
        {rota.map((l, i) => (
          <li key={l.letter}>
            <button type="button" className="routes__letter" aria-pressed={sel?.kind === "letter" && sel.idx === i} onClick={() => pick({ kind: "letter", idx: i })}>
              <span className="routes__big" aria-hidden="true">{l.letter}</span>
              <span>{l.title}</span>
            </button>
          </li>
        ))}
      </ul>

      <div className="routes__panel" aria-live="polite">
        {sel?.kind === "route" && (
          <>
            <p><strong>Rota {routes[sel.idx].id}: {routes[sel.idx].title}.</strong> Parte da mesma situação e do mesmo objetivo das outras rotas.</p>
            <p className="routes__mine">Aplicação individual: não registrada nesta documentação.</p>
          </>
        )}
        {sel?.kind === "letter" && (
          <p><strong>{rota[sel.idx].letter} — {rota[sel.idx].title}.</strong> {rota[sel.idx].question}</p>
        )}
        {!sel && <p>Escolha uma rota ou uma letra para ver os detalhes.</p>}
      </div>
    </div>
  );
}
