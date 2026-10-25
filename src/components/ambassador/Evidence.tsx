import AppLink from "../ui/AppLink";
import type { Evidence as EvidenceItem } from "../../lib/types";

const TYPE_LABEL: Record<EvidenceItem["type"], string> = {
  image: "Imagem",
  video: "Vídeo",
  link: "Link",
  github: "GitHub",
  demo: "Demonstração",
};

export default function Evidence({ items }: { items: EvidenceItem[] }) {
  if (items.length === 0) {
    return (
      <div className="empty">
        <p>Nenhuma evidência prática foi registrada nesta semana.</p>
        <p style={{ marginTop: 10 }}>Adicione uma evidência somente quando houver um registro real da sua experiência.</p>
      </div>
    );
  }
  return (
    <ul className="evid">
      {items.map((e) => (
        <li key={`${e.type}-${e.label}`} className="evid__item">
          {e.type === "image" && e.url ? (
            <figure>
              <img src={e.url} alt={e.alt ?? e.label} loading="lazy" />
              <figcaption>{e.label}</figcaption>
            </figure>
          ) : e.type === "video" && e.url && /\.(mp4|webm)$/i.test(e.url) ? (
            <figure>
              <video src={e.url} controls preload="metadata" aria-label={e.alt ?? e.label} />
              <figcaption>{e.label}</figcaption>
            </figure>
          ) : (
            <div className="card evid__link">
              <p className="evid__type">{TYPE_LABEL[e.type]}</p>
              {e.url ? <AppLink href={e.url} className="link-inline">{e.label}</AppLink> : <span>{e.label}</span>}
            </div>
          )}
        </li>
      ))}
    </ul>
  );
}
