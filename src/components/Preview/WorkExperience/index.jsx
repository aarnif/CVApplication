import React from "react";
import Job from "./Job";

const WorkExperience = ({ workExperience }) => {
  console.log("Work experience: ", workExperience);

  if (workExperience.length === 0) {
    return null;
  }

  return (
    <div className="p-10">
      <h1 className="text-2xl border-b-2 border-black">Work Experience</h1>
      {workExperience.map((job) => (
        <Job key={job.id} id={job.id} job={job} />
      ))}
    </div>
  );
};

export default WorkExperience;
