import css from "@/styles/banner.module.css";
import CustomTitle from "./ui/CustomTitle";
import { ServiceCard } from "./Cards";
import ContactBlister from "./ContactBlister";
import ContactForm from "./forms/ContactForm";
export function HomePageBanner() {
  return (
    <div
      className={`${css.banner} h-[100vh] w-full flex justify-center items-center`}
    >
      <h3 className="text-black text-4xl font-bold">
        Abrimos puertas, cerramos preocupaciones. <br></br>Tu Cerrajería de
        confianza.
      </h3>
    </div>
  );
}

export function ServicesBanner() {
  return (
    <div
      className="bg-secondary h-[90vh] w-full flex flex-col justify-evenly items-center"
      id="servicios"
    >
      <div className="p-4 flex justify-center items-center">
        <CustomTitle text={"Nuestros Servicios"}></CustomTitle>
      </div>
      <div className="flex w-full h-[80%] justify-evenly items-center">
        <ServiceCard title={"Reparacion y cambio de Cerraduras"}></ServiceCard>
        <ServiceCard title={"Aperturas de Urgencia"}></ServiceCard>
        <ServiceCard title={"Duplicado de llaves"}></ServiceCard>
      </div>
    </div>
  );
}

export function AboutBanner() {
  return (
    <div
      className="bg-purple-500 h-[100vh] w-full flex flex-col justify-center items-center"
      id="about"
    >
      <CustomTitle text={"Quienes Somos"}></CustomTitle>
      <p className="text-black text-xl w-[80%] text-justify">
        Bienvenido a La Torre Cerrajería, tu socio confiable en Mar del Plata.
        Nos dedicamos a proporcionar servicios de cerrajería las 24 horas del
        día. Con un equipo altamente calificado, nos especializamos en apertura
        de puertas, reparación y cambio de cerraduras. En La Torre, nuestra
        misión es brindar soluciones rápidas y seguras para garantizar tu
        tranquilidad. Con años de experiencia, nos enorgullece ser la elección
        preferida en servicios de cerrajería. Estamos aquí para protegerte en
        todo momento.
      </p>
    </div>
  );
}

export function ContactBanner() {
  return (
    <div
      className="bg-white h-[90vh] w-full flex flex-col justify-start items-center"
      id="contacto"
    >
      <CustomTitle text={"Contactanos"}></CustomTitle>
      <div className="flex justify-center items-center w-full h-full">
        <ContactBlister></ContactBlister>
        <ContactForm></ContactForm>
      </div>
    </div>
  );
}
