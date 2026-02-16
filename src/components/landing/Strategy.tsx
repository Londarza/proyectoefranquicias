import { strategyCards } from "@/src/lib/landing";
import {
  buttonStyles,
  cn,
  Container,
  Section,
  SectionHeading,
} from "@/src/components/landing/ui";

export function Strategy() {
  return (
    <Section id="estrategia" className="bg-white">
      <Container>
        <SectionHeading
          centered
          title="Elegi tu estrategia"
          description="Podes avanzar con un perfil mas activo o con una modalidad de seguimiento mas delegada."
        />

        <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-2">
          {strategyCards.map((card) => {
            const isHighlighted = Boolean(card.highlighted);

            return (
              <article
                key={card.title}
                className={cn(
                  "relative flex h-full flex-col rounded-2xl border p-7 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg",
                  isHighlighted
                    ? "border-accent/40 bg-accent/5"
                    : "border-primary/10 bg-white",
                )}
              >
                {card.badge ? (
                  <span className="absolute right-5 top-5 rounded-full bg-accent/20 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.08em] text-primary">
                    {card.badge}
                  </span>
                ) : null}

                <div className="mb-6 flex items-center gap-3">
                  <div
                    className={cn(
                      "flex size-11 items-center justify-center rounded-lg",
                      isHighlighted ? "bg-accent text-primary" : "bg-primary/10 text-primary",
                    )}
                  >
                    <span className="material-symbols-outlined text-2xl" aria-hidden="true">
                      {card.icon}
                    </span>
                  </div>
                  <h3 className="text-2xl font-extrabold text-primary">{card.title}</h3>
                </div>

                <ul className="flex flex-1 flex-col gap-3">
                  {card.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <span
                        className={cn(
                          "material-symbols-outlined mt-0.5 text-base",
                          isHighlighted ? "text-accent" : "text-primary/50",
                        )}
                        aria-hidden="true"
                      >
                        check_circle
                      </span>
                      <span className="text-sm leading-relaxed text-primary/80">{item}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contacto"
                  className={cn(
                    buttonStyles.base,
                    isHighlighted ? buttonStyles.primary : buttonStyles.secondary,
                    "mt-8 w-full",
                  )}
                >
                  {card.actionLabel}
                </a>
              </article>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
