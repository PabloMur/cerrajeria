"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import whatsapp from "../../public/whatsappPopup.svg";

export default function WhatsappPopup({ phone }: any) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    isVisible && (
      <a
        href={`https://api.whatsapp.com/send?phone=${phone}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <motion.div
          className="fixed bottom-10 right-10"
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
      </a>
    )
  );
}
