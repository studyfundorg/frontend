"use client";
import React from "react";

import {
  HistoryIcon,
  HomeIcon,
  LeaderIcon,
  ReferralIcon,
} from "@/public/svgs/svgs";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const dashboardRoutes = [
  {
    name: "Home",
    path: "/dashboard",
    icon: <HomeIcon />,
  },
  {
    name: "Referral",
    path: "/referral",
    icon: <ReferralIcon width={18} height={18} />,
  },
  {
    name: "Leaderboard",
    path: "/leaderboard",
    icon: <LeaderIcon width={18} height={18} />,
  },
  {
    name: "History",
    path: "/history",
    icon: <HistoryIcon width={18} height={18} />,
  },
];

const BottomNav = () => {
  const pathName = usePathname();

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
