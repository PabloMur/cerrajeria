export type SiteConfig = {
  phone: string;
  phoneDisplay: string;
  address: string;
  email: string;
  facebook: string;
  instagram: string;
  stats: {
    years: number;
    clients: number;
  };
  about: string;
  services: {
    title: string;
    description: string;
  }[];
};

export const defaultConfig: SiteConfig = {
  phone: "5490000000000",
  phoneDisplay: "+54 9 000 000-0000",
  address: "Córdoba 3030, Mar del Plata",
  email: "contacto@cerrajerialatorre.com",
  facebook: "https://www.facebook.com",
  instagram: "https://www.instagram.com",
  stats: {
    years: 10,
    clients: 500,
  },
  about:
    "Bienvenido a La Torre Cerrajería, tu socio confiable en Mar del Plata. Nos dedicamos a proporcionar servicios de cerrajería las 24 horas del día, con un equipo altamente calificado especializado en apertura de puertas, reparación y cambio de cerraduras. Nuestra misión es brindar soluciones rápidas y seguras para garantizar tu tranquilidad.",
  services: [
    {
      title: "Reparación y cambio de cerraduras",
      description:
        "Solucionamos problemas de seguridad con reparación y cambio de cerraduras. Mantén tu hogar o negocio protegido con profesionales confiables.",
    },
    {
      title: "Aperturas de urgencia",
      description:
        "Atención inmediata 24hs. Resolvemos emergencias con rapidez y profesionalismo para garantizar tu acceso cuando más lo necesitás.",
    },
    {
      title: "Duplicado de llaves",
      description:
        "Copias rápidas y precisas de todo tipo de llaves. Accesos convenientes y respuestas ágiles para el día a día.",
    },
  ],
};

export const BACKEND_URL = "https://backend-cerrajeria.vercel.app";
