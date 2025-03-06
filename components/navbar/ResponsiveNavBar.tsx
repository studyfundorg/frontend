"use client";
import React from "react";
import NavbarLink from "./NavbarLink";
import Hambugger from "./Hambugger";
import { navbarRoutes } from "../routes";
import { useGlobalHooks } from "@/hooks/globalHooks";
import Button from "../ui/Button";

const ResponsiveNavBar = ({ styles }: { styles: any }) => {
  const { handleToggle, toggle } = useGlobalHooks();

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
            {navbarRoutes.map((route, index) => (
              <NavbarLink
                key={index}
                path={route.path}
                name={route.name}
                action={() => handleToggle("navbar")}
              />
            ))}
          </ul>

          <div className="w-full px-2 lg:w-fit lg:px-0">
            <Button className="pry-btn w-full" type="button">
              Join studyfund now
            </Button>
          </div>
        </article>
      </section>
      <Hambugger
        styles={styles}
        action={() => handleToggle("navbar")}
        toggle={toggle["navbar"]}
      />
    </nav>
  );
};

export default ResponsiveNavBar;
