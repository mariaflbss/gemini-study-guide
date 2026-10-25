import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import "./ui.css";

export type Crumb = { label: string; to?: string };

export default function PageHeader({ title, lead, crumbs, children }: { title: ReactNode; lead?: ReactNode; crumbs?: Crumb[]; children?: ReactNode }) {
  return (
    <header className="pagehead">
      <div className="pagehead__blob" aria-hidden="true" />
      <div className="container pagehead__inner">
        {crumbs && crumbs.length > 0 && (
          <nav aria-label="Trilha de navegação" className="crumbs">
            <ol>
              {crumbs.map((c, i) => (
                <li key={c.label}>
                  {c.to && i < crumbs.length - 1 ? <Link to={c.to}>{c.label}</Link> : <span aria-current="page">{c.label}</span>}
                </li>
              ))}
            </ol>
          </nav>
        )}
        <h1 className="pagehead__title">{title}</h1>
        {lead && <p className="pagehead__lead">{lead}</p>}
        {children}
      </div>
    </header>
  );
}
