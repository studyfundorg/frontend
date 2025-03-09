"use client";

import { useGlobalHooks } from "@/hooks/globalHooks";
import React from "react";

const DonationCountDown = () => {
  const endDate = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000);

  const { timeLeft } = useGlobalHooks(endDate.toString());

  return (
    <section className="container mt-5 grid grid-cols-2 gap-3 gap-y-3 lg:grid-cols-4">
      <article>
        <div className="mb-4 flex items-center gap-2">
          <TimerCard time={timeLeft.days} />
          <h4 className="hidden !text-5xl !font-bold lg:block">:</h4>
        </div>
        <h4 className="text-center !text-2xl font-semibold">Days</h4>
      </article>
      <article>
        <div className="mb-4 flex items-center gap-2">
          <TimerCard time={timeLeft.hours} />

          <h4 className="hidden !text-5xl !font-bold lg:block">:</h4>
        </div>
        <h4 className="text-center !text-2xl font-semibold">Hours</h4>
      </article>
      <article>
        <div className="mb-4 flex items-center gap-2">
          <TimerCard time={timeLeft.mins} />

          <h4 className="hidden !text-5xl !font-bold lg:block">:</h4>
        </div>
        <h4 className="text-center !text-2xl font-semibold">Minutes</h4>
      </article>
      <article>
        <div className="mb-4">
          <TimerCard time={timeLeft.secs} />
        </div>

        <h4 className="text-center !text-2xl font-semibold">Seconds</h4>
      </article>
    </section>
  );
};

export default DonationCountDown;

export const TimerCard = ({ time }: { time: number }) => {
  return (
    <hgroup className="grid h-[158px] w-full place-items-center rounded-xl border border-[#DCDCDC] lg:h-[286px]">
      <h4
        className={`!text-[84px] font-bold lg:!text-[152px] ${time === 0 ? "text-red-500" : "!text-primary"} !font-semibold`}
      >
        {time || 0}
      </h4>
    </hgroup>
  );
};
