import { faqItems } from "@/src/lib/landing";
import { Container, Section, SectionHeading } from "@/src/components/landing/ui";

export function FAQ() {
  return (
    <Section id="faq" className="bg-white">
      <Container className="max-w-4xl">
        <SectionHeading centered title="Preguntas frecuentes" />

        <div className="mt-10 space-y-3">
          {faqItems.map((item) => (
            <details
              key={item.question}
              className="group rounded-xl border border-primary/10 bg-background-light p-5 shadow-sm transition-all hover:border-primary/15"
            >
              <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-left text-base font-bold text-primary">
                {item.question}
                <span
                  className="material-symbols-outlined text-primary/70 transition-transform group-open:rotate-180"
                  aria-hidden="true"
                >
                  expand_more
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-primary/70">{item.answer}</p>
            </details>
          ))}
        </div>
      </Container>
    </Section>
  );
}
