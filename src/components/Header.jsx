import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);
  console.log(darkMode);

  const onTapStart = () => {
    console.log("Clicked");
    setDarkMode(!darkMode);
  };

  const colors = {
    light: "bg-white",
    dark: "bg-gradient-to-r from-indigo-500 to-indigo-600",
  };

  return (
    <header className="flex justify-between m-6">
      <h1 className="font-['Heavitas'] text-4xl">CV Creator</h1>
      <div className="flex rounded-full shadow-lg bg-gradient-to-r from-indigo-500 to-indigo-600 w-28 py-1 px-1">
        <div
          className={`flex justify-between items-center grow rounded-full ${
            darkMode ? colors["dark"] : colors["light"]
          } py-1 px-2`}
        >
          <motion.span
            className={`cursor-pointer absolute rounded-full ${
              darkMode ? colors["light"] : colors["dark"]
            } h-[36px] w-[36px]`}
            initial={{ x: darkMode ? 55 : 0 }}
            onTapStart={onTapStart}
            whileTap={{ x: 55 }}
          ></motion.span>
          <FontAwesomeIcon icon={faMoon} size={"2xl"} color={"white"} />
          <FontAwesomeIcon icon={faSun} size={"2xl"} color={"rgb(79 70 229)"} />
        </div>
      </div>
    </header>
  );
};

export default Header;
