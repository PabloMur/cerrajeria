"use client";

import { useEffect, useState } from "react";

const AttentionStatus = () => {
  const [servicioActivo, setServicioActivo] = useState<boolean | null>(null);

  const fetchStatus = async () => {
    try {
      const res = await fetch("https://backend-cerrajeria.vercel.app/api/service");
      const data = await res.json();
      setServicioActivo(data.data?.servicio ?? false);
    } catch (err) {
      console.error("Error fetching status:", err);
    }
  };

  useEffect(() => {
    fetchStatus(); // fetch inicial
    const interval = setInterval(fetchStatus, 3000); // cada 3 segundos
    return () => clearInterval(interval); // limpiar al desmontar
  }, []);

  if (servicioActivo === null) return <div>Cargando...</div>;

  return (
    <div className="bg-black text-white px-2 pr-3 py-1 rounded-full text-sm flex items-center gap-2 cursor-pointer">
      <p>{servicioActivo ? "Técnicos disponibles" : "Técnicos ocupados"}</p>
      <div
        className={`h-[10px] w-[10px] rounded-full ${
          servicioActivo ? "bg-green-400 animate-pulse" : "bg-red-400"
        }`}
      ></div>
    </div>
  );
};

export default AttentionStatus;
