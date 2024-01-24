import React from "react";
import PersonalInfo from "./PersonalInfo";
import ContactInfo from "./ContactInfo";

const Preview = ({
  personalInfo,
  contactInfo,
  workExperiences,
  degrees,
  skills,
}) => {
  return (
    <main className="w-2/4 p-20">
      <h1 className="text-2xl">Preview</h1>
      <div className="flex justify-between border-2 border-black m-10 p-10">
        <PersonalInfo personalInfo={personalInfo} />
        <ContactInfo contactInfo={contactInfo} />
      </div>
    </main>
  );
};

export default Preview;
