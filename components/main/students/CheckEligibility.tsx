"use client";
import Button from "@/components/ui/Button";
import { DialogClose, DialogFooter } from "@/components/ui/dialog";
import ModalWrapper from "@/components/ui/modals/ModalWrapper";
import { useModal } from "@/hooks/useModal";
import React, { useState } from "react";

interface EligibilityAnswers {
  enrolled: string;
  gpa: string;
  transcripts: string;
}

const CheckEligibility = () => {
  const { isOpen, closeModal, openModal } = useModal();
  const [answers, setAnswers] = useState<EligibilityAnswers>({
    enrolled: "",
    gpa: "",
    transcripts: "",
  });

  const questions = [
    {
      id: "enrolled",
      question: "Are you currently enrolled in a university?",
    },
    {
      id: "gpa",
      question: "Do you have a minimum 70% GPA?",
    },
    {
      id: "transcripts",
      question: "Do you have academic transcripts available?",
    },
  ];

  const handleRadioChange = (
    questionId: keyof EligibilityAnswers,
    value: string,
  ) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: value,
    }));
  };

  const handleSubmit = () => {
    // Check if all questions are answered
    const isAllAnswered = Object.values(answers).every(
      (answer) => answer !== "",
    );
    if (!isAllAnswered) {
      alert("Please answer all questions");
      return;
    }

    // Check eligibility
    const isEligible = Object.values(answers).every(
      (answer) => answer === "yes",
    );
    if (isEligible) {
      alert("Congratulations! You are eligible for the scholarship.");
    } else {
      alert("Sorry, you are not eligible for the scholarship at this time.");
    }
  };

  return (
    <>
      <Button
        className="outline-btn !text-primary flex-1"
        onClick={() => openModal("check-eligibility")}
      >
        Check eligibility
      </Button>

      <ModalWrapper
        id="check-eligibility"
        title="Check Eligibility"
        titleClass="!mb-2 !text-xl text-center font-semibold text-Grey9"
        subtitle="We need to check if you're eligible for this scholarship or not"
        subtitleClass="text-center"
        openModals={isOpen}
        modalAction={closeModal}
      >
        <article className="space-y-3">
          {questions.map((q) => (
            <div key={q.id} className="!space-y-2">
              <h5 className="text-ebonyclay text-base font-semibold">
                {q.question}
              </h5>
              <div className="flex gap-2">
                {["yes", "no"].map((option) => (
                  <label
                    key={option}
                    className={`flex flex-1 cursor-pointer items-center gap-2 rounded-md border p-3 transition-colors ${
                      answers[q.id as keyof EligibilityAnswers] === option
                        ? "border-[#085BCF] bg-blue-50"
                        : "border-[#F0F1F1] hover:bg-gray-50"
                    }`}
                  >
                    <input
                      type="radio"
                      name={q.id}
                      value={option}
                      checked={
                        answers[q.id as keyof EligibilityAnswers] === option
                      }
                      onChange={() =>
                        handleRadioChange(
                          q.id as keyof EligibilityAnswers,
                          option,
                        )
                      }
                      className="h-4 w-4 text-[#085BCF] focus:ring-[#085BCF]"
                    />
                    <span className="text-sm text-[#2C2D2E] capitalize">
                      {option}
                    </span>
                  </label>
                ))}
              </div>
            </div>
          ))}
        </article>

        <article className="mt-3">
          <DialogFooter className="flex gap-6">
            <DialogClose asChild>
              <Button className="outline-btn !text-primary flex-1">
                Cancel
              </Button>
            </DialogClose>
            <Button
              onClick={handleSubmit}
              className="pry-btn flex-1"
              link
              href="/students/start-application/document-upload"
            >
              Submit
            </Button>
          </DialogFooter>
        </article>
      </ModalWrapper>
    </>
  );
};

export default CheckEligibility;
