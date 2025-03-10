import { USDTIcon } from "@/public/svgs/svgs";
import { formatNumInThousands } from "@/utils/helpers";
import React from "react";

const RaffleLeaders = ({
  item: { rank, value },
  index,
}: {
  index: number;
  item: {
    rank: string;
    value: number;
  };
}) => {
  return (
    <article className="flex justify-between">
      <div className="flex gap-5">
        <span className="grid size-7 place-items-center rounded-full bg-[#F9F9F9] !text-xs !font-medium">
          {" "}
          {index + 1}
        </span>

        <div className="flex items-center gap-2">
          <div className="bg-alternative grid size-7 place-items-center rounded-full text-xs font-bold text-white">
            {" "}
            S{" "}
          </div>
          <h5 className="text-sm font-medium">{rank} </h5>
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

export default RaffleLeaders;
