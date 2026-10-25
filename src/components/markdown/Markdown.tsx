import { Children, isValidElement, type ReactElement, type ReactNode } from "react";
import ReactMarkdown, { type Components } from "react-markdown";
import remarkGfm from "remark-gfm";
import AppLink from "../ui/AppLink";
import CopyButton from "../ui/CopyButton";
import { slugify } from "../../lib/slug";
import "./Markdown.css";

/* Plugin remark: transforma [ADICIONAR ...] em <span class="ph"> */
type MdNode = { type: string; value?: string; children?: MdNode[]; data?: Record<string, unknown> };

function markPlaceholders(node: MdNode) {
  if (!node.children) return;
  const next: MdNode[] = [];
  for (const child of node.children) {
    if (child.type === "text" && child.value && /\[ADICIONAR/.test(child.value)) {
      for (const part of child.value.split(/(\[ADICIONAR[^\]]*\])/)) {
        if (!part) continue;
        next.push(
          /^\[ADICIONAR/.test(part)
            ? { type: "strong", children: [{ type: "text", value: part }], data: { hName: "span", hProperties: { className: ["ph"] } } }
            : { type: "text", value: part }
        );
      }
    } else {
      markPlaceholders(child);
      next.push(child);
    }
  }
  node.children = next;
}
const remarkPlaceholders = () => (tree: MdNode) => markPlaceholders(tree);

/* Texto puro de um nó React (para ids de título e código) */
function textOf(node: ReactNode): string {
  if (typeof node === "string" || typeof node === "number") return String(node);
  if (Array.isArray(node)) return node.map(textOf).join("");
  if (isValidElement(node)) return textOf((node.props as { children?: ReactNode }).children);
  return "";
}

const CALLOUTS: Record<string, string> = {
  NOTE: "Nota",
  TIP: "Dica",
  IMPORTANT: "Importante",
  WARNING: "Atenção",
  IDEA: "Ideia",
};

function Callout({ children }: { children: ReactNode }) {
  const blocks = Children.toArray(children);
  const firstIndex = blocks.findIndex((b) => isValidElement(b));
  const first = blocks[firstIndex] as ReactElement<{ children?: ReactNode }> | undefined;
  if (first) {
    const inner = Children.toArray(first.props.children);
    const head = inner[0];
    const m = typeof head === "string" ? head.match(/^\[!(NOTE|TIP|IMPORTANT|WARNING|IDEA)\][ \t]*/i) : null;
    if (m) {
      const kind = m[1].toUpperCase();
      const rest = (head as string).slice(m[0].length);
      const lines = rest.split("\n");
      const title = lines[0].trim();
      const remaining = [lines.slice(1).join("\n"), ...inner.slice(1)].filter((x) => x !== "");
      const restBlocks = blocks.filter((_, i) => i !== firstIndex);
      return (
        <aside className={`callout callout--${kind.toLowerCase()}`}>
          <p className="callout__title">{title || CALLOUTS[kind]}</p>
          {remaining.length > 0 && <p>{remaining}</p>}
          {restBlocks}
        </aside>
      );
    }
  }
  return <blockquote>{children}</blockquote>;
}

function heading(Tag: "h2" | "h3" | "h4") {
  return function Heading({ children }: { children?: ReactNode }) {
    return <Tag id={slugify(textOf(children))}>{children}</Tag>;
  };
}

function CodeBlock({ children }: { children?: ReactNode }) {
  const code = Children.toArray(children)[0] as ReactElement<{ className?: string; children?: ReactNode }> | undefined;
  const lang = /language-(\w+)/.exec(code?.props.className ?? "")?.[1];
  const text = textOf(code?.props.children).replace(/\n$/, "");
  return (
    <figure className="codeblock">
      <figcaption>
        <span>{lang ?? "texto"}</span>
        <CopyButton text={text} className="copy-btn--dark" />
      </figcaption>
      <pre tabIndex={0}>
        <code>{text}</code>
      </pre>
    </figure>
  );
}

type Props = {
  children: string;
  /** Quando definido, links ./arquivo.md viram rotas internas dentro deste prefixo. */
  docBase?: string;
};

export default function Markdown({ children, docBase }: Props) {
  const components: Components = {
    h1: ({ children: c }) => <h1>{c}</h1>,
    h2: heading("h2"),
    h3: heading("h3"),
    h4: heading("h4"),
    a: ({ href = "", children: c }) => {
      const doc = docBase && href.match(/^\.\/([\w-]+)\.md$/);
      const target = doc ? `${docBase}/${doc[1]}` : href;
      return (
        <AppLink href={target} className="link-inline">
          {c}
        </AppLink>
      );
    },
    pre: ({ children: c }) => <CodeBlock>{c}</CodeBlock>,
    code: ({ children: c }) => <code className="inline-code">{c}</code>,
    blockquote: ({ children: c }) => <Callout>{c}</Callout>,
    table: ({ children: c }) => (
      <div className="md-table" tabIndex={0} role="region" aria-label="Tabela rolável">
        <table>{c}</table>
      </div>
    ),
    img: ({ src, alt }) => <img src={src} alt={alt ?? ""} loading="lazy" className="md-img" />,
  };

  return (
    <div className="md">
      <ReactMarkdown remarkPlugins={[remarkGfm, remarkPlaceholders]} components={components}>
        {children}
      </ReactMarkdown>
    </div>
  );
}

