import React from "react";
import Degree from "./Degree";

const Education = ({ education, headerFont }) => {
  return (
    <div className="pt-5 text-zinc-700">
      <h2
        style={{ fontFamily: headerFont }}
        className="text-xl font-bold text-zinc-800 border-b-2 border-black"
      >
        EDUCATION
      </h2>
      {education.map((degree) => (
        <Degree key={degree.id} id={degree.id} degree={degree} />
      ))}
    </div>
  );
};

export default Education;
