import React from "react";

const PersonalInfo = ({ personalInfo, handlePersonalInfoChange }) => {
  return (
    <form>
      <ul>
        <li className="flex flex-col">
          <label>First Name:</label>
          <input
            className="border-2 border-black"
            name="firstName"
            type="text"
            placeholder="John"
            value={personalInfo.firstName}
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
            value={personalInfo.lastName}
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
            value={personalInfo.title}
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
            value={personalInfo.description}
            onChange={handlePersonalInfoChange}
          />
        </li>
        <li className="flex flex-col">
          <label>
            Image:
            <input
              className="hidden"
              name="image"
              type="file"
              placeholder="Load image from file."
              onChange={handlePersonalInfoChange}
            />
            <div type="button" className="flex border-2 border-black">
              <div className="border-2 border-black m-2 p-2 cursor-pointer">
                Profile Image
              </div>
              <div className="m-2 p-2 pointer-events-none">
                {personalInfo.image
                  ? personalInfo.imageFileName
                  : "Upload image from file."}
              </div>
            </div>
          </label>
        </li>
      </ul>
    </form>
  );
};

export default PersonalInfo;
