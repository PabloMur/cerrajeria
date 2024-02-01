import css from "@/styles/banner.module.css";
import CustomTitle from "./ui/CustomTitle";
import { ServiceCard } from "./Cards";
import ContactBlister from "./ContactBlister";
import ContactForm from "./forms/ContactForm";
import UrgentBtn from "./buttons/UrgentBtn";
import LocationMap from "./LocationMap";
export function HomePageBanner() {
  return (
    <div
      className={`${css.banner} h-[70vh] w-full flex flex-col justify-center items-center mt-10`}
      id="home"
    >
      <div className="flex flex-col justify-center items-start gap-7">
        <h3 className="text-black text-4xl font-bold">
          Abrimos puertas, cerramos preocupaciones. <br></br>Tu Cerrajería de
          confianza.
        </h3>
        <div className="flex justify-center items-center gap-10">
          <UrgentBtn></UrgentBtn>
          <p className="text-black font-bold text-xl">Servicio las 24hs</p>
          <p>Hola soy yo de vuelta</p>
        </div>
      </div>
    </div>
  );
}

export function ServicesBanner() {
  return (
    <div
      className="bg-secondary h-[90vh] w-full flex flex-col justify-center items-center p-4 py-10"
      id="servicios"
    >
      <CustomTitle text={"Nuestros Servicios"}></CustomTitle>

      <div className="flex w-full h-[80%] justify-evenly items-center">
        <ServiceCard
          title={"Reparacion y cambio de Cerraduras"}
          description={
            "Solucionamos problemas de seguridad con servicios de reparación y cambio de cerraduras. Mantén tu hogar o negocio seguro y protegido con profesionales confiables."
          }
        ></ServiceCard>
        <ServiceCard title={"Aperturas de Urgencia"}></ServiceCard>
        <ServiceCard title={"Duplicado de llaves"}></ServiceCard>
      </div>
    </div>
  );
}

export function AboutBanner() {
  return (
    <div
      className="bg-white h-[90vh] w-full flex flex-col justify-center items-center"
      id="about"
    >
      <CustomTitle text={"Quienes Somos"}></CustomTitle>
      <p className="text-black text-xl w-[70%] text-justify">
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

export function LocationBanner() {
  return (
    <div
      className="bg-secondary h-[90vh] w-full flex flex-col justify-center items-center"
      id="location"
    >
      <CustomTitle text={"Donde encontrarnos"}></CustomTitle>
      <p className="text-black m-3 font-bold">
        Estamos en pleno centro de la ciudad, por lo que en minutos podemos
        estar ahi para aisistirte.
      </p>
      <LocationMap></LocationMap>
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
