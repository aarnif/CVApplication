import React from "react";

const Degree = ({
  index,
  id,
  position,
  company,
  startDate,
  endDate,
  description,
  deleteDegree,
}) => {
  return (
    <div className="border-2 border-black m-10 p-10">
      <h1 className="text-2xl">Degree {index}</h1>
      <form>
        <ul>
          <li className="flex flex-col">
            <label>School:</label>
            <input className="border-2 border-black" {...position} />
          </li>
          <li className="flex flex-col">
            <label>Degree name:</label>
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
              onClick={() => deleteDegree(id)}
            >
              Delete
            </button>
          </li>
        </ul>
      </form>
    </div>
  );
};

export default Degree;
