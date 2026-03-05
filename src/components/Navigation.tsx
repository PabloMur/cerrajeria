"use client";
import React, { useState } from "react";
import Logo from "./ui/Logo";
import NavigationLink from "./ui/NavigationLink";
import MenuBtn from "./ui/MenuBtn";
import { useNavigationScroll } from "@/hooks";
import DesktopMenu from "./DesktopMenu";

const NAV_LINKS = [
  { href: "#home", text: "Inicio" },
  { href: "#servicios", text: "Servicios" },
  { href: "#pagos", text: "Medios de pago" },
  { href: "#about", text: "Nosotros" },
  { href: "#location", text: "Ubicación" },
  { href: "#contacto", text: "Contacto" },
];

export default function Navigation() {
  useNavigationScroll();
  const [menuOpen, setMenuOpen] = useState(true);

  return (
    <nav className="bg-secondary shadow-md w-full fixed flex flex-col justify-center items-center z-50">
      <div className="flex justify-between items-center w-full px-6 py-4 max-w-6xl mx-auto">
        <Logo />
        <MenuBtn state={menuOpen} setState={setMenuOpen} />
        <DesktopMenu />
      </div>

      {!menuOpen && (
        <div className="bg-secondary flex justify-center items-center w-full h-[95vh] absolute top-[68px] left-0 z-50 shadow-xl">
          <ul className="flex flex-col justify-center items-center gap-8">
            {NAV_LINKS.map((link) => (
              <NavigationLink
                key={link.href}
                href={link.href}
                text={link.text}
                handleClick={() => setMenuOpen(true)}
              />
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
