import React from "react";
import Settings from "./Settings";
import PersonalInfo from "./PersonalInfo";
import ContactInfo from "./ContactInfo";
import Job from "./Job";
import Degree from "./Degree";
import Skill from "./Skill";
import Togglable from "../Togglable";
import Button from "../Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGear,
  faUser,
  faAddressCard,
  faUserTie,
  faUserGraduate,
  faUserGear,
} from "@fortawesome/free-solid-svg-icons";

const CVCreator = ({
  darkMode,
  layout,
  handleLayoutChange,
  handleLoadExample,
  handlePrint,
  handleReset,
  personalInfo,
  handlePersonalInfoChange,
  contactInfo,
  handleContactInfoChange,
  workExperience,
  handleWorkExperienceChange,
  addNewJob,
  deleteJob,
  education,
  handleEducationChange,
  addNewDegree,
  deleteDegree,
  skills,
  handleSkillChange,
  addNewSkill,
  deleteSkill,
}) => {
  return (
    <main className="flex-grow min-w-[848px] 2xl:min-w-[500px] 2xl:overflow-y-scroll">
      <div className="flex justify-between px-10">
        <Button
          customStyle={{ margin: 10 }}
          onClickFunction={handleLoadExample}
          buttonText={"Load Example CV"}
        />
        <Button
          customStyle={{ margin: 10 }}
          onClickFunction={handlePrint}
          buttonText={"CV to PDF"}
        />
        <Button
          customStyle={{ margin: 10 }}
          onClickFunction={handleReset}
          buttonText={"Clear CV"}
        />
      </div>
      <Togglable
        icon={
          <FontAwesomeIcon
            icon={faGear}
            size={"xl"}
            color={darkMode ? "rgb(226 232 240)" : "black"}
          />
        }
        header={"Layout Settings"}
        darkMode={darkMode}
      >
        <Settings layout={layout} handleLayoutChange={handleLayoutChange} />
      </Togglable>
      <Togglable
        icon={
          <FontAwesomeIcon
            icon={faUser}
            size={"xl"}
            color={darkMode ? "rgb(226 232 240)" : "black"}
          />
        }
        header={"Personal Info"}
        darkMode={darkMode}
      >
        <PersonalInfo
          personalInfo={personalInfo}
          handlePersonalInfoChange={handlePersonalInfoChange}
        />
      </Togglable>
      <Togglable
        icon={
          <FontAwesomeIcon
            icon={faAddressCard}
            size={"xl"}
            color={darkMode ? "rgb(226 232 240)" : "black"}
          />
        }
        header={"Contact Info"}
        darkMode={darkMode}
      >
        <ContactInfo
          contactInfo={contactInfo}
          handleContactInfoChange={handleContactInfoChange}
        />
      </Togglable>
      <Togglable
        icon={
          <FontAwesomeIcon
            icon={faUserTie}
            size={"xl"}
            color={darkMode ? "rgb(226 232 240)" : "black"}
          />
        }
        header={"Work Experience"}
        darkMode={darkMode}
      >
        {workExperience.length === 0 ? (
          <h2 className="text-xl pt-5 dark:text-slate-200">No jobs added.</h2>
        ) : (
          workExperience.map((job, index) => {
            return (
              <Job
                key={job.id}
                id={job.id}
                index={index + 1}
                job={job}
                handleWorkExperienceChange={(event) =>
                  handleWorkExperienceChange(event, job.id)
                }
                deleteJob={(event) => deleteJob(event, job.id)}
              />
            );
          })
        )}
        <div className="flex justify-center">
          <Button onClickFunction={addNewJob} buttonText={"Add new job"} />
        </div>
      </Togglable>
      <Togglable
        icon={
          <FontAwesomeIcon
            icon={faUserGraduate}
            size={"xl"}
            color={darkMode ? "rgb(226 232 240)" : "black"}
          />
        }
        header={"Education"}
        darkMode={darkMode}
      >
        {education.length === 0 ? (
          <h2 className="text-xl pt-5 dark:text-slate-200">
            No degrees added.
          </h2>
        ) : (
          education.map((degree, index) => {
            return (
              <Degree
                key={degree.id}
                id={degree.id}
                index={index + 1}
                degree={degree}
                handleEducationChange={(event) =>
                  handleEducationChange(event, degree.id)
                }
                deleteDegree={(event) => deleteDegree(event, degree.id)}
              />
            );
          })
        )}
        <div className="flex justify-center">
          <Button
            onClickFunction={addNewDegree}
            buttonText={"Add new degree"}
          />
        </div>
      </Togglable>
      <Togglable
        icon={
          <FontAwesomeIcon
            icon={faUserGear}
            size={"xl"}
            color={darkMode ? "rgb(226 232 240)" : "black"}
          />
        }
        header={"Skills"}
        darkMode={darkMode}
      >
        {skills.length === 0 ? (
          <h2 className="text-xl pt-5 dark:text-slate-200">No skills added.</h2>
        ) : (
          skills.map((skill, index) => {
            return (
              <Skill
                key={skill.id}
                id={skill.id}
                index={index + 1}
                skill={skill}
                handleSkillChange={(event) =>
                  handleSkillChange(event, skill.id)
                }
                deleteSkill={(event) => deleteSkill(event, skill.id)}
              />
            );
          })
        )}
        <div className="flex justify-center">
          <Button onClickFunction={addNewSkill} buttonText={"Add new skill"} />
        </div>
      </Togglable>
    </main>
  );
};

export default CVCreator;
