import Friends from "@/components/main/referrals/friends";
import Referral from "@/components/main/referrals/referral";
import Banner from "@/components/ui/Banner";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Referral",
};

export default function page() {
  return (
    <main className="container pt-10">
      <article className="my-4">
        <h4>Referral</h4>
      </article>

      <section className="flex flex-wrap justify-between gap-4">
        <article className="flex-1">
          <Referral />
        </article>

        <aside className="w-full lg:w-4/12">
          <Friends />
        </aside>
      </section>

      <section className="mt-20">
        <Banner />
      </section>
    </main>
  );
}
