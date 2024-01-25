import React from "react";

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
          <li className="flex flex-col">
            <button
              className="border-2 border-black m-5 px-6 py-2"
              onClick={deleteJob}
            >
              Delete
            </button>
          </li>
        </ul>
      </form>
    </>
  );
};

export default Job;
