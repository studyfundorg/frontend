"use client";
import BrandLogo from "@/components/BrandLogo";
import Warning from "@/components/main/warning";
import Button from "@/components/ui/Button";
import { allImages } from "@/public/images/images";
import { USDTIcon } from "@/public/svgs/svgs";
import { usePrivy, useWallets } from "@privy-io/react-auth";
import Image from "next/image";
import React, { useEffect, useMemo } from "react";

export default function Page() {
  const { ready, wallets } = useWallets();

  const privy = usePrivy();

  const wallet = useMemo(() => wallets[0], [wallets]);

  useEffect(() => {
    console.log(ready);
    console.log(wallets);
    console.log(privy);
  }, [ready, wallets, privy]);

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
            <article className="card inputWrapper flex items-center justify-between p-3">
              <div className="w-6/12">
                <p className="text-ebonyclay text-start !text-sm !font-medium">
                  0.02
                </p>
              </div>

              <div className="flex items-center justify-end gap-2">
                <Image src={allImages.edu} alt="" className="size-6" />{" "}
                <span> EDU</span>
              </div>
            </article>
            <article className="card inputWrapper flex items-center justify-between p-3">
              <div className="w-6/12">
                <p className="text-ebonyclay text-start !text-sm !font-medium">
                  100
                </p>
              </div>

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
                  {wallet?.address}
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
