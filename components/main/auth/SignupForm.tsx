"use client";
import { useActionState, useEffect, useState } from "react";
import Button from "@/components/ui/Button";
import Ocid from "@/components/main/students/Ocid";
import countries from "@/utils/countries.json";
import { useRouter } from "next/navigation";
import { ActionFormStatus } from "@/types/auths";
import { signUpAction } from "@/libs/actions/auth.action";
import { handleError, handleSuccess } from "@/utils/helpers";

interface SignupFormProps {
  ocid: string;
  walletAddress: string;
}

const SignupForm = ({ ocid, walletAddress }: SignupFormProps) => {
  const { push } = useRouter();

  const initialStatus: ActionFormStatus = {
    error: false,
    message: "",
  };

  const [state, formAction, isPending] = useActionState(
    signUpAction,
    initialStatus,
  );

  useEffect(() => {
    if (state?.error) {
      handleError(state?.message);
    } else if (!state?.error && state?.message !== "") {
      handleSuccess(state?.message, push, "/students/start-application");
    }
  }, [state, push]);

  return (
    <section className="card mx-auto w-full max-w-md p-6">
      <h4 className="text-ebonyclay !mb-6 text-center font-semibold">
        Welcome
      </h4>
      <Ocid ocid={ocid} className="mb-6" />

      <form action={formAction} className="space-y-4">
        <input
          id="ocid"
          name="ocid"
          type="hidden"
          defaultValue={ocid}
          placeholder="Enter your first name"
          className="form-controls"
          required
        />

        <input
          id="address"
          name="address"
          type="hidden"
          defaultValue={walletAddress}
          placeholder="Enter your last name"
          className="form-controls"
          required
        />

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <label
              htmlFor="firstName"
              className="block text-sm font-medium text-gray-700"
            >
              First name
            </label>
            <input
              id="firstName"
              type="text"
              name="firstName"
              placeholder="Enter your first name"
              className="form-controls"
              required
            />
          </div>
          <div className="space-y-2">
            <label
              htmlFor="lastName"
              className="block text-sm font-medium text-gray-700"
            >
              Last name
            </label>
            <input
              id="lastName"
              type="text"
              name="lastName"
              placeholder="Enter your last name"
              className="form-controls"
              required
            />
          </div>
        </div>

        <div className="space-y-2">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email address
          </label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Enter your email address"
            className="form-controls"
            required
          />
        </div>

        <div>
          <h5 className="!font-bold">University Information</h5>
        </div>

        <div className="space-y-2">
          <label
            htmlFor="universityName"
            className="block text-sm font-medium text-gray-700"
          >
            Name
          </label>
          <input
            id="universityName"
            type="text"
            name="universityName"
            placeholder="Enter university name"
            className="form-controls"
            required
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <label
              htmlFor="universityCity"
              className="block text-sm font-medium text-gray-700"
            >
              City
            </label>
            <input
              id="universityCity"
              type="text"
              name="universityCity"
              placeholder="Enter university name"
              className="form-controls"
              required
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="universityCountry"
              className="block text-sm font-medium text-gray-700"
            >
              Country
            </label>
            <select
              id="universityCountry"
              name="universityCountry"
              className="form-controls"
              required
            >
              <option value="">Choose country</option>

              {countries.map(({ name }, idx) => (
                <option key={idx} value={name}>
                  {name}
                </option>
              ))}
            </select>
          </div>
        </div>

        <Button type="submit" className="pry-btn w-full" loading={isPending}>
          Sign up
        </Button>
      </form>
    </section>
  );
};

export default SignupForm;
