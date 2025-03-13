import React, { useState } from "react";
import Button from "../ui/Button";
import Warning from "./warning";
import Image from "next/image";
import { allImages } from "@/public/images/images";
import { USDTIcon } from "@/public/svgs/svgs";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { useBlockchain } from "@/context/BlockchainProvider";
import { useRouter } from "next/navigation";

const ClaimToken = ({ amount }: { amount: number }) => {
  const [open, setOpen] = useState(false);
  const { wallet, requestTestTokens, getUSDTBalance, donate } = useBlockchain();
  const [isLoading, setIsLoading] = useState(false);
  const { push } = useRouter();

  const handleClaimToken = async () => {
    try {
      setIsLoading(true);
      if (!await requestTestTokens(amount)) return;
      
      setOpen(false)
      console.log("donating")
      const tx = await donate(amount)
      console.log(tx)

      if (tx?.status === 1) push("/donate/thank-you")
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDonation = async () => {
    try {
      setIsLoading(true);
      const balance = await getUSDTBalance();
      if (parseFloat(balance) < amount) {
        setOpen(true);
        return;
      }

      setIsLoading(true);
      console.log("donating")
      const tx = await donate(amount)
      console.log(tx)

      if (tx?.status === 1) push("/donate/thank-you")
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Button
        className="pry-btn mt-7 w-full gap-4"
        type="button"
        disabled={isLoading}
        onClick={handleDonation}
      >
        {isLoading ? "Loading..." : "Donate"}
      </Button>

      <Dialog open={open} onOpenChange={(isOpen) => setOpen(isOpen)}>
        <DialogContent className="card space-y-6 bg-white">
          <DialogHeader>
            <DialogTitle className="text-center !text-xl lg:!text-2xl">
              Claim your token
            </DialogTitle>
            <DialogDescription></DialogDescription>
          </DialogHeader>

          <article className="card !rounded-2xl p-5">
            <Warning
              title=" We noticed you do not have EDU token and USDT to test"
              className="mt-10"
            />

            <section className="mt-4 flex flex-wrap gap-4">
              <article className="card inputWrapper flex items-center justify-between p-3">
                <div className="w-6/12">
                  <p className="text-ebonyclay text-start !text-sm !font-medium">
                    0.001
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
                    {amount}
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
                className="pry-btn mt-2 w-full gap-4"
                type="button"
                onClick={handleClaimToken}
                disabled={isLoading}
              >
                {isLoading ? "Claiming..." : "Claim tokens"}
              </Button>
            </section>
          </article>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ClaimToken;
