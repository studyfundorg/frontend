import {
  BronzTrophyIcon,
  GoldTrophyIcon,
  SilverTrophyIcon,
  USDTIcon,
} from "@/public/svgs/svgs";
import { formatAddress, formatNumInThousands } from "@/utils/helpers";
import React, { ReactNode } from "react";

const RaffleLeaders = ({
  home,
  totalDonated,
  address,
  index,
}: {
  index: number;

  home?: boolean;
  address: string;
  totalDonated: number;
}) => {
  const trophy: { [key: number]: ReactNode } = {
    1: <GoldTrophyIcon />,
    2: <SilverTrophyIcon />,
    3: <BronzTrophyIcon />,
  };

  return (
    <article className="flex justify-between">
      <div className="flex gap-5">
        {home ? (
          (trophy[index + 1] ?? (
            <span className="grid size-7 place-items-center rounded-full bg-[#F9F9F9] !text-xs !font-medium">
              {" "}
              {index + 1}
            </span>
          ))
        ) : (
          <span className="grid size-7 place-items-center rounded-full bg-[#F9F9F9] !text-xs !font-medium">
            {" "}
            {index + 1}
          </span>
        )}

        <div className="flex items-center gap-2">
          <div className="bg-alternative grid size-7 place-items-center rounded-full text-xs font-bold text-white">
            {address?.slice(0, 1)}
          </div>
          <h5 className="text-sm font-medium">{formatAddress(address)} </h5>
          {/* <h5 className="text-sm font-medium">{donationCount} </h5> */}
        </div>
      </div>
      <div className="flex flex-1 items-center justify-end gap-2">
        <h4 className="!text-lg"> {formatNumInThousands(totalDonated)}</h4>{" "}
        <div className="flex items-center gap-1">
          <USDTIcon width={14} height={14} />
          <small className="!text-[10px]"> USDT</small>
        </div>
      </div>
    </article>
  );
};

export default RaffleLeaders;
