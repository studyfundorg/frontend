import { StaticImageData } from "next/image";
import React from "react";
import StudentsCard from "./studentsCard";

export type IUser = {
  name: string;
  cgpa: string;
  school: string;
  credit?: number;
  imgUrl: string | StaticImageData;
};

const RenderStudents = ({ data }: { data: IUser[] }) => {
  return (
    <ul className="grid grid-cols-1 gap-4 py-5 md:grid-cols-3 lg:grid-cols-4">
      {data?.map((item, idx) => (
        <li key={idx}>
          <StudentsCard items={item} />
        </li>
      ))}
    </ul>
  );
};

export default RenderStudents;
