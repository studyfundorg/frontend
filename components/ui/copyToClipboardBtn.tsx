"use client";
import { cn, handleCopyToClipboard } from "@/utils/helpers";
import React, { useEffect, useState } from "react";
import { FaCircleCheck, FaRegCopy } from "react-icons/fa6";

const CopyToClipboardBtn = ({
  id,
  valuToCopy,
  className,
  title,
  containerClassName,
}: {
  id: string | number;
  valuToCopy: string;
  className?: string;
  containerClassName?: string;
  title?: string;
}) => {
  const [clicked, setClicked] = useState<boolean>(false);
  const handleCopy = () => {
    setClicked(!clicked);
    handleCopyToClipboard(id, valuToCopy);
  };

  useEffect(() => {
    if (clicked) {
      setTimeout(() => {
        setClicked(!clicked);
      }, 1000);
    }
  }, [clicked]);

  return (
    <button onClick={handleCopy} className={containerClassName}>
      {clicked ? (
        <span className="text-green-700">
          <FaCircleCheck />
        </span>
      ) : (
        <span className={cn("text-primary flex items-center gap-2", className)}>
          <FaRegCopy />
          {title}
        </span>
      )}
    </button>
  );
};

export default CopyToClipboardBtn;
