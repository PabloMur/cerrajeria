"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import whatsapp from "../../public/whatsappPopup.svg";

export default function WhatsappPopup() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1500); // 2000 milisegundos = 2 segundos

    // Limpiar el temporizador al desmontar el componente
    return () => clearTimeout(timer);
  }, []);

  return (
    isVisible && (
      <motion.div
        className="fixed top-96 right-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <Image
          src={whatsapp}
          alt="imagen de whatsapp"
          height={120}
          width={120}
        />
      </motion.div>
    )
  );
}
