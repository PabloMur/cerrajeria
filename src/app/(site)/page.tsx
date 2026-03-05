import {
  HomePageBanner,
  AboutBanner,
  ContactBanner,
  LocationBanner,
} from "@/components/Banner";

import { ServicesBanner } from "@/components/ServicesBanner";
import { PaymentsBanner } from "@/components/PaymentBanner";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen items-start justify-center w-full">
      <HomePageBanner />
      <ServicesBanner />
      <PaymentsBanner />
      <AboutBanner />
      <LocationBanner />
      <ContactBanner />
    </main>
  );
}
