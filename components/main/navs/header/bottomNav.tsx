"use client";
import React from "react";

import { HistoryIcon, LeaderIcon, ReferralIcon } from "@/public/svgs/svgs";
import Link from "next/link";
import { usePathname } from "next/navigation";

const BottomNav = () => {
  const pathName = usePathname();

  const isStudentsPage = pathName.includes("/students");

  const dashboardRoutes = [
    {
      name: "Referral",
      path: "/referral",
      icon: <ReferralIcon />,
    },
    {
      name: "Leaderboard",
      path: "/leaderboard",
      icon: <LeaderIcon />,
    },
    {
      name: "History",
      path: isStudentsPage ? "/students/history" : "/history",
      icon: <HistoryIcon />,
    },
  ];

  return (
    <nav className="shadow-5xl fixed bottom-0 z-50 flex w-full justify-end bg-white p-6 backdrop-blur-2xl lg:hidden">
      <ul
        className={`container flex items-start justify-between gap-4 lg:items-center lg:justify-end`}
      >
        {dashboardRoutes.map(({ path, name, icon }, idx) => (
          <Link
            key={idx}
            href={path}
            className={` ${pathName === path ? "text-primary" : "text-[#9FA1A5]"} flex flex-col items-center gap-3 text-center !text-xs`}
          >
            {icon}
            {name}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default BottomNav;
