import React, { ReactNode } from "react";

const EmptyState = ({
  icon,
  title,
  subtitle,
  className,
}: {
  icon: ReactNode;
  title: string;
  className?: string;
  subtitle: string;
}) => {
  return (
    <div
      className={`${className} grid place-content-center place-items-center gap-2`}
    >
      {icon}
      <h4 className="text-2xl font-medium text-EbonyClay">{title}</h4>
      <p className="text-greyish-100">{subtitle}</p>
    </div>
  );
};

export default EmptyState;
