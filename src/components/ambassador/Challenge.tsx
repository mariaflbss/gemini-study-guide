import ModuleRenderer from "./modules/ModuleRenderer";
import type { Challenge as ChallengeData } from "../../lib/types";

export default function Challenge({ item }: { item: ChallengeData }) {
  return (
    <article className={`chal chal--${item.kind}`} aria-labelledby={`c-${item.id}`}>
      <p className="chal__label"><span className="chal__dot" aria-hidden="true" />{item.label}</p>
      <h3 id={`c-${item.id}`} className="chal__title">{item.title}</h3>
      <p className="chal__desc">{item.description}</p>
      {item.concepts.length > 0 && (
        <ul className="tag-list chal__concepts" aria-label="Conceitos">
          {item.concepts.map((c) => (
            <li key={c} className="tag">{c}</li>
          ))}
        </ul>
      )}
      {item.modules?.map((m, i) => (
        <ModuleRenderer key={i} module={m} />
      ))}
    </article>
  );
}
