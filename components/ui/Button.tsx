import Link from "next/link";
import React from "react";
import Spinner from "./skeleton/spinner";

type ButtonProps = {
  link?: boolean;
  type?: "button" | "submit" | "reset" | "link";
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  loading?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement> &
  React.AnchorHTMLAttributes<HTMLAnchorElement>;

const Button: React.FC<ButtonProps> = ({
  type = "button",
  href,
  onClick,
  children,
  className,
  link,
  loading,
  disabled,
  // ...rest
}) => {
  if (link) {
    return (
      <Link
        href={href as string}
        className={` ${className} btn flex items-center justify-center gap-2`}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={` ${className} btn flex items-center justify-center gap-2`}
      disabled={loading || disabled}
    >
      {loading && <Spinner />}
      {!loading && children}
    </button>
  );
};

export default Button;
