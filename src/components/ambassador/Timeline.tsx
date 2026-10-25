import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import StatusBadge from "./StatusBadge";
import Rich from "../ui/Rich";
import { useInView } from "../../lib/hooks";
import type { Week } from "../../lib/types";
import "./Ambassador.css";

function TimelineItem({ week }: { week: Week }) {
  const [ref, reached] = useInView<HTMLLIElement>(0.5);
  const [open, setOpen] = useState(false);
  const id = `tl-${week.slug}`;

  return (
    <li ref={ref} className={`tl__item${reached ? " is-reached" : ""}`}>
      <span className="tl__node" aria-hidden="true"><span className="tl__node-core">{week.number}</span></span>
      <article className="card tl__card" aria-labelledby={`${id}-t`}>
        <div className="tl__top">
          <p className="tl__week">Semana {week.number}</p>
          <StatusBadge status={week.status} />
        </div>
        <h3 id={`${id}-t`} className="tl__theme">
          <Link to={`/embaixadora-estudantil-google/${week.slug}`}>{week.theme}</Link>
        </h3>
        <p className="tl__summary">{week.summary}</p>

        <ul className="tag-list tl__tools" aria-label="Ferramentas">
          {week.tools.map((t) => (
            <li key={t} className={/^\[ADICIONAR/.test(t) ? undefined : "tag"}><Rich>{t}</Rich></li>
          ))}
        </ul>

        <div className="tl__actions">
          <button type="button" className="chip-btn" aria-expanded={open} aria-controls={id} onClick={() => setOpen((v) => !v)}>
            {open ? "Ocultar aprendizados" : "Ver aprendizados e aplicações"}
          </button>
          <Link to={`/embaixadora-estudantil-google/${week.slug}`} className="btn btn--ghost btn--small">
            Abrir semana {week.number}
          </Link>
        </div>

        <div id={id} className="tl__more" hidden={!open}>
          <div>
            <h4>Principais aprendizados</h4>
            <ul>{week.highlights.map((h) => <li key={h}>{h}</li>)}</ul>
          </div>
          <div>
            <h4>Possíveis aplicações</h4>
            <ul>{week.applications.map((h) => <li key={h}><Rich>{h}</Rich></li>)}</ul>
          </div>
        </div>
      </article>
    </li>
  );
}

export default function Timeline({ weeks }: { weeks: Week[] }) {
  const list = useRef<HTMLOListElement>(null);

  useEffect(() => {
    const el = list.current;
    if (!el) return;
    let frame = 0;
    const update = () => {
      frame = 0;
      const rect = el.getBoundingClientRect();
      const trackStart = 25;
      const trackHeight = Math.max(0, rect.height - trackStart * 2);
      const progress = Math.min(1, Math.max(0, (window.innerHeight * 0.6 - rect.top - trackStart) / trackHeight));
      el.style.setProperty("--fill-px", `${(progress * trackHeight).toFixed(1)}px`);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <ol className="tl" ref={list} aria-label="Semanas do programa">
      {weeks.map((w) => (
        <TimelineItem key={w.slug} week={w} />
      ))}
    </ol>
  );
}
