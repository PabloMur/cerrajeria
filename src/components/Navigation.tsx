"use client";
import React, { useEffect } from "react";
import Logo from "./ui/Logo";
import NavigationLink from "./ui/NavigationLink";
import LittleBanner from "./LittleBanner";
import { useNavigationScroll } from "@/hooks";

export default function Navigation() {
  useNavigationScroll();
  //por el momento no es necesario este componente
  //<LittleBanner></LittleBanner>
  return (
    <nav className="bg-secondary text-black sm:p-4 py-6 w-[100%] fixed flex justify-center items-center">
      <Logo></Logo>
    </nav>
  );
}

{
  /* <div className="container flex justify-center sm:justify-between items-center sm:px-20">
<ul className="hidden sm:flex space-x-4">
  <NavigationLink href={"#home"} text={"Inicio"}></NavigationLink>
  <NavigationLink
    href={"#servicios"}
    text={"Servicios"}
  ></NavigationLink>
  <NavigationLink
    href={"#about"}
    text={"Acerca de Nosotros"}
  ></NavigationLink>
  <NavigationLink
    href={"#location"}
    text={"Ubicacion"}
  ></NavigationLink>
  <NavigationLink href={"#contacto"} text={"Contacto"}></NavigationLink>
</ul>
</div> */
}
