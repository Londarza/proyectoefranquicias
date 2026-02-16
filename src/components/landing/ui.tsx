import type { ReactNode } from "react";

export const sectionPadding = "py-16 sm:py-20";
export const containerWidth = "mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8";

export const buttonStyles = {
  base: "inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-bold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background-light",
  primary:
    "bg-accent text-primary cyan-glow hover:-translate-y-0.5 hover:shadow-lg shadow-accent/20",
  secondary:
    "border border-primary/15 bg-white text-primary hover:-translate-y-0.5 hover:border-primary/25 hover:bg-primary/[0.04]",
  darkSecondary:
    "border border-white/20 bg-white/10 text-white hover:-translate-y-0.5 hover:bg-white/20",
} as const;

export function cn(...classes: Array<string | undefined | false>) {
  return classes.filter(Boolean).join(" ");
}

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

export function Container({ children, className }: ContainerProps) {
  return <div className={cn(containerWidth, className)}>{children}</div>;
}

type SectionProps = {
  children: ReactNode;
  className?: string;
  id?: string;
};

export function Section({ children, className, id }: SectionProps) {
  return (
    <section id={id} className={cn(sectionPadding, className)}>
      {children}
    </section>
  );
}

type SectionHeadingProps = {
  title: string;
  description?: string;
  centered?: boolean;
};

export function SectionHeading({
  title,
  description,
  centered = false,
}: SectionHeadingProps) {
  return (
    <div className={cn("max-w-2xl", centered && "mx-auto text-center")}>
      <h2 className="text-3xl font-extrabold tracking-tight text-primary sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-primary/70 sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
