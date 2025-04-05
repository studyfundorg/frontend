import Button from "@/components/ui/Button";
import ModalWrapper from "@/components/ui/modals/ModalWrapper";
import React from "react";
import { BsFillCheckCircleFill } from "react-icons/bs";

const ApplicationSuccess = ({
  id,
  isOpen,
  closeModal,
}: {
  id: string;
  isOpen: any;
  closeModal: () => void;
}) => {
  return (
    <ModalWrapper
      id={id}
      title="Application submitted"
      titleClass="!mb-2 !text-xl text-center font-semibold text-Grey9"
      subtitle="Your application is under review"
      subtitleClass="text-center text-Grey10"
      icon={
        <div className="flex w-full flex-col items-center justify-center text-center">
          {" "}
          <BsFillCheckCircleFill size={80} color="#12B76A" />
        </div>
      }
      openModals={isOpen}
      modalAction={closeModal}
    >
      <Button link href="/" className="pry-btn w-full">
        Back to Home
      </Button>
    </ModalWrapper>
  );
};

export default ApplicationSuccess;
