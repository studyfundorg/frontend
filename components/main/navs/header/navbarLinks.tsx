"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { ReactNode } from "react";

type NavbarLinkProps = {
  path: string;
  name: string;
  icon: ReactNode;
  className?: string;
  action?: () => void;
};

export default function NavbarLinks({
  path,
  name,
  icon,
  action,
}: NavbarLinkProps) {
  const pathName = usePathname();

  return (
    <Link
      href={path}
      className={` ${pathName === path ? "navlinkActive" : "navlinkNotActive"} `}
      onClick={action}
    >
      {icon} {name}
    </Link>
  );
}
