"use client";
import React, { useEffect } from "react";
import SmoothScroll from "smooth-scroll";
import Navigation from "./Navigation";

export default function CustomLayout({ children }: any) {
  useEffect(() => {
    // Configuración de smooth-scroll
    const scroll = new SmoothScroll('a[href*="#"]', {
      speed: 800,
      offset: 50,
    });

    // Limpieza al desmontar el componente
    return () => {
      scroll.destroy();
    };
  }, []);
  return (
    <div>
      <Navigation></Navigation>
      {children}
      <WhatsappPopaop></WhatsappPopaop>
      <Footer></Footer>
    </div>
  );
}
