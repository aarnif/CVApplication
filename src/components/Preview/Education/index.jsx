import React from "react";
import Degree from "./Degree";

const Education = ({ education }) => {
  return (
    <div className="pt-5 text-zinc-700">
      <h1 className="font-['Heavitas'] text-xl text-zinc-800 border-b-2 border-black">
        Education
      </h1>
      {education.map((degree) => (
        <Degree key={degree.id} id={degree.id} degree={degree} />
      ))}
    </div>
  );
};

export default Education;
