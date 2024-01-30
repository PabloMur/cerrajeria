import Link from "next/link";
import Logo from "./ui/Logo";
import NavigationLink from "./ui/NavigationLink";
import { text } from "stream/consumers";

export default function Navigation() {
  return (
    <nav className="bg-secondary text-black p-4 fixed w-full">
      <div className="container mx-auto flex justify-between items-center">
        <Logo></Logo>
        <ul className="flex space-x-4">
          <NavigationLink href={"/"} text={"Inicio"}></NavigationLink>
          <NavigationLink
            href={"#servicios"}
            text={"Servicios"}
          ></NavigationLink>
          <NavigationLink
            href={"#about"}
            text={"Acerca de Nosotros"}
          ></NavigationLink>
          <NavigationLink href={"#contacto"} text={"Contacto"}></NavigationLink>
        </ul>
      </div>
    </nav>
  );
}
