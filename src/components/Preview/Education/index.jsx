import React from "react";
import Degree from "./Degree";

const Education = ({ education }) => {
  if (education.length === 0) {
    return null;
  }

  return (
    <div className="p-10">
      <h1 className="text-2xl border-b-2 border-black">Education</h1>
      {education.map((degree) => (
        <Degree key={degree.id} id={degree.id} degree={degree} />
      ))}
    </div>
  );
};

export default Education;
