export type ChallengeKind = "desafio" | "sessao" | "acao" | "presenca";
export type WeekStatus = "planejada" | "em-documentacao" | "concluida";

export interface LensItem { name: string; question: string }
export interface FlowStep { label: string; detail?: string }
export interface RouteItem { id: number; title: string }
export interface RotaLetter { letter: string; title: string; question: string }

export type Module =
  | {
      type: "prompt-compare";
      title: string;
      before: { label: string; text: string };
      after: { label: string; text: string };
      lenses: LensItem[];
    }
  | {
      type: "flow";
      title: string;
      variant?: "sequence" | "levels";
      steps: FlowStep[];
      explore?: string[];
      exploreLabel?: string;
    }
  | { type: "sentence"; title: string; template: string; blanks: string[] }
  | {
      type: "routes";
      title: string;
      start: { label: string }[];
      routes: RouteItem[];
      rota: RotaLetter[];
    }
  | { type: "takeaways"; title: string; fields: { label: string; value: string }[] };

export interface Challenge {
  id: string;
  kind: ChallengeKind;
  label: string;
  title: string;
  description: string;
  concepts: string[];
  modules?: Module[];
}

export interface Masterclass {
  id: string;
  label: string;
  speaker: string;
  title: string;
  concepts: { title: string; text: string; items?: string[] }[];
  hybrid: { human: string[]; ai: string[] };
  layers: { name: string; text: string }[];
  motion: { topics: string[]; frames: { label: string; text: string }[] };
  quote: { text: string; note: string };
}

export interface Evidence {
  type: "image" | "video" | "link" | "github" | "demo";
  label: string;
  url?: string;
  alt?: string;
}

export interface Week {
  slug: string;
  number: number;
  theme: string;
  summary: string;
  status: WeekStatus;
  highlights: string[];
  tools: string[];
  applications: string[];
  challenges: Challenge[];
  masterclass?: Masterclass;
  project: string | null;
  evidence: Evidence[];
  /** Markdown de cada seção, indexado pelo slug do título (ex.: "aprendizados"). */
  sections: Record<string, string>;
}

export interface Project {
  slug: string;
  title: string;
  summary: string;
  featured: boolean;
  origin: string | null;
  week: number | null;
  kind: string;
  tags: string[];
  tech: string[];
  /** Fluxo do case: problema → objetivo → ferramenta → processo → prompts → resultado → demonstração → aprendizado. */
  problem: string;
  objective: string;
  tool: string;
  process: string;
  prompts: string[];
  results: string[];
  learning: string;
  links: { github?: string; demo?: string; live?: string };
  cover?: { src: string; alt: string };
  body: string;
}
