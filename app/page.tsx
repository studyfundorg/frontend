import Image from "next/image";
import { allImages } from "@/public/images/images";
import Button from "@/components/ui/Button";
import React from "react";
import { faqData } from "@/utils/constant";
import Accordion from "@/components/main/faqElements/Accordion";
import DonationCountDown from "@/components/main/DonationCountDown";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <section className="homeHero flex min-h-screen flex-col justify-between gap-y-7 overflow-hidden pt-20">
        <article
          data-aos="fade-down"
          data-aos-duration="1000"
          className="mx-auto flex w-11/12 max-w-[744px] flex-col items-center gap-8 text-center"
        >
          <h1>
            Win Big While Changing Lives. Your Donation Can Turn into Huge
            Rewards!
          </h1>

          <p className="text-lg text-[#545659]">
            Every contribution fuels a dream. Every donation creates a scholar.
            With StudyFund, your generosity doesn&apos;t just fund education, it
            gives you the chance to win big! Donate, support students, and enter
            our raffle for a massive cash prize!
          </p>
        </article>

        <article
          data-aos="fade-down"
          data-aos-duration="1000"
          className="mx-auto mb-7 flex w-11/12 max-w-[400px] flex-col items-center justify-between"
        >
          <Button className="pry-btn w-fit">Join the waitlist</Button>
        </article>

        <article className="relative ml-2 grid grid-cols-2 gap-2 lg:hidden">
          <figure
            data-aos="zoom-out-down"
            data-aos-duration="1300"
            className="overflow-hidden rounded-md"
          >
            <Image src={allImages.card} alt="" />
          </figure>
          <figure
            data-aos="zoom-out-down"
            data-aos-duration="1300"
            className="overflow-hidden rounded-md"
          >
            <Image src={allImages.card3} alt="" />
          </figure>
        </article>
        <article className="relative ml-20 hidden grid-cols-4 gap-8 lg:grid">
          <figure
            // data-aos="zoom-out-down"
            // data-aos-duration="1300"
            className="!mt-20 overflow-hidden rounded-2xl"
          >
            <Image src={allImages.card} alt="" />
          </figure>
          <figure
            data-aos="zoom-out-down"
            data-aos-duration="1300"
            className="overflow-hidden rounded-2xl"
          >
            <Image src={allImages.card3} alt="" />
          </figure>
          <figure
            data-aos="zoom-out-down"
            data-aos-duration="1300"
            className="!mt-20 overflow-hidden rounded-2xl"
          >
            <Image src={allImages.card2} alt="" />
          </figure>
          <figure
            data-aos="zoom-out-down"
            data-aos-duration="1300"
            className="absolute -right-24 h-[330px] w-[358px] overflow-hidden rounded-2xl"
          >
            <Image
              src={allImages.card4}
              alt=""
              className="!h-full !w-full object-cover"
            />
          </figure>
        </article>
      </section>

      <section className="space-y-7 py-28">
        <article
          data-aos="fade-down"
          data-aos-duration="1000"
          className="mx-auto flex w-11/12 max-w-[700px] flex-col items-center gap-4 text-center"
        >
          <h3 className="text-3xl lg:text-5xl">Countdown to Donation Launch</h3>

          <p className="">
            The wait is almost over! Be ready to donate and start winning when
            the funding round begins.
          </p>
          <p className="!text-2xl !font-bold">Donation begins in</p>
        </article>

        <DonationCountDown />

        <article
          data-aos="fade-down"
          data-aos-duration="1000"
          className="mx-auto mt-8 flex w-11/12 max-w-[400px] flex-col items-center justify-between"
        >
          <Button className="pry-btn w-fit">Make an Impact. Join now</Button>
        </article>
      </section>

      <section id="faqs" className="my-[60px] py-10">
        <article
          data-aos="fade-down"
          data-aos-duration="1000"
          className="mx-auto flex w-11/12 flex-col items-center gap-4 text-center lg:w-9/12"
        >
          <button className="small-btn">FAQ</button>
          <h3>Frequently Asked Questions</h3>

          <p className="mx-auto max-w-[800px] text-lg lg:text-xl">
            Here you can find the most common questions.
          </p>
        </article>

        <article className="mx-auto mt-16 w-full lg:w-7/12">
          <Accordion data={faqData} />
        </article>
      </section>
    </main>
  );
}
