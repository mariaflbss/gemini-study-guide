import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { SparkMark } from "../icons";
import { site } from "../../lib/content";
import "./Nav.css";

const LINKS = [
  { to: "/", label: "Início", end: true },
  { to: "/guia-gemini", label: "Documentação" },
  { to: "/projetos", label: "Projetos" },
  { to: "/embaixadora-estudantil-google", label: "Embaixadora" },
  { to: "/sobre", label: "Sobre" },
  { to: "/contato", label: "Contato" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const toggle = useRef<HTMLButtonElement>(null);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggle.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  const linkClass = ({ isActive }: { isActive: boolean }) => (isActive ? "is-active" : undefined);

  return (
    <header className="nav">
      <div className="container nav__inner">
        <Link to="/" className="nav__brand" aria-label={`${site.handle} — página inicial`}>
          <SparkMark size={22} />
          <span>{site.handle}</span>
        </Link>

        <nav aria-label="Navegação principal" className="nav__links">
          {LINKS.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.end} className={linkClass}>
              {l.label}
            </NavLink>
          ))}
        </nav>

        <button
          ref={toggle}
          type="button"
          className="nav__toggle"
          aria-expanded={open}
          aria-controls="menu-mobile"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="visually-hidden">{open ? "Fechar menu" : "Abrir menu"}</span>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>

      <nav id="menu-mobile" aria-label="Navegação principal (menu)" className={`nav__drawer${open ? " is-open" : ""}`} hidden={!open}>
        <div className="container">
          {LINKS.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.end} className={linkClass}>
              {l.label}
            </NavLink>
          ))}
        </div>
      </nav>
    </header>
  );
}
