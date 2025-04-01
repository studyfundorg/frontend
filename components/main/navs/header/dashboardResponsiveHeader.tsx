"use client";
import React, { useMemo } from "react";

import { useGlobalHooks } from "@/hooks/globalHooks";
import Button from "@/components/ui/Button";
import { HistoryIcon, LeaderIcon, ReferralIcon } from "@/public/svgs/svgs";
import NavbarLinks from "./navbarLinks";
import { FaPlus } from "react-icons/fa6";
import { useWallets } from "@privy-io/react-auth";
import { formatAddress } from "@/utils/helpers";
import { usePathname } from "next/navigation";

const DashboardResponsiveHeader = () => {
  const pathname = usePathname();

  const isStudentsPage = pathname.includes("/students");

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
  const { handleToggle } = useGlobalHooks();

  const { wallets } = useWallets();
  const wallet = useMemo(() => wallets[0], [wallets]);

  return (
    <nav className="flex flex-1 justify-end">
      <section className={`w-full`}>
        <article
          className={`flex w-full flex-wrap justify-end gap-4 py-5 lg:justify-between lg:bg-transparent`}
        >
          <ul
            className={`hidden flex-1 flex-col items-start justify-start gap-4 lg:flex lg:flex-row lg:items-center lg:justify-end`}
          >
            {dashboardRoutes.map(({ path, name, icon }, index) => (
              <NavbarLinks
                key={index}
                path={path}
                name={name}
                icon={icon}
                action={() => handleToggle("navbar")}
              />
            ))}
          </ul>

          <div className="flex w-fit justify-end gap-2 px-2 lg:px-0">
            <div className="w-fit">
              <Button
                link
                href="/donate"
                className="pry-btn gap-3 !px-4"
                type="button"
              >
                <FaPlus /> Donate
              </Button>
            </div>
            <div className="w-fit">
              <Button
                className="pry-btn !bg-Grey5 !border-Grey6 !border !px-2 !text-black"
                type="button"
              >
                {wallet?.address
                  ? formatAddress(wallet.address)
                  : "0x4.....987"}
              </Button>
            </div>
          </div>
        </article>
      </section>
    </nav>
  );
};

export default DashboardResponsiveHeader;
