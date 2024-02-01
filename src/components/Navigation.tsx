"use client";
import React, { useEffect } from "react";
import Logo from "./ui/Logo";
import NavigationLink from "./ui/NavigationLink";

export default function Navigation() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const SmoothScroll = require("smooth-scroll");
      const scroll = new SmoothScroll('a[href*="#"]', {
        speed: 800,
        offset: 50,
      });

      // Limpieza al desmontar el componente
      return () => {
        scroll.destroy();
      };
    }
  }, []);

  return (
    <nav className="bg-secondary text-black p-4 fixed w-full ">
      <div className="container mx-auto flex justify-between items-center px-20">
        <Logo></Logo>
        <ul className="flex space-x-4">
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
      </div>
    </nav>
  );
}
