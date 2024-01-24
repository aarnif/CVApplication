import React from "react";

const PersonalInfo = ({ handlePersonalInfoChange }) => {
  return (
    <div className="border-2 border-black m-10 p-10">
      <h1 className="text-2xl">Personal Info</h1>
      <form>
        <ul>
          <li className="flex flex-col">
            <label>First Name:</label>
            <input
              className="border-2 border-black"
              name="firstName"
              type="text"
              placeholder="John"
              onChange={handlePersonalInfoChange}
            />
          </li>
          <li className="flex flex-col">
            <label>Last Name:</label>
            <input
              className="border-2 border-black"
              name="lastName"
              type="text"
              placeholder="Doe"
              onChange={handlePersonalInfoChange}
            />
          </li>
          <li className="flex flex-col">
            <label>Title:</label>
            <input
              className="border-2 border-black"
              name="title"
              type="text"
              placeholder="Developer"
              onChange={handlePersonalInfoChange}
            />
          </li>
          <li className="flex flex-col">
            <label>Description:</label>
            <textarea
              className="border-2 border-black"
              name="description"
              type="text"
              placeholder="A brief description."
              onChange={handlePersonalInfoChange}
            />
          </li>
        </ul>
      </form>
    </div>
  );
};

export default PersonalInfo;
