import { categories } from "@/src/lib/landing";
import {
  buttonStyles,
  cn,
  Container,
  Section,
  SectionHeading,
} from "@/src/components/landing/ui";

export function Categories() {
  return (
    <Section id="categorias" className="bg-background-light">
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            title="Categorias de interes"
            description="Distintos sectores para construir una estrategia alineada a tus objetivos."
          />
          <a href="#contacto" className={cn(buttonStyles.base, buttonStyles.secondary)}>
            Quiero orientacion
          </a>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <article
              key={category.title}
              className="group rounded-2xl border border-primary/10 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-lg"
            >
              <div className="mb-5 flex size-12 items-center justify-center rounded-xl bg-primary/5 text-primary transition-all group-hover:bg-primary group-hover:text-white">
                <span className="material-symbols-outlined text-2xl" aria-hidden="true">
                  {category.icon}
                </span>
              </div>
              <h3 className="text-lg font-bold text-primary">{category.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-primary/70">
                {category.description}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
