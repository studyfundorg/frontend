import { formatFileSize } from "@/utils/helpers";
import { PDFFileIcon } from "@/public/svgs/svgs";

export type Fieldprops = {
  title?: string;
  value?: string;
  className?: string;
  containerClassName?: string;
  fileSize?: number;
};

export default function FileField({
  value,
  className,
  containerClassName,
  fileSize,
}: Fieldprops) {
  return (
    <div className={`space-y-1.5 ${className ? className : ""}`}>
      {/* <p className="text-CharcoalGrey text-sm">{title}</p> */}

      <div
        className={`${containerClassName} flex gap-4 rounded-lg border border-[#E8E8E8] px-6 py-3`}
      >
        <PDFFileIcon />

        <div className="space-y-1">
          <p className="text-sm !font-medium !text-black">{value}</p>
          <p className="text-xs !text-[#808080]">
            {formatFileSize(fileSize as number)}
          </p>
        </div>
      </div>
    </div>
  );
}
