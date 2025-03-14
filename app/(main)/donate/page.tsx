import DonateSidebar from "@/components/main/donate/donateSidebar";
import { allImages } from "@/public/images/images";
import { Metadata } from "next";
import Image from "next/image";
import React from "react";

export const metadata: Metadata = {
  title: "Donate",
};

export default function Page() {
  return (
    <main className="relative container py-5">
      <article className="fixed hidden w-[45%] overflow-hidden lg:block">
        <article
          data-aos="fade-right"
          className="card mb-5 flex-1 !space-y-4 !rounded-2xl p-5"
        >
          <h4 className="text-center !font-bold">
            Education Shouldn&apos;t Be a Luxury
          </h4>
          <p className="!text-sm">
            If you&apos;ve ever faced a moment where money stood between you and
            your dreams, you know the struggle. Right now, thousands of bright
            students are at risk of dropping out, not because they lack talent,
            but because they lack funds.
            <br /> <br />
            <b> Imagine if just $10 could change that.</b>
            <br /> <br />
            At <b>StudyFund, </b> we believe in a world where financial hardship
            never stands in the way of education. With your help, we provide
            scholarships and bursaries to students in need. powered by
            transparency, fairness, and the power of community giving.
            <br /> <br />
            Most people scroll past.{" "}
            <b>
              {" "}
              But what if you&apos;re the reason a student stays in school?
            </b>
            <br /> <br />
            Just 2% of people donate. Be the 2%.{" "}
            <b> Give today. Change a life.</b>
          </p>
        </article>

        <figure data-aos="fade-left">
          <Image src={allImages.donateHeroImg} alt="" />
        </figure>
      </article>
      <section className="flex flex-col justify-end gap-5 overflow-x-hidden lg:flex-row">
        <article className="block w-full lg:hidden">
          <article
            data-aos="fade-right"
            className="card mb-5 flex-1 !space-y-4 !rounded-2xl p-5"
          >
            <h4 className="text-center !font-bold">
              Education Shouldn&apos;t Be a Luxury
            </h4>
            <p className="!text-sm">
              If you&apos;ve ever faced a moment where money stood between you
              and your dreams, you know the struggle. Right now, thousands of
              bright students are at risk of dropping out, not because they lack
              talent, but because they lack funds.
              <br /> <br />
              <b> Imagine if just $10 could change that.</b>
              <br /> <br />
              At <b>StudyFund, </b> we believe in a world where financial
              hardship never stands in the way of education. With your help, we
              provide scholarships and bursaries to students in need. powered by
              transparency, fairness, and the power of community giving.
              <br /> <br />
              Most people scroll past.{" "}
              <b>
                {" "}
                But what if you&apos;re the reason a student stays in school?
              </b>
              <br /> <br />
              Just 2% of people donate. Be the 2%.{" "}
              <b> Give today. Change a life.</b>
            </p>
          </article>

          <figure data-aos="fade-left">
            <Image src={allImages.donateHeroImg} alt="" />
          </figure>
        </article>
        <DonateSidebar />
      </section>
    </main>
  );
}
