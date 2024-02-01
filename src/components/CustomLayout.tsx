"use client";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
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
