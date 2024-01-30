import React from "react";
import PersonalInfo from "./PersonalInfo";
import ContactInfo from "./ContactInfo";
import Job from "./Job";
import Degree from "./Degree";
import Skill from "./Skill";
import Togglable from "../Togglable";
import Button from "../Button";

const CVCreator = ({
  handleLoadExample,
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
      <h1 className="text-2xl">CVCreator</h1>
      <div className="flex justify-between">
        <Button
          customStyle={{ marginTop: 10, marginLeft: 40, marginRight: 40 }}
          onClickFunction={handleLoadExample}
          buttonText={"Load Example"}
        />
        <Button
          customStyle={{ marginTop: 10, marginLeft: 40, marginRight: 40 }}
          onClickFunction={handleReset}
          buttonText={"Reset CV"}
        />
      </div>
      <Togglable header={"Personal Info"}>
        <PersonalInfo
          personalInfo={personalInfo}
          handlePersonalInfoChange={handlePersonalInfoChange}
        />
      </Togglable>
      <Togglable header={"Contact Info"}>
        <ContactInfo
          contactInfo={contactInfo}
          handleContactInfoChange={handleContactInfoChange}
        />
      </Togglable>
      <Togglable header={"Work Experience"}>
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
        <Button onClickFunction={addNewJob} buttonText={"Add new job"} />
      </Togglable>
      <Togglable header={"Education"}>
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
        <Button onClickFunction={addNewDegree} buttonText={"Add new degree"} />
      </Togglable>
      <Togglable header={"Skills"}>
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
