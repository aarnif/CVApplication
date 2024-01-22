import React from "react";
import PersonalInfo from "./PersonalInfo";
import ContactInfo from "./ContactInfo";

const CVCreator = (props) => {
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
    </main>
  );
};

export default CVCreator;
