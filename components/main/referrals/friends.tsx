import { allImages } from "@/public/images/images";
import Image from "next/image";
import React from "react";
import { BsCircle, BsCircleFill } from "react-icons/bs";
import { GoDotFill } from "react-icons/go";

const Friends = () => {
  const friendsData = [
    {
      wallet: "0x4.....987",
      date: "Mon, Mar 6th 2025",
      status: "Donated",
      imgUrl: allImages.walletIcon,
    },
    {
      wallet: "0x4.....987",
      date: "Mon, Mar 6th 2025",
      status: "Not donated",
      imgUrl: allImages.walletIcon,
    },
    {
      wallet: "0x4.....987",
      date: "Mon, Mar 6th 2025",
      status: "Donated",
      imgUrl: allImages.walletIcon,
    },
    {
      wallet: "0x4.....987",
      date: "Mon, Mar 6th 2025",
      status: "Not donated",
      imgUrl: allImages.walletIcon,
    },
  ];
  return (
    <section className="card p-5">
      <article className="flex items-center gap-2">
        <h4>Friends</h4>
        <div
          className={`text-primary text- grid size-8 place-items-center rounded-full bg-[#F4F9FE] p-1 text-xs`}
        >
          20
        </div>
      </article>

      <ul className="divide-Line mt-5 space-y-3 divide-y">
        {friendsData.map(({ wallet, imgUrl, date, status }, idx) => (
          <li key={idx} className="flex gap-3 pb-3">
            <figure className="size-8 overflow-hidden rounded-full">
              <Image
                src={imgUrl}
                alt=""
                className="!h-full !w-full object-cover"
              />
            </figure>

            <article className="flex flex-1 justify-between gap-3">
              <div>
                <h5>{wallet}</h5>
                <small className="text-[#86888A]">{date}</small>
              </div>
              <div>
                <div
                  className={`flex items-center justify-center gap-2 rounded-2xl px-4 py-2 text-center text-sm ${status === "Donated" ? "bg-[#E8FFF4] text-[#12B76A]" : "bg-[#F3F3F3] text-[#28292B]"}`}
                >
                  <GoDotFill />
                  {status}
                </div>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Friends;
