import RaffleLeaders from "@/components/main/donate/raffleLeaders";
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
  const leaders = [
    { rank: "silverfrog195", value: 2250 },
    { rank: "silverfrog195", value: 1250 },
    { rank: "silverfrog195", value: 750 },
    { rank: "silverfrog195", value: 500 },
    { rank: "silverfrog195", value: 250 },
    { rank: "silverfrog195", value: 250 },
  ];

  return (
    <main className="container pt-10">
      <article className="my-4">
        <h4>Leaderboard</h4>
      </article>

      <section className="flex flex-wrap justify-between gap-4">
        <section className="card flex-1 p-5">
          <ul className="grid grid-cols-1 justify-center gap-8 lg:grid-cols-3">
            <li className="mt-20 flex flex-col items-center text-center">
              <figure className="w-9/12">
                <Image src={allImages.bronze} alt="" />
              </figure>
              <article>
                <p>whiteswan</p>
                <h4 className="!font-bold">253</h4>
                <div className="flex items-center justify-center gap-1">
                  <USDTIcon width={14} height={14} />
                  <small className="!text-[10px]"> USDT</small>
                </div>
              </article>
            </li>
            <li className="flex flex-col items-center text-center">
              <figure>
                <Image src={allImages.gold} alt="" />
              </figure>
              <article>
                <p>tinyleopar</p>
                <h4 className="!font-bold">10,000</h4>
                <div className="flex items-center justify-center gap-1">
                  <USDTIcon width={14} height={14} />
                  <small className="!text-[10px]"> USDT</small>
                </div>
              </article>
            </li>
            <li className="mt-20 flex flex-col items-center text-center">
              <figure className="w-9/12">
                <Image src={allImages.silver} alt="" />
              </figure>{" "}
              <article>
                <p>crazyfish</p>
                <h4 className="!font-bold">420</h4>
                <div className="flex items-center justify-center gap-1">
                  <USDTIcon width={14} height={14} />
                  <small className="!text-[10px]"> USDT</small>
                </div>
              </article>
            </li>
          </ul>

          <article className="mt-10 mb-6 flex justify-between">
            <div className="flex gap-5">
              <p className="text-xs !font-semibold">Rank</p>
              <p className="text-xs !font-semibold">Players</p>
            </div>
            <div>
              <p className="text-xs !font-semibold">Amount</p>
            </div>
          </article>
          <ul className="divide-Line space-y-3 divide-y">
            {leaders.map((item, idx) => (
              <li key={idx} className="pb-3">
                <RaffleLeaders item={item} index={idx + 4} />
              </li>
            ))}
          </ul>
        </section>

        <aside className="w-full lg:w-5/12">
          <Referral />
        </aside>
      </section>
    </main>
  );
}
