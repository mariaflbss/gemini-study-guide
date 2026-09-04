import { SparkMark } from "./icons";
import "./Nav.css";

const LINKS = [
  { href: "#gemini", label: "Gemini" },
  { href: "#notebook", label: "Notebook" },
  { href: "#canvas", label: "Canvas" },
  { href: "#fluxo", label: "Notebook + Canvas" },
  { href: "#documentacao", label: "Documentação" },
];

export default function Nav() {
  return (
    <header className="nav">
      <div className="container nav__inner">
        <a href="#topo" className="nav__brand">
          <SparkMark size={22} />
          <span>Ecossistema Gemini</span>
        </a>
        <nav aria-label="Navegação principal" className="nav__links">
          {LINKS.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
