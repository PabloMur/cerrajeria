import {
  HomePageBanner,
  ServicesBanner,
  AboutBanner,
  ContactBanner,
  LocationBanner,
} from "@/components/Banner";

export default function Home() {
  return (
    <main
      className="flex flex-col 
    min-h-screen items-start justify-between w-full"
    >
      <HomePageBanner></HomePageBanner>
      <ServicesBanner></ServicesBanner>
      <AboutBanner></AboutBanner>
      <LocationBanner></LocationBanner>
      <ContactBanner></ContactBanner>
    </main>
  );
}
