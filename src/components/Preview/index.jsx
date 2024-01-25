import React from "react";
import PersonalInfo from "./PersonalInfo";
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
    <main className="">
      <div className="w-[850px] h-[1199px] border-2 border-black p-14">
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
