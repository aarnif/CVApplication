import React from "react";
import Job from "./Job";

const WorkExperience = ({ workExperience, headerFont }) => {
  return (
    <div className="pt-5 text-zinc-700">
      <h2
        style={{ fontFamily: headerFont }}
        className="text-xl text-zinc-800 border-b-2 border-black"
      >
        Work Experience
      </h2>
      {workExperience.map((job) => (
        <Job key={job.id} id={job.id} job={job} />
      ))}
    </div>
  );
};

export default WorkExperience;
