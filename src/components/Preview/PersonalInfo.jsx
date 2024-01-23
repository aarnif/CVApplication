import React from "react";

const PersonalInfo = ({ firstName, lastName, title, description }) => {
  const fullName = `${firstName.value ? firstName.value : ""} ${
    lastName.value ? lastName.value : ""
  }`;
  return (
    <div>
      <h1 className="text-2xl">{fullName}</h1>
      <h2 className="text-xl">{title.value}</h2>
      <p>{description.value}</p>
    </div>
  );
};

export default PersonalInfo;
