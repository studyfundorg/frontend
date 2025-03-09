import React from "react";

import styles from "./navBar.module.scss";
import BrandLogo from "@/components/BrandLogo";
import DashboardResponsiveHeader from "./dashboardResponsiveHeader";

const Dashboardheader = () => {
  return (
    <header
      className={`border-Grey4 sticky top-0 left-0 z-50 grid h-20 w-full place-items-center border-b bg-white`}
    >
      <section
        className={`${styles.headerNavContainer} container flex items-center justify-between gap-5`}
      >
        <BrandLogo path="/dashboard" />

        <DashboardResponsiveHeader styles={styles} />
      </section>
    </header>
  );
};

export default Dashboardheader;
