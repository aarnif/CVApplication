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
        <div className="flex justify-between">
          <PersonalInfo personalInfo={personalInfo} />
          <ContactInfo contactInfo={contactInfo} />
        </div>
        <WorkExperience workExperience={workExperience} />
        <Education education={education} />
        <Skills skills={skills} />
      </div>
    </main>
  );
};

export default Preview;
