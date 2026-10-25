import { Fragment } from "react";
import type { Module } from "../../../lib/types";

type Props = Extract<Module, { type: "sentence" }>;

export default function SentenceCard({ title, template, blanks }: Props) {
  const parts = template.split(/(\{\d+\})/);
  return (
    <div className="mod sent">
      <h4 className="mod__title">{title}</h4>
      <p className="sent__text">
        {parts.map((p, i) => {
          const m = p.match(/^\{(\d+)\}$/);
          return m ? <span className="sent__blank" key={i}>{blanks[Number(m[1])] ?? "Não registrado nesta documentação."}</span> : <Fragment key={i}>{p}</Fragment>;
        })}
      </p>
    </div>
  );
}
