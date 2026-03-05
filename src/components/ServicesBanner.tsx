"use client";
import { ServiceCard } from "./Cards";
import CustomTitle from "./ui/CustomTitle";
import urgencias from "../../public/urgencias.jpg";
import reparaciones from "../../public/reparacion.jpg";
import duplicado from "../../public/duplicado.jpg";
import { useSiteConfig } from "@/context/SiteConfigContext";
import { StaticImageData } from "next/image";

const SERVICE_IMAGES: StaticImageData[] = [reparaciones, urgencias, duplicado];

export function ServicesBanner() {
  const { config } = useSiteConfig();

  return (
    <div
      className="bg-white w-full flex flex-col justify-center items-center px-4 py-20"
      id="servicios"
    >
      <CustomTitle text={"Nuestros Servicios"} />

      <div className="flex flex-col sm:flex-row w-full max-w-5xl justify-center items-stretch gap-6 mt-10">
        {config.services.map((service, i) => (
          <ServiceCard
            key={i}
            image={SERVICE_IMAGES[i]}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </div>
  );
}
