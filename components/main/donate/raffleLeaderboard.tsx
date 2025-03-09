import {
  BronzTrophyIcon,
  GoldTrophyIcon,
  SilverTrophyIcon,
  USDTIcon,
} from "@/public/svgs/svgs";
import { formatNumInThousands } from "@/utils/helpers";
import React, { ReactNode } from "react";

const RaffleLeaderboard = ({
  item: { rank, percentage, value },
  index,
}: {
  index: number;
  item: {
    rank: string;
    percentage: number;
    value: number;
  };
}) => {
  const trophy: { [key: string]: ReactNode } = {
    "First Place": <GoldTrophyIcon />,
    "Second Place": <SilverTrophyIcon />,
    "Third Place": <BronzTrophyIcon />,
  };

  return (
    <article className="flex justify-between">
      <div className="flex gap-2">
        {trophy[rank] ?? (
          <span className="grid size-7 place-items-center rounded-full bg-[#F9F9F9] !text-xs !font-medium">
            {" "}
            {index + 1}
          </span>
        )}
        <div className="flex flex-col">
          <h5 className="text-sm font-medium">{rank} </h5>
          <small className="text-Grey3 !text-[10px]">{percentage}%</small>
        </div>
      </div>
      <div className="flex flex-1 items-center justify-end gap-2">
        <h4 className="!text-lg"> {formatNumInThousands(value)}</h4>{" "}
        <div className="flex items-center gap-1">
          <USDTIcon width={14} height={14} />
          <small className="!text-[10px]"> USDT</small>
        </div>
      </div>
    </article>
  );
};

export default RaffleLeaderboard;
