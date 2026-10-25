import Rich from "../../ui/Rich";
import type { Module } from "../../../lib/types";

type Props = Extract<Module, { type: "takeaways" }>;

export default function Takeaways({ title, fields }: Props) {
  return (
    <div className="mod take">
      <h4 className="mod__title">{title}</h4>
      <dl className="take__grid">
        {fields.map((f) => (
          <div className="take__item" key={f.label}>
            <dt>{f.label}</dt>
            <dd><Rich>{f.value}</Rich></dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
