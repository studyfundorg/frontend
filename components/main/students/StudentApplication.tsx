import Image from "next/image";
import FileField from "../../ui/FileField";
import { cn } from "@/utils/helpers";
import { allImages } from "@/public/images/images";

export type StudentDocument = {
  name: string;
  fileSize: number;
  url: string;
};

export type StudentApplicationProps = {
  ocid: string;
  firstName: string;
  lastName: string;
  email: string;
  universityName: string;
  country: string;
  documents: {
    transcript: StudentDocument;
    schoolId: StudentDocument;
  };
  className?: string;
};

export default function StudentApplication({
  ocid,
  firstName,
  lastName,
  email,
  universityName,
  country,
  documents,
  className,
}: StudentApplicationProps) {
  const InfoField = ({ label, value }: { label: string; value: string }) => (
    <article className="flex flex-col gap-1">
      <p className="!text-Grey10 !text-sm">{label}</p>
      <p className="!text-Grey9 text-base">{value}</p>
    </article>
  );

  return (
    <div
      className={cn(
        "space-y-12 rounded-2xl border border-[#E4E7EC] p-6",
        className,
      )}
    >
      {/* OCID Section */}
      <div className="!space-y-2">
        <figure className="flex items-center gap-2">
          <Image src={allImages.edu} alt="" className="!size-6" />
          <figcaption className="!text-Grey9 !text-sm">OCID</figcaption>
        </figure>{" "}
        <p className="!text-Grey9 !text-sm">{ocid}</p>
      </div>

      {/* Personal Info Section */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <InfoField label="First name" value={firstName} />
        <InfoField label="Last name" value={lastName} />
        <InfoField label="Email address" value={email} />
        <InfoField label="University name" value={universityName} />
        <InfoField label="Country" value={country} />
      </div>

      {/* Documents Section */}
      <section className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <article className="!space-y-2">
          <p className="text-Grey10 !text-sm">Transcript</p>
          <div className="space-y-1">
            <FileField
              value={documents.transcript.name}
              fileSize={documents.transcript.fileSize}
            />
            <a
              href={documents.transcript.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-[#868A90] !underline underline-offset-2"
            >
              View Document
            </a>
          </div>
        </article>

        <article className="!space-y-2">
          <p className="text-Grey10 !text-sm">School ID</p>
          <div className="space-y-1">
            <FileField
              value={documents.schoolId.name}
              fileSize={documents.schoolId.fileSize}
            />
            <a
              href={documents.schoolId.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-[#868A90] !underline !underline-offset-2"
            >
              View Document
            </a>
          </div>
        </article>
      </section>
    </div>
  );
}
