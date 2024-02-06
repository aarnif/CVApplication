import React from "react";
import VerticalView from "./VerticalView/index";
import HorizontalView from "./HorizontalView/index";
import { AnimatePresence, motion } from "framer-motion";

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
    <main className="pl-10">
      <AnimatePresence initial={false} mode="wait">
        <motion.div
          key={layout.view}
          ref={componentRef}
          style={{ fontFamily: layout.bodyFont }}
          className="w-[800px] h-[1128px] bg-white shadow-lg"
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 200, opacity: 0 }}
          transition={{ duration: 0.2 }}
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
          {layout.view === "horizontalLeft" && (
            <HorizontalView
              display={"left"}
              layout={layout}
              personalInfo={personalInfo}
              contactInfo={contactInfo}
              workExperience={workExperience}
              education={education}
              skills={skills}
            />
          )}
          {layout.view === "horizontalRight" && (
            <HorizontalView
              display={"right"}
              layout={layout}
              personalInfo={personalInfo}
              contactInfo={contactInfo}
              workExperience={workExperience}
              education={education}
              skills={skills}
            />
          )}
        </motion.div>
      </AnimatePresence>
    </main>
  );
};

export default Preview;
