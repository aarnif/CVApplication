import React from "react";
import PersonalInfo from "./PersonalInfo";
import ContactInfo from "./ContactInfo";
import WorkExperience from "./WorkExperience";

const CVCreator = ({
  props,
  workExperiences,
  addNewWorkExperience,
  deleteWorkExperience,
}) => {
  const {
    firstName,
    lastName,
    title,
    description,
    email,
    phoneNumber,
    location,
    homePage,
    gitHubProfile,
  } = { ...props };

  return (
    <main className="w-2/4 p-20">
      <h1 className="text-2xl">CVCreator</h1>
      <PersonalInfo
        firstName={firstName}
        lastName={lastName}
        title={title}
        description={description}
      />
      <ContactInfo
        email={email}
        phoneNumber={phoneNumber}
        location={location}
        homePage={homePage}
        gitHubProfile={gitHubProfile}
      />
      {workExperiences.map((workExperience, index) => {
        console.log(index);
        return (
          <WorkExperience
            key={workExperience.id}
            id={workExperience.id}
            index={index + 1}
            position={workExperience.position}
            company={workExperience.company}
            startDate={workExperience.startDate}
            endDate={workExperience.endDate}
            description={workExperience.description}
            deleteWorkExperience={deleteWorkExperience}
          />
        );
      })}
      <button
        className="border-2 border-black mx-10 px-6 py-2"
        onClick={addNewWorkExperience}
      >
        Add new
      </button>
    </main>
  );
};

export default CVCreator;
