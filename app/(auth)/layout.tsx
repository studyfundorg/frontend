import DashboardFooter from "@/components/main/navs/dashboardFooter";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      {children}
      <DashboardFooter />
    </main>
  );
}
