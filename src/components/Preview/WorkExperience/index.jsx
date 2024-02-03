import React from "react";
import Job from "./Job";

const WorkExperience = ({ workExperience }) => {
  return (
    <div className="pt-5 text-zinc-700">
      <h1 className="font-['Heavitas'] text-xl text-zinc-800 border-b-2 border-black">
        Work Experience
      </h1>
      {workExperience.map((job) => (
        <Job key={job.id} id={job.id} job={job} />
      ))}
    </div>
  );
};

export default WorkExperience;
