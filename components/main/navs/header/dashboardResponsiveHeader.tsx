"use client";
import React, { useEffect } from "react";

import { useGlobalHooks } from "@/hooks/globalHooks";
import Button from "@/components/ui/Button";
import { HistoryIcon, LeaderIcon, ReferralIcon } from "@/public/svgs/svgs";
import Hambugger from "@/components/navbar/Hambugger";
import NavbarLinks from "./navbarLinks";
import { FaPlus } from "react-icons/fa6";
import { useWallets } from "@privy-io/react-auth";

export const dashboardRoutes = [
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
    path: "/history",
    icon: <HistoryIcon />,
  },
];

const DashboardResponsiveHeader = ({ styles }: { styles: any }) => {
  const { handleToggle, toggle } = useGlobalHooks();

  const { ready, wallets } = useWallets();

  useEffect(() => {
    console.log(ready);
    console.log(wallets);
  }, []);

  return (
    <nav className="flex flex-1 justify-end">
      <section
        className={`${toggle["navbar"] ? styles.closeNav : styles.openNav} w-full`}
      >
        <article
          className={`flex w-full flex-wrap justify-between gap-4 bg-white py-5 lg:bg-transparent`}
        >
          <ul
            className={`flex flex-1 flex-col items-start justify-start gap-4 lg:flex-row lg:items-center lg:justify-end`}
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

          <div className="flex w-full flex-wrap px-2 lg:w-fit lg:px-0">
            <div className="w-full lg:w-fit">
              <Button
                link
                href="/donate"
                className="pry-btn w-full gap-3"
                type="button"
              >
                <FaPlus /> Donate
              </Button>
            </div>
            <div className="w-full lg:w-fit">
              <Button
                className="pry-btn !bg-Grey5 !border-Grey6 w-full !border !text-black"
                type="button"
              >
                0x4.....987
              </Button>
            </div>
          </div>
        </article>
      </section>
      <div className="block w-3/12 md:w-1/12 lg:hidden">
        <Hambugger
          styles={styles}
          action={() => handleToggle("navbar")}
          toggle={toggle["navbar"]}
        />
      </div>
    </nav>
  );
};

export default DashboardResponsiveHeader;
