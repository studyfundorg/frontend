import { allImages } from "@/public/images/images";
import Image from "next/image";
import Link from "next/link";

const BrandLogo = ({
  className,
  path,
}: {
  path?: string;
  className?: string;
}) => {
  return (
    <Link
      href={path ?? "/"}
      className={`${className} h-[26px] w-[82px] lg:h-[42.71px] lg:w-[157px]`}
    >
      <figure>
        <Image src={allImages.brandLogo} alt="Text world logo" />
      </figure>
    </Link>
  );
};

export default BrandLogo;
