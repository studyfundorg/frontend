"use client";

import { useBlockchain } from "@/context/BlockchainProvider";
import React, { useEffect, useMemo, useState } from "react";

const WinnerCountDown = () => {
  const { currentRaffle } = useBlockchain();
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);
  
  const timeLeft = useMemo(() => {
    const endDate = new Date(Number(currentRaffle?.endTime) * 1000);
    const diff = endDate.getTime() - currentTime.getTime();
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((diff % (1000 * 60)) / 1000);
    return {
      days,
      hours,
      mins,
      secs,
    };
  }, [currentRaffle, currentTime]);
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
        {String(time || 0).padStart(2, '0')}
      </h4>
    </hgroup>
  );
};
