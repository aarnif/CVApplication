import React from "react";
import PersonalInfo from "./Personalnfo/index";
import ContactInfo from "./ContactInfo";
import WorkExperience from "./WorkExperience";
import Education from "./Education";
import Skills from "./Skills";

const Preview = ({
  personalInfo,
  contactInfo,
  workExperience,
  education,
  skills,
}) => {
  return (
    <main className="px-40">
      <div className="w-[800px] h-[1128px] bg-white shadow-lg p-12">
        <PersonalInfo personalInfo={personalInfo} />
        <WorkExperience workExperience={workExperience} />
        <Education education={education} />
        <div className="flex justify-between">
          <Skills skills={skills} />
          <ContactInfo contactInfo={contactInfo} />
        </div>
      </div>
    </main>
  );
};

export default Preview;
