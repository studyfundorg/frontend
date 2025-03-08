import BrandLogo from "@/components/BrandLogo";
import Button from "@/components/ui/Button";
import { allImages } from "@/public/images/images";
import { USDTIcon } from "@/public/svgs/svgs";
import Image from "next/image";
import React from "react";
import { MdErrorOutline } from "react-icons/md";

export default function page() {
  return (
    <main className="grid min-h-screen place-items-center">
      <section className="flex max-w-lg flex-col items-center justify-center space-y-6 px-3 text-center">
        <div className="!w-[141px]">
          <BrandLogo />
        </div>
        <article className="card !rounded-2xl p-5">
          <h4>Welcome</h4>

          <article className="mt-10 flex gap-2 rounded-2xl bg-[#FFFDEF] px-6 py-4">
            <MdErrorOutline color="#FFB000" size={20} />{" "}
            <p className="text-start">
              We noticed you do not have EDU token and USDT to test
            </p>
          </article>

          <form action="" className="mt-4 flex flex-wrap gap-4">
            <article className="card flex flex-1 justify-between p-3">
              <input
                type="tel"
                placeholder="0.0"
                className="flex-1 border-0 focus:outline-0"
              />

              <div className="flex items-center justify-end gap-2">
                <Image src={allImages.edu} alt="" className="size-6" />{" "}
                <span> EDU</span>
              </div>
            </article>
            <article className="card flex flex-1 justify-between p-4">
              <div className="flex-1">
                <input
                  type="tel"
                  placeholder="0.0"
                  className="border-0 focus:outline-0"
                />
              </div>
              <div className="flex flex-1 items-center justify-end gap-2">
                <USDTIcon /> <span> USDT</span>
              </div>
            </article>

            <article className="w-full">
              <p className="text-ebonyclay !tex-sm text-start !font-medium">
                Wallet address
              </p>
              <div className="card mt-3 flex justify-between p-4">
                <p className="text-ebonyclay !tex-sm text-start !font-medium">
                  0x3445678897654345678907654tygu8765
                </p>
              </div>
            </article>
          </form>

          <Button className="pry-btn mt-10 mb-3 w-full gap-4">
            Claim tokens
          </Button>
        </article>
      </section>
    </main>
  );
}
