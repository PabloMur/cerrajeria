const Footer = () => {
  return (
    <footer className="bg-accent text-white p-6">
      <div className="container mx-auto">
        <div className="flex flex-col justify-between items-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-2 ">Cerrajería La Torre</h2>
            <p>Servicio de cerrajería confiable y profesional.</p>
          </div>
          <div className="flex space-x-4 mt-2">
            <a href="#servicios" className="hover:text-gray-300">
              Servicios
            </a>
            <a href="#about" className="hover:text-gray-300">
              Acerca de Nosotros
            </a>
            <a href="#contacto" className="hover:text-gray-300">
              Contacto
            </a>
          </div>
        </div>
        <hr className="my-4 border-gray-500" />
        <div className="flex justify-between items-center text-center">
          <p>&copy; 2024 Cerrajería La Torre. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
