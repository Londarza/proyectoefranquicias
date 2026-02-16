import { footerLinkGroups } from "@/src/lib/landing";
import { Container } from "@/src/components/landing/ui";

export function Footer() {
  return (
    <footer className="bg-background-dark py-16 text-white/70">
      <Container>
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-1">
            <a
              href="#inicio"
              className="inline-flex items-center gap-3 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              <span className="flex size-9 items-center justify-center rounded-md bg-primary text-white">
                <span className="material-symbols-outlined text-xl" aria-hidden="true">
                  account_balance
                </span>
              </span>
              <span className="text-lg font-bold text-white">e-Franquicias</span>
            </a>
            <p className="mt-4 text-sm leading-relaxed text-white/70">
              Plataforma para explorar franquicias seleccionadas con una mirada
              estrategica.
            </p>
          </div>

          {footerLinkGroups.map((group) => (
            <div key={group.title}>
              <h3 className="text-sm font-bold uppercase tracking-[0.08em] text-white">
                {group.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.08em] text-white">
              Novedades
            </h3>
            <p className="mt-4 text-sm text-white/70">
              Recibi novedades de categorias y recursos educativos.
            </p>
            <div className="mt-4 flex gap-2">
              <label htmlFor="newsletter-email" className="sr-only">
                Email para novedades
              </label>
              <input
                id="newsletter-email"
                type="email"
                placeholder="Tu email"
                className="w-full rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-sm text-white placeholder:text-white/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              />
              <button
                type="button"
                className="rounded-lg bg-accent px-3 text-primary transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                aria-label="Enviar email de newsletter"
              >
                <span className="material-symbols-outlined text-base" aria-hidden="true">
                  send
                </span>
              </button>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-xs leading-relaxed text-white/55">
          <p>
            La informacion presentada tiene fines orientativos y no constituye
            asesoramiento financiero personalizado. Toda decision debe evaluarse segun
            tu situacion particular.
          </p>
          <p className="mt-2">
            (c) {new Date().getFullYear()} e-Franquicias. Todos los derechos reservados.
          </p>
        </div>
      </Container>
    </footer>
  );
}
