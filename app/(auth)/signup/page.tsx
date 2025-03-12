import BrandLogo from "@/components/BrandLogo";
import LoginWithPrivy from "@/components/main/auth/loginWithPrivy";

import React from "react";

export default function page() {
  return (
    <main className="grid min-h-screen place-items-center">
      <section className="flex max-w-lg flex-col items-center justify-center text-center">
        <div className="!w-[141px]">
          <BrandLogo />
        </div>
        <article className="">
          <h1>Every student deserves a future</h1>

          <LoginWithPrivy />

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
