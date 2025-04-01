import HistoryList from "@/components/main/history/HistoryList";
import Referral from "@/components/main/referrals/referral";
import StudentApplication from "@/components/main/students/StudentApplication";
import Banner from "@/components/ui/Banner";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "History",
};

export default function page() {
  const studentData = {
    ocid: "0x34456788654tygu8765",
    firstName: "Dangbana",
    lastName: "Barry",
    email: "Dangbana@gmail.com",
    universityName: "Obusalowo University",
    country: "Liberia",
    documents: {
      transcript: {
        name: "Dangbana Transcript.pdf",
        fileSize: 4800000, // 4.8 MB in bytes
        url: "/documents/transcript.pdf",
      },
      schoolId: {
        name: "Dangbana Image.jpeg",
        fileSize: 4800000, // 4.8 MB in bytes
        url: "/documents/school-id.jpeg",
      },
    },
  };

  return (
    <main className="container pt-10">
      <article className="my-4">
        <h4>History</h4>
      </article>

      <section className="!mb-20 flex flex-wrap justify-between gap-4">
        <StudentApplication {...studentData} />

        <aside className="w-full lg:w-5/12">
          <Banner className="!my-0" />
        </aside>
      </section>
    </main>
  );
}
