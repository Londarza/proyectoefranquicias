import { howItWorksSteps } from "@/src/lib/landing";
import { Container, Section, SectionHeading } from "@/src/components/landing/ui";

export function HowItWorks() {
  return (
    <Section id="como-funciona" className="bg-white">
      <Container>
        <SectionHeading
          centered
          title="Como funciona"
          description="Un proceso simple para evaluar oportunidades y avanzar con mayor claridad."
        />

        <div className="relative mt-12 grid gap-6 md:grid-cols-4">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-[14%] right-[14%] top-12 hidden h-px bg-primary/10 md:block"
          />

          {howItWorksSteps.map((step) => (
            <article
              key={step.title}
              className="group relative rounded-2xl border border-primary/10 bg-background-light p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
            >
              <div className="mx-auto mb-5 flex size-16 items-center justify-center rounded-2xl bg-white text-primary shadow-sm transition-colors group-hover:bg-primary group-hover:text-white">
                <span className="material-symbols-outlined text-3xl" aria-hidden="true">
                  {step.icon}
                </span>
              </div>
              <h3 className="text-lg font-bold text-primary">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-primary/70">{step.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
