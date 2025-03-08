import { tersmRoutes } from "@/components/routes";
import Link from "next/link";
import React from "react";

const DashboardFooter = () => {
  return (
    <footer className="py-10">
      <section className="container mt-10 flex flex-wrap justify-between gap-6">
        <small className="!text-Grey7 text-base font-normal">
          Copyright 2025 © Textworld, All Rights Reserved.
        </small>
        <ul className="flex flex-wrap gap-6">
          {tersmRoutes.map(({ name, path }) => (
            <li key={name}>
              <Link href={path} className="!text-Grey7 text-base !font-normal">
                {" "}
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </footer>
  );
};

export default DashboardFooter;
