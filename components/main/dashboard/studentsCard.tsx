import Image from "next/image";
import React from "react";
import { IUser } from "./renderStudents";

const StudentsCard = ({
  items: { name, cgpa, school, credit, imgUrl },
}: {
  items: IUser;
}) => {
  return (
    <div className="relative overflow-hidden rounded-2xl">
      <figure className="h-[360px] overflow-hidden">
        <Image
          src={imgUrl}
          alt={name}
          className="zoomImg !h-full !w-full object-cover"
        />
      </figure>

      <article className="absolute right-0 bottom-5 left-0 z-10 container flex flex-col gap-1 rounded-2xl bg-[#ffffffaf] p-3 backdrop-blur-lg">
        <h5 className="!text-lg !font-bold">{name}</h5>
        <div className="flex justify-between">
          {credit && (
            <div>
              <small className="!text-xs !text-[#7B7E82]">
                Amount Received
              </small>
              <p className="!font-medium">{credit} USDT </p>
            </div>
          )}
          <div>
            <small className="!text-xs !text-[#7B7E82]">CGPA</small>
            <p className="!font-medium">{cgpa} </p>
          </div>
        </div>
        <div>
          <small className="!text-xs !text-[#7B7E82]">Institution</small>
          <p className="!font-medium">{school} </p>
        </div>
      </article>
    </div>
  );
};

export default StudentsCard;
