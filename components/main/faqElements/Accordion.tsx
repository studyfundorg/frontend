"use client";
import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";
import { FiHelpCircle } from "react-icons/fi";

const Accordion = ({
  data,
  bg,
}: {
  data: { id: number; question: string; answer: string }[];
  bg?: string;
}) => {
  const [selected, setSelected] = useState<{ [key: number]: boolean }>({});

  const handleToggle = (id: number) => {
    setSelected((prev) => ({ [id]: !prev[id] }));
  };

  return (
    <ul className="flex flex-wrap justify-between gap-5">
      {data?.map(({ id, question, answer }) => (
        <li
          key={id}
          className={`w-full cursor-pointer rounded-3xl ${bg ?? "bg-Grey2"} p-7 px-10`}
          onClick={() => handleToggle(id)}
        >
          <div className="flex items-center justify-between">
            <h5
              className={`flex items-center gap-3 font-extrabold text-[#334155]`}
            >
              {" "}
              <FiHelpCircle /> {question}
            </h5>
            <span>
              {selected[id] ? (
                <FaChevronUp color="#94A3B8" />
              ) : (
                <FaChevronDown color="#94A3B8" />
              )}
            </span>
          </div>
          <div className="mt-2">
            {selected[id] && <p className="text-sm text-Grey1">{answer}</p>}
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Accordion;
