"use client";

import { motion } from "framer-motion";

type PaymentCardType = {
  title: string;
  description: string;
  icon: string;
};

export function PaymentCard({ title, description, icon }: PaymentCardType) {
  return (
    <motion.div
      whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(0,0,0,0.12)" }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className="w-full sm:w-[300px] bg-white border border-gray-100 rounded-2xl shadow-md p-6 flex items-start gap-5 cursor-default"
    >
      <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-secondary flex items-center justify-center text-2xl shadow-sm">
        {icon}
      </div>
      <div className="flex flex-col gap-1">
        <h4 className="text-accent font-bold text-base leading-snug">{title}</h4>
        <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
}
