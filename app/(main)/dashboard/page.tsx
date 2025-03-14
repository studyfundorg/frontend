import RenderStudents from "@/components/main/dashboard/renderStudents";
import PageTabs from "@/components/ui/PageTabs";
import { fundedUser, participantUser } from "@/utils/constant";
import { Metadata } from "next";
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
      <section className="flex h-[240px] items-center justify-center bg-[url('/images/newBanner.png')] bg-cover bg-left-top bg-no-repeat lg:h-[200px] lg:bg-[position:19px]">
        <article
          data-aos="fade-in"
          className="container flex flex-col items-center justify-center gap-4 text-center text-white"
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
