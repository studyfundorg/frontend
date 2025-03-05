import {useState } from "react";

export const useGlobalHooks = () => {
  const [loading, setLoading] = useState<{ [key: string | number]: boolean }>(
    {},
  );
  const [toggle, setToggle] = useState<{ [key: string]: boolean }>({});

  const handleToggle = (id: string) => {
    setToggle((prev) => ({ [id]: !prev[id] }));
  };

  return {
    loading,
    setLoading,
    handleToggle,
    toggle,
    setToggle,
  };
};
