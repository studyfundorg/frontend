import Referral from "@/components/main/referrals/referral";
import Banner from "@/components/ui/Banner";
import { USDTIcon } from "@/public/svgs/svgs";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "History",
};

export default function page() {
  const leaders = [
    { date: "Mon, 12th Feb 2025", time: "02:34 PM", value: 2250, reward: 50 },
    { date: "Tue, 13th Feb 2025", time: "03:45 PM", value: 2300, reward: 55 },
    { date: "Wed, 14th Feb 2025", time: "04:56 PM", value: 2350, reward: 60 },
    { date: "Thu, 15th Feb 2025", time: "05:07 PM", value: 2400, reward: 65 },
    { date: "Fri, 16th Feb 2025", time: "06:18 PM", value: 2450, reward: 70 },
    { date: "Sat, 17th Feb 2025", time: "07:29 PM", value: 2500, reward: 75 },
    { date: "Sun, 18th Feb 2025", time: "08:40 PM", value: 2550, reward: 80 },
  ];

  return (
    <main className="container pt-10">
      <article className="my-4">
        <h4>History</h4>
      </article>

      <section className="!mb-20 flex flex-wrap justify-between gap-4">
        <section className="card flex-1 px-3 py-5 lg:px-10">
          <article className="mt-10 mb-6 hidden justify-between md:flex">
            <div className="flex flex-1 gap-1">
              <p className="w-3/12 text-xs !font-semibold">Date</p>
              <p className="text-xs !font-semibold">Donation</p>
            </div>
            <div>
              <p className="text-xs !font-semibold">Reward</p>
            </div>
          </article>
          <ul className="divide-Line space-y-3 divide-y">
            {leaders.map((item, idx) => (
              <li key={idx} className="flex justify-between pb-3">
                <article className="flex flex-1 gap-1">
                  <div className="w-full md:w-3/12">
                    <p className="!text-sm">{item?.date}</p>
                    <small className="!text-xs text-[#8E9093]">
                      {item?.time}
                    </small>
                  </div>
                  <div className="hidden items-center gap-1 md:flex">
                    <h4 className="!text-lg">{item?.value}</h4>
                    <div className="flex items-center justify-center gap-1">
                      <USDTIcon width={14} height={14} />
                      <small className="!text-[10px]"> USDT</small>
                    </div>
                  </div>
                </article>

                <article className="flex flex-col gap-1">
                  <div className="flex items-center gap-1 md:hidden">
                    <small className="!text-xs text-[#6C6D6F]">Donated:</small>
                    <article className="flex items-center gap-1">
                      <h4 className="!text-lg">{item?.value}</h4>
                      <div className="flex items-center justify-center gap-1">
                        <USDTIcon width={14} height={14} />
                        <small className="!text-[10px]"> USDT</small>
                      </div>
                    </article>
                  </div>
                  <div className="flex items-center gap-1">
                    <small className="block !text-xs text-[#6C6D6F] md:hidden">
                      {" "}
                      Reward:
                    </small>
                    <article className="flex items-center gap-1">
                      <h4 className="!text-lg">{item?.reward}</h4>
                      <div className="flex items-center justify-center gap-1">
                        <USDTIcon width={14} height={14} />
                        <small className="!text-[10px]"> USDT</small>
                      </div>
                    </article>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </section>

        <aside className="w-full lg:w-5/12">
          <Referral />
        </aside>
      </section>

      <Banner />
    </main>
  );
}
