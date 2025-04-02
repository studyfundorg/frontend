import React from "react";
import Warning from "@/components/main/warning";
import Button from "@/components/ui/Button";
import CheckEligibility from "./CheckEligibility";

const StartApplication = () => {
  return (
    <aside className="card w-full space-y-8 p-4 md:p-8 lg:w-[50%]">
      <article className="!space-y-4 text-center lg:text-left">
        <h4 className="text-center !font-bold text-[#090909]">
          Start Application
        </h4>

        <Warning title="Only eligible candidates will be considered." />

        <p className="text-Grey9 text-base">
          Struggling with tuition? You're not alone. At StudyFund, we believe no
          student should abandon their dreams due to financial hardship.
        </p>
      </article>

      <section className="space-y-7">
        {/* What You Get Section */}
        <article className="!space-y-3">
          <h5 className="text-Grey9 font-bold">What You Get</h5>
          <ul className="space-y-3.5">
            {[
              "Tuition support for your next semester",
              "Four-month bursary for living expenses",
              "Exclusive learning resources to boost your success",
            ].map((benefit, index) => (
              <div key={index} className="flex items-center gap-2">
                <div className="h-6 w-6 rounded-full bg-[#BDC0C3]" />
                <p className="text-Grey9 flex-1">{benefit}</p>
              </div>
            ))}
          </ul>
        </article>

        {/* How It Works Section */}
        <article className="!space-y-3">
          <h5 className="text-Grey9 font-bold">How It Works</h5>
          <ul className="space-y-3.5">
            {[
              "Check your eligibility (70% GPA & university enrollment)",
              "Submit your transcripts & verification documents",
              "Our team reviews your application",
              "If selected, your tuition is covered!",
            ].map((step, index) => (
              <li key={index} className="flex items-center gap-2">
                <div className="h-6 w-6 rounded-full bg-[#BDC0C3]" />
                <p className="text-Grey9 flex-1">{step}</p>
              </li>
            ))}
          </ul>
        </article>
      </section>

      <article className="flex flex-col gap-6 sm:flex-row">
        <CheckEligibility />
        <Button
          className="pry-btn flex-1"
          link
          href="/students/start-application/document-upload"
        >
          Apply now
        </Button>
      </article>
    </aside>
  );
};

export default StartApplication;
