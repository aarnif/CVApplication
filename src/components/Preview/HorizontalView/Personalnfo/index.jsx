import React from "react";
import Bio from "./Bio";
import ContactInfo from "../ContactInfo";

const PersonalInfo = ({ layout, personalInfo, contactInfo }) => {
  const { firstName, lastName, title, description, image } = personalInfo;
  const fullName = `${firstName ? firstName : ""} ${lastName ? lastName : ""}`;
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(90deg, ${layout.headerBackGroundColorFrom}, ${layout.headerBackGroundColorTo})`,
      }}
      className="flex flex-col items-center p-12"
    >
      <Bio
        fullName={fullName}
        title={title}
        description={description}
        image={image}
        headerFont={layout.headerFont}
      />
      <ContactInfo contactInfo={contactInfo} headerFont={layout.headerFont} />
    </div>
  );
};

export default PersonalInfo;
