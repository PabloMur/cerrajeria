import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cerrajería La Torre | Mar del Plata",
  description:
    "Cerrajería La Torre en Mar del Plata. Servicio de cerrajería 24hs: apertura de puertas, reparación y cambio de cerraduras, duplicado de llaves. Atención inmediata.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
