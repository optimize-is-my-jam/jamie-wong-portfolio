import type { PortfolioProject } from "@/lib/content";

import { ExperimentationIllustration } from "@/components/portfolio/illustrations/ExperimentationIllustration";
import { SkylinkTravelIllustration } from "@/components/portfolio/illustrations/SkylinkTravelIllustration";
import { ValueDiagnosticIllustration } from "@/components/portfolio/illustrations/ValueDiagnosticIllustration";

type PortfolioIllustrationProps = {
  projectId: PortfolioProject["id"];
};

export function PortfolioIllustration({ projectId }: PortfolioIllustrationProps) {
  switch (projectId) {
    case "bain-skylink":
      return <SkylinkTravelIllustration />;
    case "experimentation":
      return <ExperimentationIllustration />;
    case "value-diagnostic-calculator":
      return <ValueDiagnosticIllustration />;
  }
}
