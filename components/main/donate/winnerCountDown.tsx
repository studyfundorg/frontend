"use client";

import { useGlobalHooks } from "@/hooks/globalHooks";
import React from "react";

const WinnerCountDown = () => {
  const endDate = new Date(Date.now() + 6 * 24 * 60 * 60 * 1000);

  const { timeLeft } = useGlobalHooks(endDate.toString());

  return (
    <section className="flex flex-wrap justify-between gap-4">
      <article className="flex flex-col items-center">
        <div className="flex items-center gap-2">
          <TimerCard time={timeLeft.days} />
          <h4 className="hidden !font-bold text-white lg:block">:</h4>
        </div>
        <small className="text-center !text-xs font-normal text-white">
          days
        </small>
      </article>
      <article className="flex flex-col items-center">
        <div className="flex items-center gap-2">
          <TimerCard time={timeLeft.hours} />

          <h4 className="hidden !font-bold text-white lg:block">:</h4>
        </div>
        <small className="text-center !text-xs font-normal text-white">
          hrs
        </small>
      </article>
      <article className="flex flex-col items-center">
        <div className="flex items-center gap-2">
          <TimerCard time={timeLeft.mins} />

          <h4 className="hidden !font-bold text-white lg:block">:</h4>
        </div>
        <small className="text-center !text-xs font-normal text-white">
          mins
        </small>
      </article>
      <article className="flex flex-col items-center">
        <div className="">
          <TimerCard time={timeLeft.secs} />
        </div>
        <small className="text-center !text-xs font-normal text-white">
          secs
        </small>
      </article>
    </section>
  );
};

export default WinnerCountDown;

export const TimerCard = ({ time }: { time: number }) => {
  return (
    <hgroup className="">
      <h4
        className={` ${time === 0 ? "text-red-500" : "!text-white"} !font-semibold`}
      >
        {time || 0}
      </h4>
    </hgroup>
  );
};
