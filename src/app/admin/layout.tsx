export const metadata = {
  title: "Admin — Cerrajería La Torre",
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return <div className="bg-gray-100 min-h-screen">{children}</div>;
}
