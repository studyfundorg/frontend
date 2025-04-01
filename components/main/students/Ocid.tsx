import Image from "next/image";
import { allImages } from "@/public/images/images";

interface OcidProps {
  ocid: string;
  className?: string;
}

const Ocid = ({ ocid, className = "" }: OcidProps) => {
  return (
    <section
      className={`flex items-center justify-between gap-2 ${className} rounded-xl bg-[#F7F7F7] p-2`}
    >
      <figure className="flex items-center gap-2">
        <Image src={allImages.edu} alt="OCID Icon" className="!size-6" />
        <figcaption className="!text-sm"> OCID</figcaption>
      </figure>

      <p className="text-Grey9 !text-sm">{ocid}</p>
    </section>
  );
};

export default Ocid;
