import Dashboardheader from "@/components/main/navs/header/dashboardHeader";
import DashboardFooter from "@/components/main/navs/dashboardFooter";

export default function PageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <Dashboardheader />
      {children}
      <DashboardFooter />
    </main>
  );
}
