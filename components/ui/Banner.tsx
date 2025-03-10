import { allImages } from "@/public/images/images";
import Image from "next/image";
import React from "react";
import Button from "./Button";

const Banner = () => {
  return (
    <section className="relative container my-10 flex h-[240px] items-center justify-center">
      <figure className="h-[230px]">
        <Image src={allImages.footerBanner} alt="" />
      </figure>

      <article
        data-aos="fade-down"
        className="absolute top-10 right-0 bottom-0 left-0 z-50 flex flex-col items-center gap-4 text-white"
      >
        <h4>No student left behind, education for all</h4>
        <Button className="pry-btn !text-primary !bg-white">
          See students that are funded
        </Button>
      </article>
    </section>
  );
};

export default Banner;
