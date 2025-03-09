import DonateSidebar from "@/components/main/donate/donateSidebar";
import { allImages } from "@/public/images/images";
import { Metadata } from "next";
import Image from "next/image";
import React from "react";

export const metadata: Metadata = {
  title: "Thank you",
};

export default function page() {
  return (
    <main className="container py-5">
      <h2>Thank you</h2>
    </main>
  );
}
