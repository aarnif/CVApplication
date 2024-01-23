import React from "react";
import PersonalInfo from "./PersonalInfo";
import ContactInfo from "./ContactInfo";

const Preview = ({
  firstName,
  lastName,
  title,
  description,
  email,
  phoneNumber,
  location,
  homePage,
  gitHubProfile,
  workExperiences,
  degrees,
  skills,
}) => {
  return (
    <main className="w-2/4 p-20">
      <h1 className="text-2xl">Preview</h1>
      <div className="flex justify-between border-2 border-black m-10 p-10">
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
      </div>
    </main>
  );
};

export default Preview;
