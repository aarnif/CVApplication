import React from "react";
import PersonalInfo from "./Personalnfo/index";
import ContactInfo from "./ContactInfo";
import WorkExperience from "./WorkExperience";
import Education from "./Education";
import Skills from "./Skills";

const Preview = ({
  componentRef,
  layout,
  personalInfo,
  contactInfo,
  workExperience,
  education,
  skills,
}) => {
  return (
    <main className="px-40">
      <div
        ref={componentRef}
        className="w-[800px] h-[1128px] bg-white shadow-lg"
      >
        <PersonalInfo layout={layout} personalInfo={personalInfo} />
        <WorkExperience workExperience={workExperience} />
        <Education education={education} />
        <div className="flex justify-between">
          <Skills layout={layout} skills={skills} />
          <ContactInfo contactInfo={contactInfo} />
        </div>
      </div>
    </main>
  );
};

export default Preview;
