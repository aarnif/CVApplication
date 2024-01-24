import React from "react";
import PersonalInfo from "./PersonalInfo";
import ContactInfo from "./ContactInfo";
import WorkExperience from "./WorkExperience";

const Preview = ({
  personalInfo,
  contactInfo,
  workExperience,
  degrees,
  skills,
}) => {
  return (
    <main className="w-2/4 p-20">
      <h1 className="text-2xl">Preview</h1>
      <div className="flex flex-col border-2 border-black m-10 p-10">
        <div className="flex justify-between p-10">
          <PersonalInfo personalInfo={personalInfo} />
          <ContactInfo contactInfo={contactInfo} />
        </div>
        <WorkExperience workExperience={workExperience} />
      </div>
    </main>
  );
};

export default Preview;
