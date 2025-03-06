"use client";
import { useState } from "react";
import {
  FaArrowDown,
  FaArrowLeft,
  FaArrowRight,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa6";

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
    <ul className="flex flex-wrap justify-between gap-5 divide-y divide-[#C0C0C0]">
      {data?.map(({ id, question, answer }) => (
        <li
          key={id}
          className={`w-full cursor-pointer ${bg ?? "bg-Grey2"} px-2 py-5`}
          onClick={() => handleToggle(id)}
        >
          <div className="flex items-center justify-between">
            <h4 className={`flex items-center gap-3 font-semibold`}>
              {" "}
              {/* <FiHelpCircle /> */}
              {question}
            </h4>
            <span>
              {selected[id] ? (
                <FaArrowDown color="#000000" />
              ) : (
                <FaArrowRight color="#000000" />
              )}
            </span>
          </div>
          <div className="mt-2">
            {selected[id] && <p className="text-Grey1 text-sm">{answer}</p>}
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Accordion;
