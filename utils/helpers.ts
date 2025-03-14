export const formatNumInThousands = (number: number | string) => {
  // convert to string and split into different part
  let [intPart, decimalPart] = number?.toString()?.split(".");

  // rever to start formartting from right hand
  let reversedNum = intPart.split("").reverse().join("");

  // loop through the value and add , after every 3 chars
  let formattedVal = reversedNum
    .match(/.{1,3}/g)
    ?.join(",")
    .split("")
    .reverse()
    .join("");

  //   if (!decimalPart) {
  //     decimalPart = "00";
  //   } else if (decimalPart.length === 1) {
  //     decimalPart += "0";
  //   }

  return formattedVal;
};

export const handleCopyToClipboard = (
  id: string | number,
  val: string,
  // message: string,
) => {
  if (id) {
    navigator.clipboard.writeText(val);

    //   toast({
    //     title: "Success",
    //     description: message,
    //     className: "bg-SeaGreen border-SeaGreen",
    //   });
  }
};

import { toast } from "@/hooks/use-toast";
import { type ClassValue, clsx } from "clsx";
import { NavigateOptions } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const handleSuccess = (
  message: string,
  push?: (href: string, options?: NavigateOptions) => void,
  path?: string,
) => {
  if (path && push) {
    toast({
      variant: "default",
      title: "Success",
      description: message,
    });
    push(path);
  } else {
    toast({
      variant: "default",
      title: "Success",
      description: message,
    });
  }
};

export const handleError = (message: string) => {
  toast({
    variant: "destructive",
    title: "error",
    description: message,
  });
};
