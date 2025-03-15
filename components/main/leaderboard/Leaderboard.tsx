"use client";
import { allImages } from "@/public/images/images";
import { USDTIcon } from "@/public/svgs/svgs";
import Image from "next/image";
import React from "react";
import RaffleLeaders from "../donate/raffleLeaders";
import { useCollection } from "react-firebase-hooks/firestore";
import { collection } from "firebase/firestore";
import { db } from "@/firebase";

const leaders = [
  { rank: "silverfrog195", value: 2250 },
  { rank: "silverfrog195", value: 1250 },
  { rank: "silverfrog195", value: 750 },
  { rank: "silverfrog195", value: 500 },
  { rank: "silverfrog195", value: 250 },
  { rank: "silverfrog195", value: 250 },
];

const Leaderboard = () => {
  const [value, loading, error] = useCollection(
    collection(db, "/donationLeaderboard"),
  );

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  console.log(value);

  return (
    <section className="card flex-1 p-2 md:p-5">
      <ul className="grid grid-cols-3 justify-center gap-4">
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
  );
};

export default Leaderboard;
