import React from "react";
import VerticalView from "./VerticalView/index";
import HorizontalView from "./HorizontalView/index";

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
        {layout.view === "vertical" && (
          <VerticalView
            layout={layout}
            personalInfo={personalInfo}
            contactInfo={contactInfo}
            workExperience={workExperience}
            education={education}
            skills={skills}
          />
        )}
        {layout.view === "horizontal" && (
          <HorizontalView
            layout={layout}
            personalInfo={personalInfo}
            contactInfo={contactInfo}
            workExperience={workExperience}
            education={education}
            skills={skills}
          />
        )}
      </div>
    </main>
  );
};

export default Preview;
