import React from "react";
import Button from "../Button";

const Job = ({ index, id, job, handleWorkExperienceChange, deleteJob }) => {
  return (
    <>
      <h2 className="text-xl pt-5">Job {index}</h2>
      <form>
        <ul>
          <li className="flex flex-col">
            <label>Position:</label>
            <input
              className="border-2 border-black"
              name="position"
              type="text"
              placeholder="Position title"
              value={job.position}
              onChange={handleWorkExperienceChange}
            />
          </li>
          <li className="flex flex-col">
            <label>Company:</label>
            <input
              className="border-2 border-black"
              name="company"
              type="text"
              placeholder="Company name"
              value={job.company}
              onChange={handleWorkExperienceChange}
            />
          </li>
          <li className="flex flex-col">
            <label>Start date:</label>
            <input
              className="border-2 border-black"
              name="startDate"
              type="date"
              placeholder="Start date"
              value={job.startDate}
              onChange={handleWorkExperienceChange}
            />
          </li>
          <li className="flex flex-col">
            <label>End date:</label>
            <input
              className="border-2 border-black"
              name="endDate"
              type="date"
              placeholder="End date"
              value={job.endDate}
              onChange={handleWorkExperienceChange}
            />
          </li>
          <li className="flex flex-col">
            <label>Description:</label>
            <textarea
              className="border-2 border-black"
              name="description"
              type="text"
              placeholder="A job description."
              value={job.description}
              onChange={handleWorkExperienceChange}
            />
          </li>
          <li className="flex justify-end">
            <Button
              customStyle={{ marginTop: 20, marginBottom: 20 }}
              buttonText={"Delete"}
              onClickFunction={deleteJob}
            />
          </li>
        </ul>
      </form>
    </>
  );
};

export default Job;
