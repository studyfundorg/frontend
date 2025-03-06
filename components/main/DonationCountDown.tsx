"use client";

import React, { useEffect, useState } from "react";

const DonationCountDown = () => {
  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    mins: number;
    secs: number;
  }>({
    days: 30,
    hours: 0,
    mins: 0,
    secs: 0,
  });

  const getTimeLeft = (endDateVal: string) => {
    const endDate = new Date(endDateVal).getTime();
    const now = new Date().getTime();
    const timeLeft = endDate - now;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
    );
    const mins = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((timeLeft % (1000 * 60)) / 1000);

    return { days, hours, mins, secs };
  };

  const endData = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => ({
        ...prev,
        ...getTimeLeft(String(endData)),
      }));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

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
