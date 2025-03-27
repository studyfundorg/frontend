"use client";
import { allImages } from "@/public/images/images";
import { NoCustomerIcon, USDTIcon } from "@/public/svgs/svgs";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import RaffleLeaders from "../donate/raffleLeaders";
import { useCollection } from "react-firebase-hooks/firestore";
import { collection, DocumentData, query, orderBy } from "firebase/firestore";
import { db } from "@/firebase";
import TableLoading from "@/components/ui/skeleton/tableLoading";
import EmptyState from "@/components/ui/EmptyState";
import { formatAddress, getAmount } from "@/utils/helpers";

const Leaderboard = () => {
  const [value, loading, error] = useCollection(
    query(
      collection(db, "donors"),
      orderBy("total_donated", "desc")
    )
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

  const [first, second, third, ...rest] = data;

  return (
    <section className="card flex-1 p-2 md:p-5">
      <ul className="grid grid-cols-3 justify-center gap-4">
        <li className="mt-20 flex flex-col items-center text-center">
          <figure className="w-9/12">
            <Image src={allImages.bronze} alt="" />
          </figure>
          <article>
            <p>{formatAddress(third?.address ?? "")}</p>
            <h4 className="!font-bold">
              {getAmount(third?.total_donated ?? 0)}
            </h4>
            <div className="flex items-center justify-center gap-1">
              <USDTIcon width={14} height={14} />
              <small className="!text-[10px]"> USDT</small>
            </div>
          </article>
        </li>
        <li className="flex flex-col items-center text-center">
          <figure>
            <Image src={allImages.gold} alt="" />
          </figure>
          <article>
            <p>{formatAddress(first?.address ?? "")}</p>
            <h4 className="!font-bold">
              {getAmount(first?.total_donated ?? 0)}
            </h4>
            <div className="flex items-center justify-center gap-1">
              <USDTIcon width={14} height={14} />
              <small className="!text-[10px]"> USDT</small>
            </div>
          </article>
        </li>
        <li className="mt-20 flex flex-col items-center text-center">
          <figure className="w-9/12">
            <Image src={allImages.silver} alt="" />
          </figure>{" "}
          <article>
            <p> {formatAddress(second?.address ?? "")}</p>
            <h4 className="!font-bold">
              {getAmount(second?.total_donated ?? 0)}
            </h4>
            <div className="flex items-center justify-center gap-1">
              <USDTIcon width={14} height={14} />
              <small className="!text-[10px]"> USDT</small>
            </div>
          </article>
        </li>
      </ul>

      <article className="mt-10 mb-6 flex justify-between">
        <div className="flex gap-5">
          <p className="text-xs !font-semibold">Rank</p>
          <p className="text-xs !font-semibold">Donor</p>
        </div>
        <div>
          <p className="text-xs !font-semibold">Amount</p>
        </div>
      </article>
      <ul className="divide-Line space-y-3 divide-y">
        {rest?.map(({ total_donated, address }, idx) => (
          <li key={idx} className="pb-3">
            <RaffleLeaders
              totalDonated={getAmount(total_donated)}
              address={address}
              index={idx + 3}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Leaderboard;
