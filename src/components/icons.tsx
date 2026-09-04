import { useId } from "react";

type IconProps = {
  size?: number;
  className?: string;
};

/** Marca em forma de "sparkle" de quatro pontas — motivo recorrente do ecossistema Gemini. */
export function SparkMark({ size = 28, className }: IconProps) {
  const id = useId();
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" className={className} aria-hidden="true">
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="var(--iris)" />
          <stop offset="55%" stopColor="var(--violet)" />
          <stop offset="100%" stopColor="var(--magenta)" />
        </linearGradient>
      </defs>
      <path
        d="M32 4c1 18 3 27 28 28-25 1-27 10-28 28-1-18-3-27-28-28 25-1 27-10 28-28Z"
        fill={`url(#${id})`}
      />
    </svg>
  );
}

/** Fontes empilhadas convergindo — usado para representar o Notebook. */
export function SourcesIcon({ size = 40, className }: IconProps) {
  const id = useId();
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" className={className} aria-hidden="true">
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="var(--cyan)" />
          <stop offset="100%" stopColor="var(--iris)" />
        </linearGradient>
      </defs>
      <rect x="10" y="14" width="30" height="8" rx="4" fill={`url(#${id})`} opacity="0.5" />
      <rect x="14" y="26" width="30" height="8" rx="4" fill={`url(#${id})`} opacity="0.75" />
      <rect x="18" y="38" width="30" height="8" rx="4" fill={`url(#${id})`} />
      <circle cx="50" cy="48" r="4.5" fill="var(--magenta)" />
    </svg>
  );
}

/** Camadas transformando-se em um artefato único — usado para representar o Canvas. */
export function ArtifactIcon({ size = 40, className }: IconProps) {
  const id = useId();
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" className={className} aria-hidden="true">
      <defs>
        <linearGradient id={id} x1="0" y1="1" x2="1" y2="0">
          <stop offset="0%" stopColor="var(--magenta)" />
          <stop offset="100%" stopColor="var(--amber)" />
        </linearGradient>
      </defs>
      <rect x="12" y="10" width="40" height="30" rx="8" fill="none" stroke={`url(#${id})`} strokeWidth="3" />
      <path d="M18 44h28M18 50h18" stroke={`url(#${id})`} strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

/** Elo circular — usado para representar contexto e citações (grounding). */
export function GroundingIcon({ size = 40, className }: IconProps) {
  const id = useId();
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" className={className} aria-hidden="true">
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="var(--iris)" />
          <stop offset="100%" stopColor="var(--cyan)" />
        </linearGradient>
      </defs>
      <circle cx="24" cy="32" r="12" fill="none" stroke={`url(#${id})`} strokeWidth="3.5" />
      <circle cx="42" cy="32" r="12" fill="none" stroke={`url(#${id})`} strokeWidth="3.5" opacity="0.55" />
    </svg>
  );
}

/** Seta de fluxo direcional, usada nos diagramas conceituais. */
export function FlowArrow({ size = 20, className }: IconProps) {
  return (
    <svg width={size} height={size * 2.2} viewBox="0 0 20 44" className={className} aria-hidden="true">
      <path
        d="M10 2v34m0 0-7-7m7 7 7-7"
        stroke="var(--ink-faint)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}
