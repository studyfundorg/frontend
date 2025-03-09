import React from "react";
import { useEffect, useState } from "react";

export const useGlobalHooks = (endDate?: string) => {
  const [loading, setLoading] = useState<{ [key: string | number]: boolean }>(
    {},
  );
  const [toggle, setToggle] = useState<{ [key: string]: boolean }>({});

  const handleToggle = (id: string) => {
    setToggle((prev) => ({ [id]: !prev[id] }));
  };

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

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => ({
        ...prev,
        ...getTimeLeft(String(endDate)),
      }));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return {
    loading,
    setLoading,
    handleToggle,
    toggle,
    setToggle,
    timeLeft,
  };
};
