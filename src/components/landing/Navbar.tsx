import { navLinks } from "@/src/lib/landing";
import { buttonStyles, cn, Container } from "@/src/components/landing/ui";

export function Navbar() {
  return (
    <nav
      className="glass-nav sticky top-0 z-50 border-b border-primary/10"
      aria-label="Navegacion principal"
    >
      <Container className="flex h-20 items-center justify-between">
        <a
          href="#inicio"
          className="inline-flex items-center gap-3 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background-light"
          aria-label="Ir al inicio de e-Franquicias"
        >
          <span className="flex size-10 items-center justify-center rounded-lg bg-primary text-white shadow-sm">
            <span className="material-symbols-outlined text-2xl" aria-hidden="true">
              account_balance
            </span>
          </span>
          <span className="text-lg font-extrabold tracking-tight text-primary sm:text-xl">
            e-Franquicias
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-primary/80 transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background-light"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href="#contacto"
            className={cn(buttonStyles.base, buttonStyles.primary, "px-4 sm:px-5")}
          >
            Quiero asesoria
          </a>

          <details className="relative md:hidden">
            <summary
              className={cn(
                buttonStyles.base,
                buttonStyles.secondary,
                "list-none px-3 py-2 [&::-webkit-details-marker]:hidden",
              )}
              aria-label="Abrir menu"
            >
              <span className="material-symbols-outlined text-base" aria-hidden="true">
                menu
              </span>
            </summary>
            <div className="absolute right-0 top-12 w-52 rounded-xl border border-primary/10 bg-white p-3 shadow-xl">
              <div className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="rounded-md px-3 py-2 text-sm font-semibold text-primary/80 transition-colors hover:bg-primary/5 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </details>
        </div>
      </Container>
    </nav>
  );
}
