import React, { useMemo, useState } from "react";
import Button from "../ui/Button";
import { useWallets } from "@privy-io/react-auth";
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

const ClaimToken = () => {
  const { wallets } = useWallets();
  const wallet = useMemo(() => wallets[0], [wallets]);
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        className="pry-btn mt-7 w-full gap-4"
        type="button"
        onClick={() => setOpen(true)}
      >
        Donate
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

              <Button className="pry-btn mt-2 w-full gap-4" type="submit">
                Claim tokens
              </Button>
            </form>
          </article>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ClaimToken;
