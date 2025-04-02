import React from "react";
import { MdErrorOutline } from "react-icons/md";

const Warning = ({
  title,
  className,
}: {
  className?: string;
  title: string;
}) => {
  return (
    <article
      className={`${className} flex items-center gap-2 rounded-2xl bg-[#FFFDEF] px-5 py-3`}
    >
      <MdErrorOutline color="#FFB000" size={24} />{" "}
      <p className="text-start !text-sm">{title}</p>
    </article>
  );
};

export default Warning;
