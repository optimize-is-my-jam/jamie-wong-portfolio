import { SectionEyebrow } from "@/components/ui/SectionEyebrow";

export function CoreValueSection() {
  return (
    <section className="mx-auto max-w-7xl border-y border-outline-variant/10 bg-surface-container-low px-8 py-24">
      <div className="grid gap-12 md:grid-cols-12">
        <div className="md:col-span-4">
          <SectionEyebrow>what i bring to the table</SectionEyebrow>
          <p className="text-4xl font-black leading-tight tracking-tighter text-on-surface">
            Core Value <br />
            Propositions
          </p>
        </div>
        <div className="grid gap-6 md:col-span-8 md:grid-cols-1">
          <div className="border-l-4 border-primary bg-surface-container-highest p-8 transition-all hover:translate-x-2">
            <h3 className="mb-3 text-xl font-black tracking-tight text-on-surface">
              Building &amp; Scaling AI Systems
            </h3>
            <p className="text-lg leading-relaxed text-on-surface-variant">
              Designing production-grade AI systems, from intelligent agents to
              data pipelines, built for scale, reliability, and business impact.
            </p>
          </div>
          <div className="border-l-4 border-primary bg-surface-container-highest p-8 transition-all hover:translate-x-2">
            <h3 className="mb-3 text-xl font-black tracking-tight text-on-surface">
              Technical Leadership &amp; Delivery
            </h3>
            <p className="text-lg leading-relaxed text-on-surface-variant">
              Hands-on leader across engineering, data, and product, driving
              complex initiatives from architecture through deployment.
            </p>
          </div>
          <div className="border-l-4 border-primary bg-surface-container-highest p-8 transition-all hover:translate-x-2">
            <h3 className="mb-3 text-xl font-black tracking-tight text-on-surface">
              Business Strategy → Technical Execution
            </h3>
            <p className="text-lg leading-relaxed text-on-surface-variant">
              Translating business strategy into scalable systems that improve
              efficiency, sharpen decisions, and deliver measurable outcomes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
