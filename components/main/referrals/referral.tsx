import Button from "@/components/ui/Button";
import CopyToClipboardBtn from "@/components/ui/copyToClipboardBtn";
import { ReferralBoxIcon } from "@/public/svgs/svgs";
import React from "react";

const Referral = () => {
  return (
    <section className="card p-5">
      <article className="flex flex-col items-center gap-4">
        <ReferralBoxIcon />
        <article className="mx-auto max-w-sm text-center">
          <h4 className="!font-bold">Invite Friends</h4>
          <p className="text-sm">
            Get a free slot of draws for every friend who registers and makes a
            donation
          </p>
        </article>
      </article>

      <article className="mx-auto mt-12 flex max-w-xl flex-col items-center gap-4">
        <form action="" className="flex w-full items-end gap-4">
          <div className="flex flex-1 flex-col !space-y-2">
            <label htmlFor="email">Invite through email</label>
            <input
              name="email"
              type="email"
              placeholder="Enter emails separated by commas"
              className="form-controls !rounded-md"
            />
          </div>

          <Button className="pry-btn" type="submit">
            Send
          </Button>
        </form>

        <p className="text-center">OR</p>

        <div className="flex w-full flex-wrap items-end gap-4">
          <div className="flex flex-1 flex-col !space-y-2">
            <label htmlFor="reflin">Share your invite Link</label>
            <div className="card p-3">
              <p className="text-Grey8 !rounded-md">
                https://studyfund.org//234567tryu
              </p>
            </div>
          </div>

          <CopyToClipboardBtn
            id="reflink"
            valuToCopy="https://studyfund.org//234567tryu"
            title="Copy"
            containerClassName="card w-fit p-3"
          />
        </div>
      </article>
    </section>
  );
};

export default Referral;
