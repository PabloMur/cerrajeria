import { ServiceCard } from "./Cards";
import CustomTitle from "./ui/CustomTitle";
import urgencias from "../../public/urgencias.jpg";
import reparaciones from "../../public/reparacion.jpg";
import duplicado from "../../public/duplicado.jpg";

export function ServicesBanner() {
  return (
    <div
      className="bg-secondary min-h-[90vh] w-full flex flex-col justify-center items-center p-4 py-10"
      id="servicios"
    >
      <CustomTitle text={"Nuestros Servicios"}></CustomTitle>

      <div className="flex flex-col sm:flex-row w-full justify-evenly items-center gap-3">
        <ServiceCard
          image={reparaciones}
          title={"Reparacion y cambio de Cerraduras"}
          description={
            "Solucionamos problemas de seguridad con servicios de reparación y cambio de cerraduras. Mantén tu hogar o negocio seguro y protegido con profesionales confiables."
          }
        ></ServiceCard>
        <ServiceCard
          image={urgencias}
          title={"Aperturas de Urgencia"}
          description={
            "Resolvemos emergencias aperturas rápidas y profesionales, brindando soluciones inmediatas para garantizar tu acceso cuando más lo necesitas."
          }
        ></ServiceCard>
        <ServiceCard
          image={duplicado}
          title={"Duplicado de llaves"}
          description={
            "Servicio rápido y preciso para obtener copias de llaves, asegurando accesos convenientes y respuestas ágiles a situaciones cotidianas."
          }
        ></ServiceCard>
      </div>
    </div>
  );
}
