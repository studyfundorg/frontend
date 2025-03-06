"use client";
import React from "react";
import BrandLogo from "../BrandLogo";
import { navbarRoutes, tersmRoutes } from "../routes";
import Link from "next/link";
import Button from "../ui/Button";
import { usePathname } from "next/navigation";

const Footer = () => {
  const path = usePathname();

  const isForStudent = path.includes("/for-students");
  return (
    <footer className="bg-[#021126] py-10">
      <section className="container flex flex-wrap justify-between gap-y-6">
        <article className="space-y-6">
          <ul className="w-full max-w-[600px] space-y-4">
            <li className="flex">
              <BrandLogo />
            </li>
          </ul>

          <ul className="flex flex-wrap gap-16">
            {navbarRoutes(isForStudent).map(({ name, path }) => (
              <li key={name}>
                <Link href={path} className="text-base font-medium !text-white">
                  {" "}
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </article>
        <form className="flex w-full flex-wrap items-end gap-3 lg:w-4/12">
          <label className="w-full text-sm font-medium text-white">
            Stay up to date
          </label>
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 rounded-[64px] bg-white px-5 py-3"
          />

          <Button className="pry-btn w-full lg:w-fit">Subscribe</Button>
        </form>
      </section>
      <section className="container mt-10 flex flex-wrap justify-between gap-6 border-t border-[#414141] pt-6">
        <small className="text-sm font-medium text-[#98A2B3]">
          Copyright 2025 © Textworld, All Rights Reserved.
        </small>
        <ul className="flex flex-wrap gap-6">
          {tersmRoutes.map(({ name, path }) => (
            <li key={name}>
              <Link
                href={path}
                className="text-base font-normal !text-[#98A2B3]"
              >
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

export default Footer;
