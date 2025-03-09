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
