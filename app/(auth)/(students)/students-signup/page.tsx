import BrandLogo from "@/components/BrandLogo";
import LoginWithOcid from "@/components/main/auth/loginWithOcid";
import { allImages } from "@/public/images/images";
import Image from "next/image";

import React from "react";

export default function page() {
  return (
    <main className="relative grid min-h-screen place-items-center">
      <figure className="absolute top-3 left-5 h-[108px] w-[86px] animate-pulse lg:top-20 lg:left-24 lg:h-[190px] lg:w-[243px]">
        <Image src={allImages.clock} alt="" />
      </figure>
      <figure className="absolute top-2 right-2 h-[108px] w-[102px] animate-bounce lg:right-[200px] lg:h-[190px] lg:w-[243px]">
        <Image src={allImages.pen} alt="" />
      </figure>
      <figure className="absolute bottom-1 left-1 h-[103px] w-[131px] animate-bounce lg:bottom-10 lg:left-10 lg:h-[190px] lg:w-[243px]">
        <Image src={allImages.cap} alt="" />
      </figure>
      <figure className="absolute right-1 bottom-1 h-[91px] w-[130px] animate-pulse lg:right-16 lg:bottom-40 lg:h-[190px] lg:w-[243px]">
        <Image src={allImages.book} alt="" />
      </figure>

      <section className="flex max-w-lg flex-col items-center justify-center px-2 text-center">
        <div className="!w-[141px]">
          <BrandLogo />
        </div>
        <article className="">
          <h1>Every student deserves a future</h1>

          <LoginWithOcid />

          <p className="text-Grey3 !mx-auto max-w-sm">
            By using StudyFund, you agree to our{" "}
            <b className="text-black">Terms of Service</b> and{" "}
            <b className="text-black">Privacy Policy.</b>
          </p>
        </article>

        <article className="mt-16 !space-y-4">
          <p>
            &quot;A world where no student is forced to abandon their education
            due to financial hardship—a future where talent, passion, and
            dedication define success, not the size of one&apos;s bank
            account.&quot;
          </p>
          <small className="text-[#63666B]"> 🌍 StudyFund Vision</small>
        </article>
      </section>
    </main>
  );
}
