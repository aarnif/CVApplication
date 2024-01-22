import React from "react";
import PersonalInfo from "./PersonalInfo";

const CVCreator = (props) => {
  const { firstName, lastName, title, description } = { ...props };
  return (
    <main className="w-2/4 p-20">
      <h1>CVCreator</h1>
      <PersonalInfo
        firstName={firstName}
        lastName={lastName}
        title={title}
        description={description}
      />
    </main>
  );
};

export default CVCreator;
