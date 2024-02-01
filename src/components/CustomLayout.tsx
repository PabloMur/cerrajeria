"use client";
import Navigation from "./Navigation";
import Footer from "./Footer";
import WhatsappPopaop from "@/components/WhatsappPopUp";
export default function CustomLayout({ children }: any) {
  return (
    <div>
      <Navigation></Navigation>
      {children}
      <WhatsappPopaop></WhatsappPopaop>
      <Footer></Footer>
    </div>
  );
}
