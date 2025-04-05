"use client";
import { useActionState, useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import FileField from "../../ui/FileField";
import Warning from "../warning";
import { UploadIcon } from "@/public/svgs/svgs";
import Button from "@/components/ui/Button";
import { handleError } from "@/utils/helpers";
import { useRouter } from "next/navigation";
import { usePrivy } from "@privy-io/react-auth";
import { useModal } from "@/hooks/useModal";
import ApplicationSuccess from "./ApplicationSuccess";
import { ActionFormStatus } from "@/types/auths";
import { signUpAction } from "@/libs/actions/auth.action";
type FileUploads = {
  transcript: File | null;
  schoolId: File | null;
};

export default function ApplicationForm() {
  const { push } = useRouter();
  const { user } = usePrivy();
  const { isOpen, closeModal, openModal } = useModal();

  const walletAddress = user?.wallet?.address;

  const [files, setFiles] = useState<FileUploads>({
    transcript: null,
    schoolId: null,
  });

  const handleFileChange =
    (type: keyof FileUploads) => (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (!file) return;

      const maxSize =
        type === "transcript" ? 50 * 1024 * 1024 : 10 * 1024 * 1024;
      const sizeLabel = type === "transcript" ? "50MB" : "10MB";

      if (file.size <= maxSize) {
        setFiles((prev) => ({ ...prev, [type]: file }));
      } else {
        handleError(
          `${type === "transcript" ? "Transcript" : "School ID"} file size must be less than ${sizeLabel}`,
        );
      }
    };

  const handleRemoveFile = (type: keyof FileUploads) => () => {
    setFiles((prev) => ({ ...prev, [type]: null }));
  };

  const initialStatus: ActionFormStatus = {
    error: false,
    message: "",
  };

  const [state, formAction, isPending] = useActionState(
    signUpAction,
    initialStatus,
  );

  // Function to handle form submission with files
  const handleSubmit = async (formData: FormData) => {
    // Append files from state to FormData
    if (files.transcript) {
      formData.append("transcript", files.transcript);
    }
    if (files.schoolId) {
      formData.append("schoolId", files.schoolId);
    }

    // Call the server action with the formData
    return formAction(formData);
  };

  useEffect(() => {
    if (state?.error) {
      handleError(state?.message);
    } else if (!state?.error && state?.message !== "") {
      openModal("success");
    }
  }, [state, push]);

  return (
    <>
      <section className="mx-auto max-w-[585px] rounded-2xl border border-[#E4E7EC] p-8">
        <article className="mb-6 !space-y-3 text-center">
          <h4 className="!text-[22px] !font-bold text-[#090909]">
            Start Application
          </h4>
          <p className="!text-sm text-[#707379]">
            Kindly provide all documents to be considered for a scholarship
          </p>
          <Warning title="Only eligible candidates will be considered." />
        </article>

        <form action={handleSubmit} className="space-y-3.5">
          <input type="hidden" name="address" value={walletAddress} />
          {/* <input type="hidden" name="email" value={email} /> */}

          <article className="space-y-0.5">
            <label className="flex gap-1 text-sm text-[#2C2D2E]">
              Upload your transcript
              <span className="text-[#FF004F]">*</span>
            </label>
            {files.transcript ? (
              <div className="relative">
                <FileField
                  title="Transcript"
                  value={files.transcript.name}
                  fileSize={files.transcript.size}
                  containerClassName="pr-12"
                />
                <button
                  type="button"
                  onClick={handleRemoveFile("transcript")}
                  className="absolute top-1/2 right-4 -translate-y-1/2 text-red-500 hover:text-red-600"
                >
                  <MdDelete size={20} />
                </button>
              </div>
            ) : (
              <div className="cursor-pointer rounded-lg border border-[#F0F0F0] p-4 text-center transition-colors hover:border-blue-200">
                <input
                  id="transcript"
                  name="transcript"
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileChange("transcript")}
                  className="hidden"
                />
                <label
                  htmlFor="transcript"
                  className="flex cursor-pointer items-center justify-center gap-3"
                >
                  <UploadIcon />
                  <div>
                    <p className="!text-xs font-medium text-[#7E8186]">
                      <span className="text-[#1570EF]">
                        Click here to upload files
                      </span>{" "}
                      or drag and drop
                    </p>
                    <p className="mt-1 !text-xs text-[#868A90]">
                      JPG, PNG or JPEG (max. 10MB)
                    </p>
                  </div>
                </label>
              </div>
            )}
          </article>

          <article className="space-y-0.5">
            <label className="flex gap-1 text-sm text-[#2C2D2E]">
              Upload your School ID card
              <span className="text-[#FF004F]">*</span>
            </label>
            {files.schoolId ? (
              <div className="relative">
                <FileField
                  title="School ID"
                  value={files.schoolId.name}
                  fileSize={files.schoolId.size}
                  containerClassName="pr-12"
                />
                <button
                  type="button"
                  onClick={handleRemoveFile("schoolId")}
                  className="absolute top-1/2 right-4 -translate-y-1/2 text-red-500 hover:text-red-600"
                >
                  <MdDelete size={20} />
                </button>
              </div>
            ) : (
              <div className="cursor-pointer rounded-lg border border-[#F0F0F0] p-4 text-center transition-colors hover:border-blue-200">
                <input
                  id="schoolId"
                  name="schoolId"
                  type="file"
                  accept=".jpg,.jpeg,.png"
                  onChange={handleFileChange("schoolId")}
                  className="hidden"
                />
                <label
                  htmlFor="schoolId"
                  className="flex cursor-pointer items-center justify-center gap-3"
                >
                  <UploadIcon />

                  <div>
                    <p className="!text-xs font-medium text-[#7E8186]">
                      <span className="text-[#1570EF]">
                        Click here to upload files
                      </span>{" "}
                      or drag and drop
                    </p>
                    <p className="mt-1 !text-xs text-[#868A90]">
                      JPG, PNG or JPEG (max. 10MB)
                    </p>
                  </div>
                </label>
              </div>
            )}
          </article>

          <Button
            type="submit"
            className="pry-btn mt-6 w-full"
            loading={isPending}
            disabled={!files.transcript || !files.schoolId}
          >
            Submit
          </Button>
        </form>
      </section>

      {isOpen["success"] && (
        <ApplicationSuccess
          id="success"
          isOpen={isOpen}
          closeModal={() => closeModal("success")}
        />
      )}
    </>
  );
}
