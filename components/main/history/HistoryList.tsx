"use client";
import { NoCustomerIcon, USDTIcon } from "@/public/svgs/svgs";
import React, { useEffect, useState } from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import { collection, DocumentData } from "firebase/firestore";
import { db } from "@/firebase";
import TableLoading from "@/components/ui/skeleton/tableLoading";
import EmptyState from "@/components/ui/EmptyState";
import { converTimestamp, getAmount } from "@/utils/helpers";

const HistoryList = () => {
  const [value, loading, error] = useCollection(
    collection(db, "donor_history"),
  );

  const [data, setData] = useState<DocumentData[]>([]);

  useEffect(() => {
    if (value) {
      const newData = value.docs.map((doc) => doc.data());
      setData(newData);
    }
  }, [value]);

  if (loading) {
    return (
      <section className="card flex-1 px-3 py-5 lg:px-10">
        <TableLoading />
      </section>
    );
  }
  if (error)
    return (
      <EmptyState
        icon={<NoCustomerIcon />}
        title="No data"
        subtitle={error?.message}
      />
    );

  return (
    <section className="card flex-1 px-3 py-5 lg:px-10">
      <article className="mt-10 mb-6 hidden justify-between md:flex">
        <div className="flex flex-1 gap-1">
          <p className="w-3/12 text-xs !font-semibold md:w-[25%] lg:w-[30%] xl:w-[25%]">
            Date
          </p>
          <p className="text-xs !font-semibold">Donation</p>
        </div>
        <div>
          <p className="text-xs !font-semibold">Reward</p>
        </div>
      </article>
      <ul className="divide-Line space-y-3 divide-y">
        {data.map(({ amount, timestamp }, idx) => (
          <li key={idx} className="flex justify-between pb-3">
            <article className="flex flex-1 gap-1">
              <div className="w-full md:w-[25%] lg:w-[30%] xl:w-[25%]">
                <p className="!text-sm">
                  {
                    converTimestamp(timestamp?.seconds, timestamp?.nanoseconds)
                      .date
                  }
                </p>
                <small className="!text-xs text-[#8E9093]">
                  {" "}
                  {
                    converTimestamp(timestamp?.seconds, timestamp?.nanoseconds)
                      .time
                  }
                </small>
              </div>
              <div className="hidden items-center gap-1 md:flex">
                <h4 className="!text-lg">{getAmount(amount)}</h4>
                <div className="flex items-center justify-center gap-1">
                  <USDTIcon width={14} height={14} />
                  <small className="!text-[10px]"> USDT</small>
                </div>
              </div>
            </article>

            <article className="flex flex-col gap-1">
              <div className="flex items-center gap-1 md:hidden">
                <small className="!text-xs text-[#6C6D6F]">Donated:</small>
                <article className="flex items-center gap-1">
                  <h4 className="!text-lg">{getAmount(amount)}</h4>
                  <div className="flex items-center justify-center gap-1">
                    <USDTIcon width={14} height={14} />
                    <small className="!text-[10px]"> USDT</small>
                  </div>
                </article>
              </div>
              <div className="flex items-center gap-1">
                <small className="block !text-xs text-[#6C6D6F] md:hidden">
                  {" "}
                  Reward:
                </small>
                <article className="flex items-center gap-1">
                  <h4 className="!text-lg">{0}</h4>
                  <div className="flex items-center justify-center gap-1">
                    <USDTIcon width={14} height={14} />
                    <small className="!text-[10px]"> USDT</small>
                  </div>
                </article>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default HistoryList;
