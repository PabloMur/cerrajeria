import Image from "next/image";
import whastappGreen from "../../../public/whatsappgreen.svg";
export default function UrgentBtn() {
  return (
    <button className="p-4 bg-black rounded-xl text-xl ">
      <a
        href="https://wa.me/5211234567890?text=Me%20gustaría%20saber%20el%20precio%20del%20Urgencias"
        target="_blank"
        className="flex justify-center items-center gap-2"
      >
        <p>Tengo una urgencia </p>
        <Image
          src={whastappGreen}
          alt="icono de whatsapp"
          height={30}
          width={30}
        ></Image>
      </a>
    </button>
  );
}
