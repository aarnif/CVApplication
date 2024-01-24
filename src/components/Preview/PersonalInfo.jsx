import React from "react";

const PersonalInfo = ({ personalInfo }) => {
  const { firstName, lastName, title, description } = personalInfo;
  const fullName = `${firstName ? firstName : ""} ${lastName ? lastName : ""}`;
  return (
    <div>
      <h1 className="text-2xl">{fullName}</h1>
      <h2 className="text-xl">{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default PersonalInfo;
