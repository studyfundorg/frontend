import StartApplication from "@/components/main/students/StartApplication";
import { allImages } from "@/public/images/images";
import { Metadata } from "next";
import Image from "next/image";
import React from "react";

export const metadata: Metadata = {
  title: "Start Application",
};

export default function page() {
  return (
    <main className="min-h-screen w-full bg-white">
      <figure className="fixed hidden w-full max-w-md lg:block">
        <Image src={allImages.students} alt="" />
      </figure>
      <section className="flex justify-end p-5">
        <StartApplication />
      </section>
    </main>
  );
}
