import Banner from "@/components/ui/Banner";
import Button from "@/components/ui/Button";
import { allImages } from "@/public/images/images";
import { ThankYouIcon } from "@/public/svgs/svgs";
import { Metadata } from "next";
import Image from "next/image";
import React from "react";

export const metadata: Metadata = {
  title: "Thank you",
};

export default function page() {
  return (
    <main className="relative pt-40">
      <figure className="absolute top-0 -z-1 h-56">
        <Image src={allImages.thankyouBanner} alt="" />
      </figure>

      <section className="card container flex !max-w-3xl flex-col items-center space-y-5 rounded-2xl bg-white py-10">
        <div className="mx-auto flex w-9/12 flex-col items-center justify-center">
          <ThankYouIcon />
        </div>
        <article className="bg-alternative w-full py-3 text-center text-white">
          <h4 className="!text-xl"> You Just changed a Life.</h4>
        </article>

        <article className="mx-auto max-w-xl">
          <p className="text-center">
            Your generosity means more than words can express.{" "}
            <b>Because of you, a student gets to stay in school.</b> Because of
            you, someone&apos;s dream is still alive.
            <br /> <br />
            Every contribution to StudyFund isn&apos;t just a donation,{" "}
            <b>
              {" "}
              it&apos;s a promise of hope, opportunity, and a brighter future
            </b>{" "}
            for students who refuse to give up, even in the face of hardship.
            <br /> <br />
            You are part of something bigger.{" "}
            <b>
              {" "}
              You are the reason a student wakes up tomorrow with a chance to
              learn, to grow, and to build a future.
            </b>
            <br /> <br />
            From the bottom of our hearts, <b> thank you ❤️</b>
          </p>
        </article>
      </section>

      <section className="mt-7 mb-20 flex flex-wrap justify-center gap-3">
        <Button className="outline-btn !text-primary w-full lg:w-fit">
          Go to Donation Leaderboard
        </Button>
        <Button className="pry-btn w-full lg:w-fit">
          Refer for a free raffle slot
        </Button>
      </section>

      <Banner />
    </main>
  );
}
