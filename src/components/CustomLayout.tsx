"use client";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsappPopup from "@/components/WhatsappPopUp";
import { SiteConfigProvider, useSiteConfig } from "@/context/SiteConfigContext";

function LayoutInner({ children }: { children: React.ReactNode }) {
  const { config } = useSiteConfig();
  return (
    <div>
      <Navigation />
      {children}
      <Footer />
      <WhatsappPopup phone={config.phone} />
    </div>
  );
}

export default function CustomLayout({ children }: { children: React.ReactNode }) {
  return (
    <SiteConfigProvider>
      <LayoutInner>{children}</LayoutInner>
    </SiteConfigProvider>
  );
}
