"use client";

import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";

type ServiceCardType = {
  title: string;
  description: string;
  image: StaticImageData;
};

export function ServiceCard({ title, description, image }: ServiceCardType) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      className="w-full sm:w-[300px] bg-accent rounded-2xl overflow-hidden shadow-xl cursor-default"
    >
      <div className="relative w-full h-[200px]">
        <Image
          src={image}
          alt="imagen descriptiva del servicio"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-accent via-accent/30 to-transparent" />
      </div>
      <div className="p-6 flex flex-col gap-2">
        <h4 className="text-secondary font-bold text-lg leading-snug">{title}</h4>
        <p className="text-gray-300 text-sm leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
}
