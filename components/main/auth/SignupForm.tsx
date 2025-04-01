"use client";
import { useState } from "react";
import Button from "@/components/ui/Button";
import Ocid from "@/components/main/students/Ocid";
import countries from "@/utils/countries.json";

interface SignupFormProps {
  ocid: string;
}

const SignupForm = ({ ocid }: SignupFormProps) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    university: "",
    country: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  return (
    <section className="card mx-auto w-full max-w-md p-6">
      <h4 className="text-ebonyclay !mb-6 text-center font-semibold">
        Welcome
      </h4>
      <Ocid ocid={ocid} className="mb-6" />

      <form onSubmit={handleSubmit} className="space-y-4">
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
              value={formData.firstName}
              onChange={handleChange}
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
              value={formData.lastName}
              onChange={handleChange}
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
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email address"
            className="form-controls"
            required
          />
        </div>

        <div className="space-y-2">
          <label
            htmlFor="university"
            className="block text-sm font-medium text-gray-700"
          >
            University name
          </label>
          <input
            id="university"
            type="text"
            name="university"
            value={formData.university}
            onChange={handleChange}
            placeholder="Enter university"
            className="form-controls"
            required
          />
        </div>

        <div className="space-y-2">
          <label
            htmlFor="country"
            className="block text-sm font-medium text-gray-700"
          >
            Country
          </label>
          <select
            id="country"
            name="country"
            value={formData.country}
            onChange={handleChange}
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

        <Button
          type="submit"
          className="pry-btn w-full"
          link
          href="/students/start-application"
        >
          Sign up
        </Button>
      </form>
    </section>
  );
};

export default SignupForm;
