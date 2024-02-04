"use client";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsappPopaop from "@/components/WhatsappPopUp";
export default function CustomLayout({ children }: any) {
  const phone = "5492234660539";
  return (
    <div>
      <Navigation></Navigation>
      {children}
      <Footer></Footer>
    </div>
  );
}

//<WhatsappPopaop phone={phone}></WhatsappPopaop>
