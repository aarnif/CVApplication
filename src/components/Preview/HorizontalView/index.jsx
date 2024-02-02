import React from "react";
import PersonalInfo from "./Personalnfo/index";
import ContactInfo from "./ContactInfo";
import WorkExperience from "../WorkExperience";
import Education from "../Education";
import Skills from "../Skills";

const HorizontalView = ({
  layout,
  personalInfo,
  contactInfo,
  workExperience,
  education,
  skills,
}) => {
  return (
    <>
      <div className="flex h-[1128px]">
        <PersonalInfo
          layout={layout}
          personalInfo={personalInfo}
          contactInfo={contactInfo}
        />
        <div className="pt-7">
          <WorkExperience workExperience={workExperience} />
          <Education education={education} />
          <Skills layout={layout} skills={skills} />
        </div>
      </div>
    </>
  );
};

export default HorizontalView;
