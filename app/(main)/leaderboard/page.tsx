import RaffleLeaders from "@/components/main/donate/raffleLeaders";
import Leaderboard from "@/components/main/leaderboard/Leaderboard";
import Referral from "@/components/main/referrals/referral";
import { allImages } from "@/public/images/images";
import { USDTIcon } from "@/public/svgs/svgs";
import { Metadata } from "next";
import Image from "next/image";
import React from "react";

export const metadata: Metadata = {
  title: "Leaderboards",
};

export default function page() {
  return (
    <main className="container pt-10">
      <article className="my-4">
        <h4>Leaderboard</h4>
      </article>

      <section className="flex flex-wrap justify-between gap-4">
        <Leaderboard />

        <aside className="w-full lg:w-5/12">
          <Referral />
        </aside>
      </section>
    </main>
  );
}
