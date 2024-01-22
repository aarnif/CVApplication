import { useState } from "react";
import "./App.css";

import CVCreator from "./components/CVCreator/index";
import Preview from "./components/Preview";

function App() {
  return (
    <>
      <CVCreator />
      <Preview />
    </>
  );
}

export default App;
