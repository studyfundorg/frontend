"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

type NavbarLinkProps = {
  path: string;
  name: string;
  className?: string;
  action?: () => void;
};

export default function NavbarLink({ path, name, action }: NavbarLinkProps) {
  const pathName = usePathname();

  return (
    <Link
      href={path}
      className={` ${pathName === path ? "navbarActive" : "navbarNotActive"} `}
      onClick={action}
    >
      {name}
    </Link>
  );
}
