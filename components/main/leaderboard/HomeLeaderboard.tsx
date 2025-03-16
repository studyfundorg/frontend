"use client";
import { NoCustomerIcon } from "@/public/svgs/svgs";
import React, { useEffect, useState } from "react";
import RaffleLeaders from "../donate/raffleLeaders";
import { useCollection } from "react-firebase-hooks/firestore";
import { collection, DocumentData } from "firebase/firestore";
import { db } from "@/firebase";
import TableLoading from "@/components/ui/skeleton/tableLoading";
import EmptyState from "@/components/ui/EmptyState";
import { getAmount } from "@/utils/helpers";

const HomeLeaderboard = () => {
  const [value, loading, error] = useCollection(
    collection(db, "donationLeaderboard"),
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
      <section className="card mx-auto w-[97%] px-3 py-5 lg:px-10">
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
    <section className="card mx-auto w-[97%] p-2 md:p-5">
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
        {data?.map(({ totalDonated, address }, idx) => (
          <li key={idx} className="pb-3">
            <RaffleLeaders
              home
              totalDonated={getAmount(totalDonated)}
              address={address}
              index={idx}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default HomeLeaderboard;
