import Image from "next/image";

import { heroHighlights } from "@/src/lib/landing";
import { buttonStyles, cn, Container, Section } from "@/src/components/landing/ui";

export function Hero() {
  return (
    <Section id="inicio" className="relative overflow-hidden pt-14 sm:pt-18">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-0 -z-10 h-full w-2/3 bg-[radial-gradient(circle_at_top_right,_rgba(62,28,125,0.16),transparent_60%)]"
      />

      <Container className="grid items-center gap-12 lg:grid-cols-2">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5">
            <span className="material-symbols-outlined text-base text-primary" aria-hidden="true">
              verified
            </span>
            <span className="text-xs font-bold uppercase tracking-[0.12em] text-primary">
              Curacion profesional de oportunidades
            </span>
          </div>

          <div className="space-y-5">
            <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-primary sm:text-5xl lg:text-6xl">
              Inverti en franquicias seleccionadas con un enfoque claro y escalable
            </h1>
            <p className="max-w-xl text-base leading-relaxed text-primary/70 sm:text-lg">
              Explora opciones, compara estrategias y defini el modelo que mejor se
              adapta a tu perfil de inversion.
            </p>
          </div>

          <ul className="space-y-3">
            {heroHighlights.map((item) => (
              <li key={item.text} className="flex items-start gap-3">
                <span className="material-symbols-outlined text-accent" aria-hidden="true">
                  {item.icon}
                </span>
                <span className="text-sm font-medium leading-relaxed text-primary/80 sm:text-base">
                  {item.text}
                </span>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-3 pt-1">
            <a href="#categorias" className={cn(buttonStyles.base, buttonStyles.primary)}>
              Ver oportunidades
            </a>
            <a href="#como-funciona" className={cn(buttonStyles.base, buttonStyles.secondary)}>
              Conocer el proceso
            </a>
          </div>
        </div>

        <div className="relative">
          <div
            className="absolute inset-0 -z-10 rounded-3xl bg-primary/10 blur-3xl"
            aria-hidden="true"
          />
          <div className="rounded-3xl border border-primary/10 bg-white p-3 shadow-2xl shadow-primary/10">
            <div className="relative aspect-video overflow-hidden rounded-2xl bg-primary/5">
              <Image
                src="/images/image-hero-section.jpeg"
                alt="Panel de analisis de oportunidades de franquicia"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
