import SignupForm from "@/components/main/auth/SignupForm";
import React from "react";

export default function page() {
  const demoOcid = "0x34456788654tygu8765";

  return (
    <main className="flex min-h-screen items-center justify-center bg-white">
      <SignupForm ocid={demoOcid} />
    </main>
  );
}
