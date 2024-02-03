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
    <main className="min-w-[500px] flex-grow overflow-y-scroll">
      <div className="flex justify-between px-10">
        <Button
          customStyle={{ margin: 10 }}
          onClickFunction={handleLoadExample}
          buttonText={"Load Example"}
        />
        <Button
          customStyle={{ margin: 10 }}
          onClickFunction={handlePrint}
          buttonText={"CV to PDF"}
        />
        <Button
          customStyle={{ margin: 10 }}
          onClickFunction={handleReset}
          buttonText={"Reset CV"}
        />
      </div>
      <Togglable
        icon={<FontAwesomeIcon icon={faGear} size={"xl"} />}
        header={"Layout Settings"}
      >
        <Settings layout={layout} handleLayoutChange={handleLayoutChange} />
      </Togglable>
      <Togglable
        icon={<FontAwesomeIcon icon={faUser} size={"xl"} />}
        header={"Personal Info"}
      >
        <PersonalInfo
          personalInfo={personalInfo}
          handlePersonalInfoChange={handlePersonalInfoChange}
        />
      </Togglable>
      <Togglable
        icon={<FontAwesomeIcon icon={faAddressCard} size={"xl"} />}
        header={"Contact Info"}
      >
        <ContactInfo
          contactInfo={contactInfo}
          handleContactInfoChange={handleContactInfoChange}
        />
      </Togglable>
      <Togglable
        icon={<FontAwesomeIcon icon={faUserTie} size={"xl"} />}
        header={"Work Experience"}
      >
        {workExperience.length === 0 ? (
          <h2 className="text-xl pt-5">No jobs added.</h2>
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
        icon={<FontAwesomeIcon icon={faUserGraduate} size={"xl"} />}
        header={"Education"}
      >
        {education.length === 0 ? (
          <h2 className="text-xl pt-5">No degrees added.</h2>
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
        icon={<FontAwesomeIcon icon={faUserGear} size={"xl"} />}
        header={"Skills"}
      >
        {skills.length === 0 ? (
          <h2 className="text-xl pt-5">No skills added.</h2>
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
        <Button onClickFunction={addNewSkill} buttonText={"Add new skill"} />
      </Togglable>
    </main>
  );
};

export default CVCreator;
