import SignupForm from "@/components/main/auth/SignupForm";
import React from "react";

export default function page() {
  const demoWalletAddress = "0x7A3bC9D8e2F1456789abcdef0123";
  const demoOcid = "0x34456788654tygu8765";
  return (
    <main className="flex min-h-screen items-center justify-center bg-white">
      <SignupForm ocid={demoOcid} walletAddress={demoWalletAddress} />
    </main>
  );
}
