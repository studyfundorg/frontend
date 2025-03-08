"use client";
import { useEffect, useMemo } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import { usePathname } from "next/navigation";

export default function AOSAnimation({
  children,
}: {
  children: React.ReactNode;
}) {
  const path = usePathname();
  useEffect(() => {
    AOS.init();
  }, [AOS]);

  const pathNames = ["/for-students"];
  const normalizedPath = path.replace(/\/$/, "").toLowerCase();
  const showNav = useMemo(
    () => pathNames.includes(normalizedPath) || path === "/",
    [normalizedPath],
  );

  return (
    <>
      {showNav && <Navbar />}
      {children}
      {showNav && <Footer />}
    </>
  );
}
