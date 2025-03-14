import React from "react";
import Button from "./Button";

const Banner = () => {
  return (
    <section className="my-5 flex h-[200px] flex-col items-center justify-center overflow-hidden rounded-2xl bg-[url('/images/newBanner.png')] bg-cover bg-left-top bg-no-repeat lg:my-10 lg:h-[260px]">
      <article
        data-aos="fade-down"
        className="flex flex-col items-center gap-4 text-center text-white"
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
