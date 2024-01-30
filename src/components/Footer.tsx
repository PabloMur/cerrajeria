import React from "react";

const Footer = () => {
  return (
    <footer className="bg-accent text-white p-6">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold mb-2">Cerrajería La Torre</h2>
            <p>Servicio de cerrajería confiable y profesional.</p>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-300">
              Inicio
            </a>
            <a href="#" className="hover:text-gray-300">
              Servicios
            </a>
            <a href="#" className="hover:text-gray-300">
              Acerca de Nosotros
            </a>
            <a href="#" className="hover:text-gray-300">
              Contacto
            </a>
          </div>
        </div>
        <hr className="my-4 border-gray-500" />
        <div className="flex justify-between items-center">
          <p>&copy; 2024 Cerrajería La Torre. Todos los derechos reservados.</p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-300">
              Política de Privacidad
            </a>
            <a href="#" className="hover:text-gray-300">
              Términos de Servicio
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
