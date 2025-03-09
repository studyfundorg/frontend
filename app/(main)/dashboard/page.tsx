import RenderStudents from "@/components/main/dashboard/renderStudents";
import PageTabs from "@/components/ui/PageTabs";
import { allImages } from "@/public/images/images";
import { fundedUser, participantUser } from "@/utils/constant";
import { Metadata } from "next";
import Image from "next/image";
import React from "react";

export const metadata: Metadata = {
  title: "Dashboard",
};

export default async function page({
  searchParams,
}: {
  searchParams: Promise<{ tab: string }>;
}) {
  const params = await searchParams;

  const tabsData = [
    {
      id: "funded",
      title: "Funded",
      comp: <RenderStudents data={fundedUser} />,
      count: 100,
    },
    {
      id: "particpants",
      title: "Particpants",
      comp: <RenderStudents data={participantUser} />,
      count: 150,
    },
  ];

  return (
    <main className="">
      <section className="relative flex items-center justify-center">
        <figure className="h-[230px]">
          <Image src={allImages.globalBanner} alt="" />
        </figure>

        <article
          data-aos="fade-in"
          className="absolute top-24 right-0 bottom-0 left-0 z-50 flex flex-col items-center gap-4 text-white"
        >
          <h4>No student left behind, education for all</h4>
        </article>
      </section>

      <section>
        <PageTabs
          tabDatas={tabsData}
          defaultTab="funded"
          path="/dashboard"
          searchParams={params}
        />
      </section>
    </main>
  );
}
