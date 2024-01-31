import React from "react";
import Bio from "./Bio";
import Image from "./Image";

const PersonalInfo = ({ personalInfo }) => {
  const { firstName, lastName, title, description, image } = personalInfo;
  const fullName = `${firstName ? firstName : ""} ${lastName ? lastName : ""}`;
  return (
    <div className="flex bg-gradient-to-r from-sky-600 to-blue-700">
      <Bio fullName={fullName} title={title} description={description} />
      <Image image={image} />
    </div>
  );
};

export default PersonalInfo;
