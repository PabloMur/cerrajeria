import CustomLayout from "@/components/CustomLayout";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return <CustomLayout>{children}</CustomLayout>;
}
