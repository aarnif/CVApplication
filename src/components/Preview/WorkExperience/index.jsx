import React from "react";
import Job from "./Job";

const WorkExperience = ({ workExperience }) => {
  return (
    <div className="pt-5">
      <h1 className="text-xl border-b-2 border-black">Work Experience</h1>
      {workExperience.map((job) => (
        <Job key={job.id} id={job.id} job={job} />
      ))}
    </div>
  );
};

export default WorkExperience;
