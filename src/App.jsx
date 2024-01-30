import { useState, useEffect } from "react";
import "./App.css";

import Header from "./components/Header.jsx";
import CVCreator from "./components/CVCreator/index";
import Preview from "./components/Preview/index";
import Footer from "./components/Footer.jsx";

import { v4 as uuid } from "uuid";

import emptyData from "./emptyData.js";
import exampleData from "./exampleData.js";

function App() {
  const [personalInfo, setPersonalInfo] = useState(emptyData.personalInfo);
  const [contactInfo, setContactInfo] = useState(emptyData.contactInfo);
  const [workExperience, setWorkExperience] = useState(
    emptyData.workExperience
  );
  const [education, setEducation] = useState(emptyData.education);
  const [skills, setSkills] = useState(emptyData.skills);

  const handleLoadExample = () => {
    console.log("Clicked toggle show example.");
    setPersonalInfo(exampleData.personalInfo);
    setContactInfo(exampleData.contactInfo);
    setWorkExperience(exampleData.workExperience);
    setEducation(exampleData.education);
    setSkills(exampleData.skills);
  };

  const handleReset = () => {
    console.log("Clicked reset CV.");
    setPersonalInfo(emptyData.personalInfo);
    setContactInfo(emptyData.contactInfo);
    setWorkExperience(emptyData.workExperience);
    setEducation(emptyData.education);
    setSkills(emptyData.skills);
  };

  const handlePersonalInfoChange = (event) => {
    event.preventDefault();
    console.log("Hande change personal info.");
    // console.log(event.target?.files[0]);

    if (event.target.name === "image") {
      const newPersonalInfo = {
        ...personalInfo,
        [event.target.name]: URL.createObjectURL(event.target.files[0]),
        imageFileName: event.target.files[0].name,
      };

      setPersonalInfo(newPersonalInfo);
      return;
    }

    const newPersonalInfo = {
      ...personalInfo,
      [event.target.name]: event.target.value,
    };

    setPersonalInfo(newPersonalInfo);
  };

  const handleContactInfoChange = (event) => {
    event.preventDefault();
    console.log("Handle contact info change.");

    const newContactInfo = {
      ...contactInfo,
      [event.target.name]: event.target.value,
    };

    setContactInfo(newContactInfo);
  };

  const handleWorkExperienceChange = (event, jobId) => {
    event.preventDefault();
    console.log("Handle work experience change.");

    const newWorkExperience = workExperience.map((job) => {
      return job.id === jobId
        ? {
            ...job,
            [event.target.name]: event.target.value,
          }
        : job;
    });

    setWorkExperience(newWorkExperience);
  };

  const addNewJob = () => {
    console.log("Clicked add new job.");
    const newWorkExperience = {
      id: uuid(),
      position: "",
      company: "",
      startDate: "",
      endDate: "",
      description: "",
    };
    setWorkExperience([...workExperience, newWorkExperience]);
  };

  const deleteJob = (event, jobId) => {
    event.preventDefault();
    console.log("Clicked delete job.");
    const newWorkExperience = workExperience.filter((job) => job.id !== jobId);
    setWorkExperience(newWorkExperience);
  };

  const handleEducationChange = (event, degreeId) => {
    event.preventDefault();
    console.log("Handle education change.");

    const newEducation = education.map((degree) => {
      return degree.id === degreeId
        ? {
            ...degree,
            [event.target.name]: event.target.value,
          }
        : degree;
    });

    setEducation(newEducation);
  };

  const addNewDegree = () => {
    console.log("Clicked add new degree.");
    const newDegree = {
      id: uuid(),
      school: "",
      degree: "",
      startDate: "",
      endDate: "",
      description: "",
    };
    setEducation([...education, newDegree]);
  };

  const deleteDegree = (event, degreeId) => {
    event.preventDefault();
    console.log("Clicked delete degree.");
    const newEducation = education.filter((degree) => degree.id !== degreeId);
    setEducation(newEducation);
  };

  const handleSkillChange = (event, skillId) => {
    event.preventDefault();
    console.log("Handle skill change.");

    const newSkills = skills.map((skill) => {
      return skill.id === skillId
        ? {
            ...skill,
            [event.target.name]: event.target.value,
          }
        : skill;
    });

    setSkills(newSkills);
  };

  const addNewSkill = () => {
    console.log("Clicked add new skill.");
    const newSkill = {
      id: uuid(),
      name: "",
    };
    setSkills([...skills, newSkill]);
  };

  const deleteSkill = (event, skillId) => {
    event.preventDefault();
    console.log("Clicked delete skill.");
    const newSkills = skills.filter((skill) => skill.id !== skillId);
    setSkills(newSkills);
  };

  console.log(personalInfo);

  return (
    <>
      <Header />
      <main className="flex">
        <CVCreator
          handleLoadExample={handleLoadExample}
          handleReset={handleReset}
          personalInfo={personalInfo}
          handlePersonalInfoChange={handlePersonalInfoChange}
          contactInfo={contactInfo}
          handleContactInfoChange={handleContactInfoChange}
          workExperience={workExperience}
          handleWorkExperienceChange={handleWorkExperienceChange}
          addNewJob={addNewJob}
          deleteJob={deleteJob}
          education={education}
          handleEducationChange={handleEducationChange}
          addNewDegree={addNewDegree}
          deleteDegree={deleteDegree}
          skills={skills}
          handleSkillChange={handleSkillChange}
          addNewSkill={addNewSkill}
          deleteSkill={deleteSkill}
        />
        <Preview
          personalInfo={personalInfo}
          contactInfo={contactInfo}
          workExperience={workExperience}
          education={education}
          skills={skills}
        />
      </main>
      <Footer />
    </>
  );
}

export default App;
