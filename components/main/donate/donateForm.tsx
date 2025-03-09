"use client";
import Button from "@/components/ui/Button";
import React, { FormEvent, useState } from "react";

const DonateForm = () => {
  const initialState = {
    duration: "",
    amount: 0,
    noRaffle: false,
  };
  const amountData = [10, 50, 100];

  const [donate, setDonate] = useState(initialState);

  const handleChange = (e: FormEvent<HTMLInputElement>) => {
    const { name, value, checked } = e.target as HTMLInputElement;

    if (name === "amount") {
      setDonate((prev) => ({ ...prev, [name]: parseInt(value) }));
    } else if (name === "noRaffle") {
      setDonate((prev) => ({ ...prev, [name]: checked }));
    } else {
      setDonate((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  return (
    <form className="card px-5 py-7">
      <ul className="space-y-5">
        <li className="text-xl font-semibold">
          1. How would you like to donate?
          <article className="mt-4 flex flex-col items-end gap-4">
            <div className="card flex w-full items-center gap-2 p-2 md:w-11/12">
              <input
                name="duration"
                type="radio"
                checked={donate?.duration === "one time"}
                defaultValue="one time"
                onChange={handleChange}
              />{" "}
              <label htmlFor="duration" className="!m-0">
                One Time
              </label>
            </div>
            <div className="card flex w-full items-center gap-2 p-2 md:w-11/12">
              <input
                name="duration"
                type="radio"
                checked={donate?.duration === "monthly"}
                defaultValue="monthly"
                onChange={handleChange}
              />{" "}
              <label htmlFor="duration" className="!m-0">
                Give Monthly
              </label>
            </div>

            <div className="-mt-4 w-full md:w-11/12">
              <small>(Please sustain our mission long term 🙏🏼)</small>
            </div>
          </article>
        </li>

        <li className="text-xl font-semibold">
          2. Please select an amount to donate
          <div className="flex gap-2 p-2">
            <input
              name="noRaffle"
              type="checkbox"
              checked={donate?.noRaffle}
              onChange={handleChange}
            />{" "}
            <label htmlFor="duration" className="!m-0 !text-xs !text-[#6A6C6F]">
              I do not want to participate in the raffle draw. I want all my
              donations to go straight to the charity (optional)
            </label>
          </div>
          <ul className="mt-4 flex flex-col items-end gap-4">
            {amountData.map((item, idx) => (
              <li
                key={idx}
                className="card flex w-full items-center gap-2 p-2 md:w-11/12"
              >
                <input
                  name="amount"
                  type="radio"
                  checked={donate?.amount === item}
                  defaultValue={item}
                  onChange={handleChange}
                />{" "}
                <label htmlFor="amount" className="!m-0">
                  ${item}
                </label>
              </li>
            ))}

            <li className="card flex w-full items-center gap-2 p-2 md:w-11/12">
              <label htmlFor="amount" className="!m-0">
                Other:
              </label>
              <input
                name="amount"
                type="number"
                defaultValue=""
                placeholder="0.0"
                onChange={handleChange}
                className="flex-1 !border-0 !text-sm focus:!outline-0"
              />{" "}
            </li>
          </ul>
        </li>
      </ul>

      <Button
        link
        href="/donate/thank-you"
        className="pry-btn mt-7 w-full gap-4"
        type="submit"
      >
        Donate
      </Button>
    </form>
  );
};

export default DonateForm;
