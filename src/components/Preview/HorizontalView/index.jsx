import React from "react";
import PersonalInfo from "./Personalnfo/index";
import ContactInfo from "./ContactInfo";
import WorkExperience from "../WorkExperience";
import Education from "../Education";
import Skills from "../Skills";

const HorizontalView = ({
  display,
  layout,
  personalInfo,
  contactInfo,
  workExperience,
  education,
  skills,
}) => {
  return (
    <>
      {display === "left" && (
        <div className="flex h-[1128px]">
          <PersonalInfo
            layout={layout}
            personalInfo={personalInfo}
            contactInfo={contactInfo}
          />
          <div className="pt-7 px-12">
            <WorkExperience
              workExperience={workExperience}
              headerFont={layout.headerFont}
            />
            <Education education={education} headerFont={layout.headerFont} />
            <Skills layout={layout} skills={skills} />
          </div>
        </div>
      )}
      {display === "right" && (
        <div className="flex h-[1128px]">
          <div className="flex flex-col grow pt-7 px-12">
            <WorkExperience
              workExperience={workExperience}
              headerFont={layout.headerFont}
            />
            <Education education={education} headerFont={layout.headerFont} />
            <Skills layout={layout} skills={skills} />
          </div>
          <PersonalInfo
            layout={layout}
            personalInfo={personalInfo}
            contactInfo={contactInfo}
          />
        </div>
      )}
    </>
  );
};

export default HorizontalView;
