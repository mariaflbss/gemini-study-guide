import { useState } from "react";
import type { Masterclass as MasterclassData } from "../../lib/types";
import "./Masterclass.css";

export default function Masterclass({ data }: { data: MasterclassData }) {
  const [layer, setLayer] = useState(0);
  const total = data.layers.length;

  return (
    <div className="mc">
      <header className="mc__head">
        <p className="mc__label">{data.label} · {data.speaker}</p>
        <h3 className="mc__title">{data.title}</h3>
      </header>

      <div className="mc__concepts">
        {data.concepts.map((c) => (
          <div className="mc__card" key={c.title}>
            <h4>{c.title}</h4>
            <p>{c.text}</p>
            {c.items && (
              <ul className="mc__chips">
                {c.items.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>

      <section className="mc__block" aria-labelledby="mc-hybrid">
        <h4 id="mc-hybrid">Metodologia híbrida</h4>
        <div className="mc__hybrid">
          <div className="mc__side mc__side--human">
            <p className="mc__side-title">Humano</p>
            <ul>{data.hybrid.human.map((h) => <li key={h}>{h}</li>)}</ul>
          </div>
          <span className="mc__plus" aria-hidden="true">+</span>
          <div className="mc__side mc__side--ai">
            <p className="mc__side-title">IA</p>
            <ul>{data.hybrid.ai.map((h) => <li key={h}>{h}</li>)}</ul>
          </div>
        </div>
      </section>

      <section className="mc__block" aria-labelledby="mc-layers">
        <h4 id="mc-layers">Camadas de prompt</h4>
        <div className="mc__layers">
          <ol className="mc__stack" aria-label="Camadas, da primeira à última">
            {data.layers.map((l, i) => (
              <li key={l.name} style={{ ["--i" as string]: i, ["--n" as string]: total }}>
                <button type="button" aria-pressed={layer === i} onClick={() => setLayer(i)}>
                  <span className="mc__num" aria-hidden="true">{i + 1}</span>
                  {l.name}
                </button>
              </li>
            ))}
          </ol>
          <div className="mc__layer-detail" aria-live="polite">
            <p className="mc__layer-name">{layer + 1}. {data.layers[layer].name}</p>
            <p>{data.layers[layer].text}</p>
            <p className="mc__mine">Exemplo individual: não registrado nesta documentação.</p>
          </div>
        </div>
      </section>

      <section className="mc__block" aria-labelledby="mc-motion">
        <h4 id="mc-motion">Geração visual e movimento</h4>
        <ul className="mc__chips mc__chips--topics">
          {data.motion.topics.map((t) => <li key={t}>{t}</li>)}
        </ul>
        <ol className="mc__frames" aria-label="Da imagem inicial à final">
          {data.motion.frames.map((f, i) => (
            <li key={f.label} className={i === 1 ? "is-mid" : undefined}>
              <span className="mc__frame-name">{f.label}</span>
              <span className="mc__frame-text">{f.text}</span>
            </li>
          ))}
        </ol>
      </section>

      <figure className="mc__quote">
        <blockquote>{data.quote.text}</blockquote>
        <figcaption>{data.quote.note}</figcaption>
      </figure>
    </div>
  );
}
