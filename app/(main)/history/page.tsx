import HistoryList from "@/components/main/history/HistoryList";
import Referral from "@/components/main/referrals/referral";
import Banner from "@/components/ui/Banner";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "History",
};

export default function page() {
  // const leaders = [
  //   { date: "Mon, 12th Feb 2025", time: "02:34 PM", value: 2250, reward: 50 },
  //   { date: "Tue, 13th Feb 2025", time: "03:45 PM", value: 2300, reward: 55 },
  //   { date: "Wed, 14th Feb 2025", time: "04:56 PM", value: 2350, reward: 60 },
  //   { date: "Thu, 15th Feb 2025", time: "05:07 PM", value: 2400, reward: 65 },
  //   { date: "Fri, 16th Feb 2025", time: "06:18 PM", value: 2450, reward: 70 },
  //   { date: "Sat, 17th Feb 2025", time: "07:29 PM", value: 2500, reward: 75 },
  //   { date: "Sun, 18th Feb 2025", time: "08:40 PM", value: 2550, reward: 80 },
  // ];

  return (
    <main className="container pt-10">
      <article className="my-4">
        <h4>History</h4>
      </article>

      <section className="!mb-20 flex flex-wrap justify-between gap-4">
        <HistoryList />

        <aside className="w-full lg:w-5/12">
          <Referral />
        </aside>
      </section>

      <Banner />
    </main>
  );
}
