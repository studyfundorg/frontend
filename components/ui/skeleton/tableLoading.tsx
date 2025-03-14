import React from "react";

const TableLoading = () => {
  return (
    <div className="grid grid-cols-1 gap-3">
      {[...Array(9)].map((_, index) => (
        <div
          key={index}
          className="h-16 w-full animate-pulse rounded bg-gray-300"
        />
      ))}
    </div>
  );
};

export default TableLoading;
