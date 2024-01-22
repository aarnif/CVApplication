import React from "react";

const PersonalInfo = ({ firstName, lastName, title, description }) => {
  return (
    <div className="border-2 border-black m-10 p-10">
      <h1 className="text-2xl">Personal Info</h1>
      <form>
        <ul>
          <li className="flex flex-col">
            <label>First Name:</label>
            <input className="border-2 border-black" {...firstName} />
          </li>
          <li className="flex flex-col">
            <label>Last Name:</label>
            <input className="border-2 border-black" {...lastName} />
          </li>
          <li className="flex flex-col">
            <label>Title:</label>
            <input className="border-2 border-black" {...title} />
          </li>
          <li className="flex flex-col">
            <label>Description:</label>
            <textarea className="border-2 border-black" {...description} />
          </li>
        </ul>
      </form>
    </div>
  );
};

export default PersonalInfo;
