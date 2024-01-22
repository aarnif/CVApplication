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

  return (
    <>
      <CVCreator
        firstName={firstName}
        lastName={lastName}
        title={title}
        description={description}
      />
      <Preview />
    </>
  );
}

export default App;
