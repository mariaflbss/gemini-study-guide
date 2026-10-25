import type { Module } from "../../../lib/types";
import PromptCompare from "./PromptCompare";
import FlowExplorer from "./FlowExplorer";
import SentenceCard from "./SentenceCard";
import RoutesExplorer from "./RoutesExplorer";
import Takeaways from "./Takeaways";

/** Escolhe o componente visual a partir do campo `type` no frontmatter da semana. */
export default function ModuleRenderer({ module }: { module: Module }) {
  switch (module.type) {
    case "prompt-compare":
      return <PromptCompare {...module} />;
    case "flow":
      return <FlowExplorer {...module} />;
    case "sentence":
      return <SentenceCard {...module} />;
    case "routes":
      return <RoutesExplorer {...module} />;
    case "takeaways":
      return <Takeaways {...module} />;
    default:
      return null;
  }
}
