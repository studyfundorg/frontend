import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Dashboard",
};

export default function page() {
  return (
    <main className="pt-20">
      <h2>Dashboard</h2>
    </main>
  );
}
