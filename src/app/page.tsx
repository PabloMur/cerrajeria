import {
  HomePageBanner,
  ServicesBanner,
  AboutBanner,
  ContactBanner,
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
      <ContactBanner></ContactBanner>
    </main>
  );
}
