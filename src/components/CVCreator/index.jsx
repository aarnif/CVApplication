import React from "react";
import PersonalInfo from "./PersonalInfo";
import ContactInfo from "./ContactInfo";
import Job from "./Job";
import Degree from "./Degree";
import Skill from "./Skill";

const CVCreator = ({
  handleLoadExample,
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
    <main className="w-2/4 p-20">
      <h1 className="text-2xl">CVCreator</h1>
      <button
        className="border-2 border-black mx-10 mt-5 px-6 py-2"
        onClick={handleLoadExample}
      >
        Load Example
      </button>
      <PersonalInfo
        personalInfo={personalInfo}
        handlePersonalInfoChange={handlePersonalInfoChange}
      />
      <ContactInfo
        contactInfo={contactInfo}
        handleContactInfoChange={handleContactInfoChange}
      />
      {workExperience.map((job, index) => {
        console.log(index);
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
      })}
      <button
        className="border-2 border-black mx-10 px-6 py-2"
        onClick={addNewJob}
      >
        Add new job
      </button>
      {education.map((degree, index) => {
        console.log(index);
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
      })}
      <button
        className="border-2 border-black mx-10 px-6 py-2"
        onClick={addNewDegree}
      >
        Add new degree
      </button>
      {skills.map((skill, index) => {
        console.log(index);
        return (
          <Skill
            key={skill.id}
            id={skill.id}
            index={index + 1}
            skill={skill}
            handleSkillChange={(event) => handleSkillChange(event, skill.id)}
            deleteSkill={(event) => deleteSkill(event, skill.id)}
          />
        );
      })}
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
