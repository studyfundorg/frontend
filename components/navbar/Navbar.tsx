import React from "react";
import BrandLogo from "../BrandLogo";
import styles from "./navBar.module.scss";
import ResponsiveNavBar from "./ResponsiveNavBar";

const Navbar = () => {
  return (
    <header
      className={`sticky top-0 left-0 z-50 grid h-20 w-full place-items-center bg-white`}
    >
      <section
        className={`${styles.navContainer} container flex items-center justify-between gap-5`}
      >
        <BrandLogo />

        <ResponsiveNavBar styles={styles} />
      </section>
    </header>
  );
};

export default Navbar;
