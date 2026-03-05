"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import { MessageCircle } from "lucide-react";

import {
  capitalOptions,
  leadBenefits,
  plazoOptions,
  tipoOptions,
} from "@/src/lib/landing";
import {
  buildWhatsAppHref,
  emailJsConfig,
  isEmailJsConfigured,
  whatsappHref,
} from "@/src/lib/contact";
import { buttonStyles, cn, Container, sectionPadding } from "@/src/components/landing/ui";

type LeadFormValues = {
  nombre: string;
  email: string;
  telefono: string;
  capital: string;
  tipo: string;
  plazo: string;
  consentimiento: boolean;
};

type LeadFormErrors = Partial<Record<keyof LeadFormValues, string>>;
type LeadTextField = Exclude<keyof LeadFormValues, "consentimiento">;

const initialValues: LeadFormValues = {
  nombre: "",
  email: "",
  telefono: "",
  capital: "",
  tipo: "",
  plazo: "",
  consentimiento: false,
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
  if (values.telefono.trim() && values.telefono.trim().length < 6) {
    errors.telefono = "Ingresa un telefono valido.";
  }
  if (!values.consentimiento) {
    errors.consentimiento = "Debes aceptar el consentimiento para enviar la consulta.";
  }

  return errors;
}

async function sendLead(values: LeadFormValues) {
  if (!isEmailJsConfigured()) {
    throw new Error("EMAILJS_NOT_CONFIGURED");
  }

  const response = await fetch(emailJsConfig.endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      service_id: emailJsConfig.serviceId,
      template_id: emailJsConfig.templateId,
      user_id: emailJsConfig.publicKey,
      template_params: {
        to_email: "info@vistadelta.com.ar",
        from_name: values.nombre.trim(),
        from_email: values.email.trim(),
        phone: values.telefono.trim() || "No informado",
        capital: values.capital || "No informado",
        participation_type: values.tipo || "No informado",
        investment_timeline: values.plazo || "No informado",
        consent: values.consentimiento ? "Si" : "No",
        source: "e-franquicias.vercel.app",
      },
    }),
  });

  if (!response.ok) {
    throw new Error("EMAILJS_REQUEST_FAILED");
  }
}

export function LeadForm() {
  const [values, setValues] = useState<LeadFormValues>(initialValues);
  const [errors, setErrors] = useState<LeadFormErrors>({});
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange =
    (field: LeadTextField) =>
    (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      const nextValue = event.target.value;

      setValues((prev) => ({ ...prev, [field]: nextValue }));
      setErrors((prev) => ({ ...prev, [field]: undefined }));
      if (status !== "idle") setStatus("idle");
    };

  const handleConsentChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValues((prev) => ({ ...prev, consentimiento: event.target.checked }));
    setErrors((prev) => ({ ...prev, consentimiento: undefined }));
    if (status !== "idle") setStatus("idle");
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nextErrors = validate(values);
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setStatus("idle");
      return;
    }

    setErrors({});
    setIsSending(true);

    try {
      await sendLead(values);
      setStatus("success");
      setValues(initialValues);
    } catch {
      setStatus("error");
    } finally {
      setIsSending(false);
    }
  };

  const whatsappContactHref = buildWhatsAppHref(
    "Hola, quiero consultar por e-Franquicias y recibir asesoramiento.",
  );

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
                required
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
                required
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
                WhatsApp o telefono (opcional)
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
                  Capital estimado (opcional)
                </label>
                <select
                  id="capital"
                  name="capital"
                  value={values.capital}
                  onChange={handleChange("capital")}
                  className={getFieldClassName()}
                >
                  <option value="">Seleccionar</option>
                  {capitalOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="tipo" className="text-sm font-semibold text-primary/80">
                  Tipo de participacion (opcional)
                </label>
                <select
                  id="tipo"
                  name="tipo"
                  value={values.tipo}
                  onChange={handleChange("tipo")}
                  className={getFieldClassName()}
                >
                  <option value="">Seleccionar</option>
                  {tipoOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="space-y-1.5">
              <label htmlFor="plazo" className="text-sm font-semibold text-primary/80">
                Plazo para invertir (opcional)
              </label>
              <select
                id="plazo"
                name="plazo"
                value={values.plazo}
                onChange={handleChange("plazo")}
                className={getFieldClassName()}
              >
                <option value="">Seleccionar</option>
                {plazoOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-1.5">
              <label className="flex items-start gap-3">
                <input
                  id="consentimiento"
                  name="consentimiento"
                  type="checkbox"
                  checked={values.consentimiento}
                  onChange={handleConsentChange}
                  required
                  className="mt-0.5 size-4 rounded border-primary/25 text-primary focus:ring-accent"
                  aria-invalid={Boolean(errors.consentimiento)}
                  aria-describedby={errors.consentimiento ? "consentimiento-error" : undefined}
                />
                <span className="text-sm leading-relaxed text-primary/75">
                  Acepto ser contactado por el equipo de e-Franquicias para recibir
                  informacion sobre oportunidades y asesoramiento.
                </span>
              </label>
              {errors.consentimiento ? (
                <p id="consentimiento-error" className="text-xs font-medium text-red-500">
                  {errors.consentimiento}
                </p>
              ) : null}
            </div>

            <div className="mt-2 grid gap-3 sm:grid-cols-2">
              <button
                type="submit"
                disabled={isSending}
                className={cn(
                  buttonStyles.base,
                  buttonStyles.primary,
                  "w-full py-3.5 text-base",
                  isSending && "cursor-not-allowed opacity-70",
                )}
              >
                {isSending ? "Enviando..." : "Enviar consulta"}
              </button>

              <a
                href={whatsappContactHref}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  buttonStyles.base,
                  "w-full border border-[#25D366]/40 bg-[#25D366]/10 text-[#1a7a42] hover:-translate-y-0.5 hover:bg-[#25D366]/15",
                )}
              >
                <MessageCircle className="mr-2 size-4" aria-hidden="true" />
                Consultar por WhatsApp
              </a>
            </div>

            <p className="text-xs leading-relaxed text-primary/60">
              Tiempo estimado de respuesta: dentro de las proximas 24 horas habiles.
            </p>

            {status === "success" ? (
              <p
                role="status"
                className="rounded-lg border border-emerald-200 bg-emerald-50 px-3 py-2 text-sm font-medium text-emerald-700"
              >
                Recibimos tu consulta. En breve te contactaremos.
              </p>
            ) : null}

            {status === "error" ? (
              <p
                role="status"
                className="rounded-lg border border-amber-200 bg-amber-50 px-3 py-2 text-sm font-medium text-amber-800"
              >
                No se pudo enviar. Escribinos por WhatsApp.
              </p>
            ) : null}

            <p className="text-sm text-primary/75">
              Si preferis resolverlo ahora, escribinos directo por{" "}
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline underline-offset-2"
              >
                WhatsApp
              </a>
              .
            </p>
          </form>
        </div>
      </Container>
    </section>
  );
}
