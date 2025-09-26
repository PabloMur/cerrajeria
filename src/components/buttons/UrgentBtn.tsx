import Image from "next/image";
import whastappGreen from "../../../public/whatsappgreen.svg";

export default function UrgentBtn() {
  return (
    <a
      href="https://wa.me/5492234660539?text=Me%20gustaría%20saber%20el%20precio%20del%20Urgencias"
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
