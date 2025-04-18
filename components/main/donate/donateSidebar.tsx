"use client";
import React, { useMemo, useState } from "react";
import WinnerCountDown from "./winnerCountDown";
import Warning from "../warning";
import DonateForm from "./donateForm";
import RaffleLeaderboard from "./raffleLeaderboard";
import { useBlockchain } from "@/context/BlockchainProvider";
const leaders = [
  { rank: "First Place", percentage: 45, value: 2250 },
  { rank: "Second Place", percentage: 25, value: 1250 },
  { rank: "Third Place", percentage: 15, value: 750 },
  { rank: "Fourth Place", percentage: 10, value: 500 },
  { rank: "Fifth Place", percentage: 5, value: 250 },
];

const DonateSidebar = () => {
  const [isChecked, setIsChecked] = useState(false);
  const { currentRaffle } = useBlockchain();

  const prizePool = useMemo(() => {
    return Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
    }).format(Number(currentRaffle?.prizePool ?? 0) / 1e6);
  }, [currentRaffle]);

  const _leaders = useMemo(() => {
    return leaders.map((item) => ({
      ...item,
      value: Number(currentRaffle?.prizePool ?? 0) / 1e6 * item.percentage / 100,
    }));
  }, [currentRaffle]);

  return (
    <aside className="h-full w-full space-y-5 lg:w-5/12">
      {!isChecked && (
        <section className="bg-alternative flex justify-between gap-4 rounded-2xl bg-[url('/images/splashBg.png')] bg-contain bg-left bg-no-repeat p-5">
          <article className="text-white">
            <h5 className="text-sm font-semibold">Current Prize Pool</h5>
            <h3>{prizePool}</h3>
          </article>

          <article>
            <h5 className="text-sm font-semibold text-white">
              We&apos;ll select winners in
            </h5>
            <WinnerCountDown />
          </article>
        </section>
      )}

      {!isChecked && (
        <Warning title="Price pool will grow once we hit $7,000 in raffle donation" />
      )}

      <DonateForm isChecked={isChecked} setIsChecked={setIsChecked} />

      {!isChecked && (
        <section className="card p-5">
          <h4>Raffle Prize Distribution</h4>

          <Warning
            title="Individual prizes will grow once we hit $7,000 in raffle donation"
            className="mt-3 mb-6"
          />

          <ul className="divide-Line space-y-3 divide-y">
            {_leaders.map((item, idx) => (
              <li key={idx} className="pb-3">
                <RaffleLeaderboard item={item} index={idx} />
              </li>
            ))}
          </ul>
        </section>
      )}
    </aside>
  );
};

export default DonateSidebar;
