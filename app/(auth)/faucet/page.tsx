import BrandLogo from "@/components/BrandLogo";
import Warning from "@/components/main/warning";
import Button from "@/components/ui/Button";
import { allImages } from "@/public/images/images";
import { USDTIcon } from "@/public/svgs/svgs";
import Image from "next/image";
import React from "react";

export default function page() {
  return (
    <main className="grid min-h-screen place-items-center">
      <section className="flex max-w-lg flex-col items-center justify-center space-y-6 px-3 text-center">
        <div className="!w-[141px]">
          <BrandLogo />
        </div>
        <article className="card !rounded-2xl p-5">
          <h4>Welcome</h4>
          <Warning
            title=" We noticed you do not have EDU token and USDT to test"
            className="mt-10"
          />

          <form action="" className="mt-4 flex flex-wrap gap-4">
            <article className="card inputWrapper flex justify-between p-3">
              <input
                type="tel"
                placeholder="0.0"
                className="w-6/12 !border-0 focus:!outline-0"
                required
              />

              <div className="flex items-center justify-end gap-2">
                <Image src={allImages.edu} alt="" className="size-6" />{" "}
                <span> EDU</span>
              </div>
            </article>
            <article className="card inputWrapper flex justify-between p-4">
              <input
                type="tel"
                placeholder="0.0"
                className="w-6/12 !border-0 focus:!outline-0"
                required
              />

              <div className="flex flex-1 items-center justify-end gap-2">
                <USDTIcon /> <span> USDT</span>
              </div>
            </article>

            <article className="w-full">
              <p className="text-ebonyclay text-start !text-sm !font-medium">
                Wallet address
              </p>
              <div className="card mt-3 flex justify-between p-4">
                <p className="text-ebonyclay text-start !text-sm !font-medium">
                  0x3445678897654345678907654tygu8765
                </p>
              </div>
            </article>

            <Button
              link
              href="/donate"
              className="pry-btn mt-2 w-full gap-4"
              type="submit"
            >
              Claim tokens
            </Button>
          </form>
        </article>
      </section>
    </main>
  );
}
