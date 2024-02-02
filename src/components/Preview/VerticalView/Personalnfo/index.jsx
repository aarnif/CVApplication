import React from "react";
import Bio from "./Bio";
import Image from "./Image";

const PersonalInfo = ({ layout, personalInfo }) => {
  const { firstName, lastName, title, description, image } = personalInfo;
  const fullName = `${firstName ? firstName : ""} ${lastName ? lastName : ""}`;
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(90deg, ${layout.headerBackGroundColorFrom}, ${layout.headerBackGroundColorTo})`,
      }}
      className="flex"
    >
      <Bio fullName={fullName} title={title} description={description} />
      <Image image={image} />
    </div>
  );
};

export default PersonalInfo;
