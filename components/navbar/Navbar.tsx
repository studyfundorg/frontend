"use client";
import React, { useState, useEffect } from "react";
import BrandLogo from "../BrandLogo";
import styles from "./navBar.module.scss";
import ResponsiveNavBar from "./ResponsiveNavBar";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 z-50 grid h-20 w-full place-items-center ${
        isScrolled ? "bg-white" : "bg-transparent"
      }`}
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
