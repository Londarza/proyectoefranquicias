export type NavLink = {
  href: string;
  label: string;
};

export type HeroHighlight = {
  icon: string;
  text: string;
};

export type ProcessStep = {
  icon: string;
  title: string;
  description: string;
};

export type Category = {
  icon: string;
  title: string;
  description: string;
};

export type StrategyCard = {
  title: string;
  icon: string;
  badge?: string;
  highlighted?: boolean;
  actionLabel: string;
  items: string[];
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type FooterLinkGroup = {
  title: string;
  links: Array<{ label: string; href: string }>;
};

export const navLinks: NavLink[] = [
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#categorias", label: "Categorias" },
  { href: "#estrategia", label: "Estrategia" },
  { href: "#faq", label: "Preguntas" },
];

export const heroHighlights: HeroHighlight[] = [
  {
    icon: "check_circle",
    text: "Seleccion curada de franquicias en distintos rubros.",
  },
  {
    icon: "check_circle",
    text: "Informacion clara para comparar opciones con criterio.",
  },
  {
    icon: "check_circle",
    text: "Alternativas para perfiles activos, pasivos o mixtos.",
  },
];

export const howItWorksSteps: ProcessStep[] = [
  {
    icon: "search",
    title: "Explora",
    description: "Revisa oportunidades y conoce cada propuesta con detalle.",
  },
  {
    icon: "analytics",
    title: "Evalua",
    description: "Compara variables clave para elegir con una mirada integral.",
  },
  {
    icon: "payments",
    title: "Define",
    description: "Selecciona un camino alineado con tu capital y tus tiempos.",
  },
  {
    icon: "trending_up",
    title: "Acompana",
    description: "Hace seguimiento de tu estrategia con soporte del equipo.",
  },
];

export const categories: Category[] = [
  {
    icon: "restaurant",
    title: "Gastronomia",
    description: "Marcas de consumo frecuente con modelos operativos estandarizados.",
  },
  {
    icon: "precision_manufacturing",
    title: "Servicios",
    description: "Negocios de base tecnica orientados a demanda recurrente.",
  },
  {
    icon: "shopping_bag",
    title: "Retail",
    description: "Conceptos comerciales para ubicaciones estrategicas.",
  },
  {
    icon: "health_and_safety",
    title: "Bienestar",
    description: "Propuestas vinculadas a salud, cuidado personal y calidad de vida.",
  },
];

export const strategyCards: StrategyCard[] = [
  {
    title: "Modelo Pasivo",
    icon: "groups",
    badge: "Sugerido para delegar",
    highlighted: true,
    actionLabel: "Conocer modalidad pasiva",
    items: [
      "Participacion con baja carga operativa.",
      "Seguimiento periodico con reportes claros.",
      "Ideal para diversificar con foco en simplicidad.",
      "Acompanamiento profesional durante el proceso.",
    ],
  },
  {
    title: "Modelo Activo",
    icon: "engineering",
    actionLabel: "Conocer modalidad activa",
    items: [
      "Mayor participacion en la operacion del negocio.",
      "Decisiones mas directas en el dia a dia.",
      "Espacio para imprimir tu estilo de gestion.",
      "Adecuado para perfiles con tiempo e involucramiento.",
    ],
  },
];

export const leadBenefits: string[] = [
  "Formulario breve y sin compromiso.",
  "Contacto orientativo para ordenar proximos pasos.",
  "Evaluacion inicial segun tu perfil y disponibilidad.",
];

export const faqItems: FaqItem[] = [
  {
    question: "Necesito experiencia previa en franquicias?",
    answer:
      "No es obligatorio. Podes comenzar con una modalidad mas acompanada y definir tu nivel de participacion segun tu experiencia.",
  },
  {
    question: "Puedo evaluar mas de una categoria antes de decidir?",
    answer:
      "Si. La plataforma esta pensada para comparar varias opciones y entender diferencias operativas antes de avanzar.",
  },
  {
    question: "Cuanto tarda el proceso inicial?",
    answer:
      "Depende del caso, pero la etapa inicial suele ser agil: primero completas el formulario y luego coordinamos una instancia de orientacion.",
  },
];

export const footerLinkGroups: FooterLinkGroup[] = [
  {
    title: "Plataforma",
    links: [
      { label: "Como funciona", href: "#como-funciona" },
      { label: "Categorias", href: "#categorias" },
      { label: "Estrategia", href: "#estrategia" },
      { label: "Contacto", href: "#contacto" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Terminos de uso", href: "#" },
      { label: "Politica de privacidad", href: "#" },
      { label: "Politica de cookies", href: "#" },
      { label: "Avisos legales", href: "#" },
    ],
  },
];

export const capitalOptions: string[] = [
  "USD 2.00 a USD 5.000",
  "USD 5.000 a USD 10.000",
  "USD 10.000 a USD 50.000",
  "Mas de USD 50.000",
];

export const tipoOptions: string[] = ["Activo", "Pasivo", "Ambos"];

export const plazoOptions: string[] = [
  "Inmediato (30 dias)",
  "1 a 3 meses",
  "Mas de 3 meses",
];
