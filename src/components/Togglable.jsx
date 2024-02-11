import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const Togglable = (props) => {
  const [visible, setVisible] = useState(false);

  const hideWhenVisible = { display: visible ? "none" : "" };
  const showWhenVisible = { display: visible ? "" : "none" };

  const toggleVisibility = () => {
    setVisible(!visible);
  };

  return (
    <div className="bg-white dark:bg-zinc-700 shadow-lg rounded-lg m-10 py-6 px-10">
      <ul className="flex items-center">
        <li className="mt-2 mb-2 mr-4">{props.icon}</li>
        <li className="mt-2 mb-2 mr-4">
          <h1 className="text-2xl font-bold dark:text-slate-200">
            {props.header}
          </h1>
        </li>
        <li style={hideWhenVisible} className="m-auto mr-0">
          <motion.div
            whileTap={{
              rotate: -180,
            }}
          >
            <FontAwesomeIcon
              className="cursor-pointer"
              icon={faAngleDown}
              size={"lg"}
              onClick={toggleVisibility}
              color={props.darkMode ? "rgb(226 232 240)" : "black"}
            />
          </motion.div>
        </li>
        <li style={showWhenVisible} className="m-auto mr-0">
          <motion.div
            whileTap={{
              rotate: 180,
            }}
          >
            <FontAwesomeIcon
              className="cursor-pointer"
              icon={faAngleUp}
              size={"lg"}
              onClick={toggleVisibility}
              color={props.darkMode ? "rgb(226 232 240)" : "black"}
            />
          </motion.div>
        </li>
      </ul>
      <div style={showWhenVisible}>{props.children}</div>
    </div>
  );
};

export default Togglable;
