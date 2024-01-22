import { useState } from "react";
import "./App.css";

import useField from "./hooks/useField";

import CVCreator from "./components/CVCreator/index";
import Preview from "./components/Preview";

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
      />
      <Preview />
    </>
  );
}

export default App;
