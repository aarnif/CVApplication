import React from "react";
import PersonalInfo from "./Personalnfo/index";
import ContactInfo from "./ContactInfo";
import WorkExperience from "../WorkExperience";
import Education from "../Education";
import Skills from "../Skills";

const VerticalView = ({
  layout,
  personalInfo,
  contactInfo,
  workExperience,
  education,
  skills,
}) => {
  return (
    <>
      <PersonalInfo layout={layout} personalInfo={personalInfo} />
      <WorkExperience workExperience={workExperience} />
      <Education education={education} />
      <div className="flex justify-between">
        <Skills layout={layout} skills={skills} />
        <ContactInfo contactInfo={contactInfo} />
      </div>
    </>
  );
};

export default VerticalView;
