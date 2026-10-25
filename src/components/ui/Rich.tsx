import { Fragment } from "react";

const PLACEHOLDER = /(\[ADICIONAR[^\]]*\])/g;

/**
 * Renderiza texto destacando marcadores [ADICIONAR ...] como pendências visíveis,
 * para que nenhuma informação faltante passe despercebida.
 */
export default function Rich({ children }: { children: string }) {
  const parts = children.split(PLACEHOLDER);
  return (
    <>
      {parts.map((part, i) =>
        /^\[ADICIONAR/.test(part) ? (
          <span className="ph" key={i} title="Informação pendente — preencha no arquivo de conteúdo">
            {part}
          </span>
        ) : (
          <Fragment key={i}>{part}</Fragment>
        )
      )}
    </>
  );
}
