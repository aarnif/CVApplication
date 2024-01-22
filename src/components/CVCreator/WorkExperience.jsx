import React from "react";

const WorkExperience = ({
  index,
  id,
  position,
  company,
  startDate,
  endDate,
  description,
  deleteWorkExperience,
}) => {
  return (
    <div className="border-2 border-black m-10 p-10">
      <h1 className="text-2xl">Work Experience {index}</h1>
      <form>
        <ul>
          <li className="flex flex-col">
            <label>Position:</label>
            <input className="border-2 border-black" {...position} />
          </li>
          <li className="flex flex-col">
            <label>Company:</label>
            <input className="border-2 border-black" {...company} />
          </li>
          <li className="flex flex-col">
            <label>Start date:</label>
            <input className="border-2 border-black" {...startDate} />
          </li>
          <li className="flex flex-col">
            <label>End date:</label>
            <input className="border-2 border-black" {...endDate} />
          </li>
          <li className="flex flex-col">
            <label>Description:</label>
            <textarea className="border-2 border-black" {...description} />
          </li>
          <li className="flex flex-col">
            <button
              className="border-2 border-black m-5 px-6 py-2"
              onClick={() => deleteWorkExperience(id)}
            >
              Delete
            </button>
          </li>
        </ul>
      </form>
    </div>
  );
};

export default WorkExperience;
