"use client";
import React, { useEffect } from "react";
import NavbarLink from "./NavbarLink";
import Hambugger from "./Hambugger";
import { navbarRoutes } from "../routes";
import { useGlobalHooks } from "@/hooks/globalHooks";
import Button from "../ui/Button";
import { usePathname } from "next/navigation";
import { useWallets } from "@privy-io/react-auth";

const ResponsiveNavBar = ({ styles }: { styles: any }) => {
  const { handleToggle, toggle } = useGlobalHooks();

  const { ready, wallets } = useWallets();

  useEffect(() => {
    console.log(ready);
    console.log(wallets);
  }, []);

  const path = usePathname();

  const isForStudent = path.includes("/for-students");

  return (
    <nav className="flex flex-1 justify-end">
      <section
        className={`${toggle["navbar"] ? styles.closeNav : styles.openNav} w-full`}
      >
        <article
          className={`flex w-full flex-wrap justify-between bg-white py-5 lg:bg-transparent`}
        >
          <ul
            className={`flex flex-1 flex-col items-start justify-start gap-4 lg:flex-row lg:items-center lg:justify-center`}
          >
            {navbarRoutes(isForStudent).map((route, index) => (
              <NavbarLink
                key={index}
                path={route.path}
                name={route.name}
                action={() => handleToggle("navbar")}
              />
            ))}
          </ul>

          <div className="w-full px-2 lg:w-fit lg:px-0">
            {isForStudent ? (
              <Button
                link
                href="/signup"
                className="pry-btn w-full"
                type="button"
              >
                Apply today
              </Button>
            ) : (
              <Button
                link
                href="/signup"
                className="pry-btn w-full"
                type="button"
              >
                Join studyfund now
              </Button>
            )}
          </div>
        </article>
      </section>
      <div className="w-3/12 md:w-1/12">
        <Hambugger
          styles={styles}
          action={() => handleToggle("navbar")}
          toggle={toggle["navbar"]}
        />
      </div>
    </nav>
  );
};

export default ResponsiveNavBar;
