"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";

import {
  capitalOptions,
  leadBenefits,
  plazoOptions,
  tipoOptions,
} from "@/src/lib/landing";
import { buttonStyles, cn, Container, sectionPadding } from "@/src/components/landing/ui";

type LeadFormValues = {
  nombre: string;
  email: string;
  telefono: string;
  capital: string;
  tipo: string;
  plazo: string;
};

type LeadFormErrors = Partial<Record<keyof LeadFormValues, string>>;

const initialValues: LeadFormValues = {
  nombre: "",
  email: "",
  telefono: "",
  capital: "",
  tipo: "",
  plazo: "",
};

function validate(values: LeadFormValues) {
  const errors: LeadFormErrors = {};
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!values.nombre.trim()) errors.nombre = "Ingresa tu nombre.";
  if (!values.email.trim()) {
    errors.email = "Ingresa tu email.";
  } else if (!emailRegex.test(values.email)) {
    errors.email = "Ingresa un email valido.";
  }
  if (!values.telefono.trim()) errors.telefono = "Ingresa tu WhatsApp o telefono.";
  if (!values.capital) errors.capital = "Selecciona un rango de capital.";
  if (!values.tipo) errors.tipo = "Selecciona un tipo de participacion.";
  if (!values.plazo) errors.plazo = "Selecciona un plazo estimado.";

  return errors;
}

export function LeadForm() {
  const [values, setValues] = useState<LeadFormValues>(initialValues);
  const [errors, setErrors] = useState<LeadFormErrors>({});
  const [isSending, setIsSending] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange =
    (field: keyof LeadFormValues) =>
    (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      const nextValue = event.target.value;

      setValues((prev) => ({ ...prev, [field]: nextValue }));
      setErrors((prev) => ({ ...prev, [field]: undefined }));
      if (isSuccess) setIsSuccess(false);
    };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nextErrors = validate(values);
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setIsSuccess(false);
      return;
    }

    setErrors({});
    setIsSending(true);

    await new Promise((resolve) => setTimeout(resolve, 800));
    console.log("lead-form-submit", values);

    setIsSending(false);
    setIsSuccess(true);
    setValues(initialValues);
  };

  const getFieldClassName = (hasError?: string) =>
    cn(
      "w-full rounded-xl border px-4 py-3 text-sm text-primary shadow-sm transition-all outline-none",
      "focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-white",
      hasError
        ? "border-red-400 bg-red-50/40 focus-visible:ring-red-400"
        : "border-primary/15 bg-white hover:border-primary/30",
    );

  return (
    <section id="contacto" className={cn(sectionPadding, "relative overflow-hidden bg-primary")}>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,229,255,0.22),transparent_52%)] opacity-40"
      />

      <Container className="relative z-10 grid items-start gap-12 lg:grid-cols-2">
        <div className="space-y-7">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Listo para analizar tu proximo paso?
          </h2>
          <p className="max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
            Completa este formulario y simula una precalificacion para recibir una
            orientacion inicial.
          </p>
          <ul className="space-y-4">
            {leadBenefits.map((benefit, index) => (
              <li key={benefit} className="flex items-center gap-3 text-white/90">
                <span className="flex size-8 items-center justify-center rounded-full bg-white/15 text-sm font-bold">
                  {index + 1}
                </span>
                <span className="text-sm font-semibold sm:text-base">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white p-6 shadow-2xl sm:p-8">
          <form className="space-y-4" onSubmit={handleSubmit} noValidate>
            <div className="space-y-1.5">
              <label htmlFor="nombre" className="text-sm font-semibold text-primary/80">
                Nombre completo
              </label>
              <input
                id="nombre"
                name="nombre"
                value={values.nombre}
                onChange={handleChange("nombre")}
                className={getFieldClassName(errors.nombre)}
                placeholder="Ej. Ana Rodriguez"
                autoComplete="name"
                aria-invalid={Boolean(errors.nombre)}
                aria-describedby={errors.nombre ? "nombre-error" : undefined}
              />
              {errors.nombre ? (
                <p id="nombre-error" className="text-xs font-medium text-red-500">
                  {errors.nombre}
                </p>
              ) : null}
            </div>

            <div className="space-y-1.5">
              <label htmlFor="email" className="text-sm font-semibold text-primary/80">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={values.email}
                onChange={handleChange("email")}
                className={getFieldClassName(errors.email)}
                placeholder="tu@email.com"
                autoComplete="email"
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? "email-error" : undefined}
              />
              {errors.email ? (
                <p id="email-error" className="text-xs font-medium text-red-500">
                  {errors.email}
                </p>
              ) : null}
            </div>

            <div className="space-y-1.5">
              <label htmlFor="telefono" className="text-sm font-semibold text-primary/80">
                WhatsApp o telefono
              </label>
              <input
                id="telefono"
                name="telefono"
                value={values.telefono}
                onChange={handleChange("telefono")}
                className={getFieldClassName(errors.telefono)}
                placeholder="+54 9 11 1234 5678"
                autoComplete="tel"
                aria-invalid={Boolean(errors.telefono)}
                aria-describedby={errors.telefono ? "telefono-error" : undefined}
              />
              {errors.telefono ? (
                <p id="telefono-error" className="text-xs font-medium text-red-500">
                  {errors.telefono}
                </p>
              ) : null}
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-1.5">
                <label htmlFor="capital" className="text-sm font-semibold text-primary/80">
                  Capital estimado
                </label>
                <select
                  id="capital"
                  name="capital"
                  value={values.capital}
                  onChange={handleChange("capital")}
                  className={getFieldClassName(errors.capital)}
                  aria-invalid={Boolean(errors.capital)}
                  aria-describedby={errors.capital ? "capital-error" : undefined}
                >
                  <option value="">Seleccionar</option>
                  {capitalOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                {errors.capital ? (
                  <p id="capital-error" className="text-xs font-medium text-red-500">
                    {errors.capital}
                  </p>
                ) : null}
              </div>

              <div className="space-y-1.5">
                <label htmlFor="tipo" className="text-sm font-semibold text-primary/80">
                  Tipo de participacion
                </label>
                <select
                  id="tipo"
                  name="tipo"
                  value={values.tipo}
                  onChange={handleChange("tipo")}
                  className={getFieldClassName(errors.tipo)}
                  aria-invalid={Boolean(errors.tipo)}
                  aria-describedby={errors.tipo ? "tipo-error" : undefined}
                >
                  <option value="">Seleccionar</option>
                  {tipoOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                {errors.tipo ? (
                  <p id="tipo-error" className="text-xs font-medium text-red-500">
                    {errors.tipo}
                  </p>
                ) : null}
              </div>
            </div>

            <div className="space-y-1.5">
              <label htmlFor="plazo" className="text-sm font-semibold text-primary/80">
                Plazo para invertir
              </label>
              <select
                id="plazo"
                name="plazo"
                value={values.plazo}
                onChange={handleChange("plazo")}
                className={getFieldClassName(errors.plazo)}
                aria-invalid={Boolean(errors.plazo)}
                aria-describedby={errors.plazo ? "plazo-error" : undefined}
              >
                <option value="">Seleccionar</option>
                {plazoOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              {errors.plazo ? (
                <p id="plazo-error" className="text-xs font-medium text-red-500">
                  {errors.plazo}
                </p>
              ) : null}
            </div>

            <button
              type="submit"
              disabled={isSending}
              className={cn(
                buttonStyles.base,
                buttonStyles.primary,
                "mt-2 w-full py-3.5 text-base",
                isSending && "cursor-not-allowed opacity-70",
              )}
            >
              {isSending ? "Enviando..." : "Simular precalificacion"}
            </button>

            {isSuccess ? (
              <p
                role="status"
                className="rounded-lg border border-emerald-200 bg-emerald-50 px-3 py-2 text-sm font-medium text-emerald-700"
              >
                Envio simulado con exito. Revisa la consola para ver el payload.
              </p>
            ) : null}
          </form>
        </div>
      </Container>
    </section>
  );
}
