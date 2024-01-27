import React from "react";
import PersonalInfo from "./PersonalInfo";
import ContactInfo from "./ContactInfo";
import Job from "./Job";
import Degree from "./Degree";
import Skill from "./Skill";
import Togglable from "../Togglable";

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
      <button
        className="border-2 border-black mx-10 mt-5 px-6 py-2"
        onClick={handleLoadExample}
      >
        Load Example
      </button>
      <button
        className="border-2 border-black mx-10 mt-5 px-6 py-2"
        onClick={handleReset}
      >
        Reset CV
      </button>
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
      </Togglable>
      <button
        className="border-2 border-black mx-10 px-6 py-2"
        onClick={addNewJob}
      >
        Add new job
      </button>
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
      </Togglable>
      <button
        className="border-2 border-black mx-10 px-6 py-2"
        onClick={addNewDegree}
      >
        Add new degree
      </button>
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
      </Togglable>
      <button
        className="border-2 border-black mx-10 px-6 py-2"
        onClick={addNewSkill}
      >
        Add new skill
      </button>
    </main>
  );
};

export default CVCreator;
