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

  const [workExperiences, setWorkExperiences] = useState(workExperiencesData);
  const [degrees, setDegrees] = useState(degreeData);

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
        workExperiences={workExperiences}
        addNewWorkExperience={addNewWorkExperience}
        deleteWorkExperience={deleteWorkExperience}
        degrees={degrees}
        addNewDegree={addNewDegree}
        deleteDegree={deleteDegree}
      />
      <Preview />
    </>
  );
}

export default App;
