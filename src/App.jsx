import { useState } from "react";
import "./App.css";

import useField from "./hooks/useField";

import CVCreator from "./components/CVCreator/index";
import Preview from "./components/Preview";

import { v4 as uuid } from "uuid";

function App() {
  const firstName = useField("text", "John");
  const lastName = useField("text", "Doe");
  const title = useField("text", "Developer");
  const description = useField("text", "A brief description.");
  const email = useField("email", "john.doe@gmail.com");
  const phoneNumber = useField("phonenumber", "0400-123-123");
  const location = useField("text", "Helsinki, Finland");
  const homePage = useField("text", "www.mywebsite.com");
  const gitHubProfile = useField("text", "www.github.com/myprofile");

  const workExperience = {
    position: useField("text", "Position"),
    company: useField("text", "Company"),
    startDate: useField("date", "Start date"),
    endDate: useField("date", "End date"),
    description: useField("text", "A job description."),
  };

  const degree = {
    school: useField("text", "School"),
    name: useField("text", "Degree name"),
    startDate: useField("date", "Start date"),
    endDate: useField("date", "End date"),
    description: useField("text", "A degree description."),
  };

  const skill = {
    name: useField("text", "A programming language or a technology etc."),
  };

  const workExperiencesData = [
    {
      id: uuid(),
      ...workExperience,
    },
  ];

  const degreeData = [
    {
      id: uuid(),
      ...degree,
    },
  ];

  const skillsData = [
    {
      id: uuid(),
      ...skill,
    },
  ];

  const [workExperiences, setWorkExperiences] = useState(workExperiencesData);
  const [degrees, setDegrees] = useState(degreeData);
  const [skills, setSkills] = useState(skillsData);

  const addNewWorkExperience = () => {
    console.log("Clicked add new work experience.");
    const newWorkExperience = {
      id: uuid(),
      ...workExperience,
    };
    setWorkExperiences([...workExperiences, newWorkExperience]);
    console.log(workExperiences);
  };

  const deleteWorkExperience = (event, id) => {
    event.preventDefault();
    console.log("Clicked delete work experience.");
    const newWorkExperiences = workExperiences.filter(
      (workExperience) => workExperience.id !== id
    );
    setWorkExperiences(newWorkExperiences);
  };

  const addNewDegree = () => {
    console.log("Clicked add new degree.");
    const newDegree = {
      id: uuid(),
      ...degree,
    };
    setDegrees([...degrees, newDegree]);
    console.log(degrees);
  };

  const deleteDegree = (event, id) => {
    event.preventDefault();
    console.log("Clicked delete degree.");
    const newDegrees = degrees.filter((degree) => degree.id !== id);
    setDegrees(newDegrees);
  };

  const addSkill = () => {
    console.log("Clicked add new skill.");
    const newSkill = {
      id: uuid(),
      ...skill,
    };
    setSkills([...skills, newSkill]);
    console.log(skills);
  };

  const deleteSkill = (event, id) => {
    event.preventDefault();
    console.log("Clicked delete skill.");
    const newSkills = skills.filter((skill) => skill.id !== id);
    setSkills(newSkills);
  };

  return (
    <>
      <CVCreator
        firstName={firstName}
        lastName={lastName}
        title={title}
        description={description}
        email={email}
        location={location}
        phoneNumber={phoneNumber}
        homePage={homePage}
        gitHubProfile={gitHubProfile}
        skill={skill}
        workExperiences={workExperiences}
        addNewWorkExperience={addNewWorkExperience}
        deleteWorkExperience={deleteWorkExperience}
        degrees={degrees}
        addNewDegree={addNewDegree}
        deleteDegree={deleteDegree}
        skills={skills}
        addSkill={addSkill}
        deleteSkill={deleteSkill}
      />
      <Preview />
    </>
  );
}

export default App;
