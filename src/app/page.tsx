import {
  HomePageBanner,
  AboutBanner,
  ContactBanner,
  LocationBanner,
} from "@/components/Banner";

import { ServicesBanner } from "@/components/ServicesBanner";

export default function Home() {
  return (
    <main
      className="flex flex-col 
    min-h-screen items-start justify-center w-[100%]"
    >
      <HomePageBanner></HomePageBanner>
      <ServicesBanner></ServicesBanner>
      <AboutBanner></AboutBanner>
      <LocationBanner></LocationBanner>
      <ContactBanner></ContactBanner>
    </main>
  );
}
