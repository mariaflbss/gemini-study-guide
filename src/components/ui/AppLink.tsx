import type { AnchorHTMLAttributes, ReactNode } from "react";
import { Link } from "react-router-dom";
import { isPlaceholder } from "../../lib/content";
import Rich from "./Rich";

type Props = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
  href: string;
  children: ReactNode;
};

/**
 * Link interno (react-router) ou externo (nova aba). Se o destino ainda é um
 * marcador [ADICIONAR ...], mostra a pendência em vez de um link quebrado.
 */
export default function AppLink({ href, children, ...rest }: Props) {
  if (isPlaceholder(href)) {
    return (
      <span className="ph" title="Link não publicado">
        Link não publicado
      </span>
    );
  }
  if (href.startsWith("/") && !href.startsWith("//")) {
    return (
      <Link to={href} {...rest}>
        {children}
      </Link>
    );
  }
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" {...rest}>
      {children}
    </a>
  );
}
