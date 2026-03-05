"use client";
import { useSiteConfig } from "@/context/SiteConfigContext";

const Footer = () => {
  const { config } = useSiteConfig();

  return (
    <footer className="bg-accent text-white pt-12 pb-6">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-8">
          {/* Marca */}
          <div className="flex flex-col gap-2">
            <h2 className="text-xl font-bold text-secondary">Cerrajería La Torre</h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              Servicio de cerrajería profesional y confiable en Mar del Plata.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-2">
            <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-1">
              Navegación
            </h3>
            {[
              { href: "#servicios", label: "Servicios" },
              { href: "#pagos", label: "Medios de pago" },
              { href: "#about", label: "Nosotros" },
              { href: "#contacto", label: "Contacto" },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-400 hover:text-secondary text-sm transition-colors duration-150"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Contacto */}
          <div className="flex flex-col gap-2">
            <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-1">
              Contacto
            </h3>
            <a
              href={`tel:+${config.phone}`}
              className="text-gray-400 hover:text-secondary text-sm transition-colors duration-150"
            >
              {config.phoneDisplay}
            </a>
            <a
              href={`https://wa.me/${config.phone}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-secondary text-sm transition-colors duration-150"
            >
              WhatsApp
            </a>
            <span className="text-gray-400 text-sm">{config.address}</span>
          </div>
        </div>

        <hr className="border-white/10 mb-4" />

        <p className="text-gray-500 text-sm text-center">
          &copy; 2025 Cerrajería La Torre. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
