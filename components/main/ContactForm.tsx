"use client";

import React, { FormEvent, useRef, useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { FiHelpCircle } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { RiUserLine } from "react-icons/ri";
import Button from "../ui/Button";

const ContactForm = () => {
  const form = useRef<HTMLFormElement | null>(null);
  const [loading, setLoading] = useState(false);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
  };
  return (
    <form
      onSubmit={sendEmail}
      className="flex flex-wrap justify-between gap-4"
      ref={form}
    >
      <div className="inputWrapper flex flex-col gap-2">
        <label htmlFor="lastName" className="text-start">
          {" "}
          First Name
        </label>
        <div className="relative">
          <RiUserLine className="absolute top-4 left-3" />
          <input
            type="text"
            name="firstName"
            className="form-controls"
            placeholder="Enter your first name..."
          />
        </div>
      </div>
      <div className="inputWrapper flex flex-col gap-2">
        <label htmlFor="lastName" className="text-start">
          {" "}
          Last Name
        </label>
        <div className="relative">
          <RiUserLine className="absolute top-4 left-3" />
          <input
            type="text"
            name="lastName"
            className="form-controls"
            placeholder="Enter your first name..."
          />
        </div>
      </div>
      <div className="flex w-full flex-col gap-2">
        <label htmlFor="email" className="text-start">
          {" "}
          Email Address
        </label>
        <div className="relative">
          <MdOutlineEmail className="absolute top-4 left-3" />
          <input
            type="text"
            name="email"
            className="form-controls"
            placeholder="Enter your email address..."
          />
        </div>
      </div>
      <div className="flex w-full flex-col gap-2">
        <label htmlFor="phoneNumber" className="text-start">
          Phone Number
        </label>
        <div className="relative">
          <FiHelpCircle className="absolute top-4 right-3 text-[#CBD5E1]" />
          <input
            type="tel"
            name="phoneNumber"
            className="form-controls"
            placeholder="(000) 000-0000"
          />
        </div>
      </div>
      <div className="flex w-full flex-col gap-2">
        <label htmlFor="message" className="text-start">
          {" "}
          Message
        </label>
        <textarea
          name="message"
          className="form-controls !rounded-3xl"
          rows={6}
          placeholder="Enter your main text here..."
        />
      </div>

      <Button className="pry-btn w-full" type="submit" disabled={loading}>
        {loading ? (
          "Sending....."
        ) : (
          <span className="flex items-center justify-center gap-2 text-center">
            {" "}
            Submit Form <FaArrowRight />
          </span>
        )}
      </Button>
    </form>
  );
};

export default ContactForm;
