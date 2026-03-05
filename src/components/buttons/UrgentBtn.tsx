"use client";
import Image from "next/image";
import whastappGreen from "../../../public/whatsappgreen.svg";
import { useSiteConfig } from "@/context/SiteConfigContext";

export default function UrgentBtn() {
  const { config } = useSiteConfig();
  const text = encodeURIComponent("Me gustaría saber el precio del servicio de urgencias");

  return (
    <a
      href={`https://wa.me/${config.phone}?text=${text}`}
      target="_blank"
      className="
        flex items-center gap-3
        bg-black
        text-white font-bold text-lg
        px-6 py-3 rounded-full
        shadow-xl hover:shadow-xl
        transition-transform transform hover:scale-110
        border-4 border-white
      "
    >
      <span>Tengo una urgencia</span>
      <Image
        src={whastappGreen}
        alt="icono de whatsapp"
        height={28}
        width={28}
        className="animate-pulse"
      />
    </a>
  );
}
