import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp, faAngleDown } from "@fortawesome/free-solid-svg-icons";

const Togglable = (props) => {
  const [visible, setVisible] = useState(false);

  const hideWhenVisible = { display: visible ? "none" : "" };
  const showWhenVisible = { display: visible ? "" : "none" };

  const toggleVisibility = () => {
    setVisible(!visible);
  };

  return (
    <div className="bg-white shadow-lg rounded-lg m-10 p-10">
      <ul className="flex items-center">
        <li className="mt-2 mb-2 mr-4">{props.icon}</li>
        <li className="mt-2 mb-2 mr-4">
          <h1 className="text-2xl font-bold">{props.header}</h1>
        </li>
        <li style={hideWhenVisible} className="m-auto mr-0">
          <FontAwesomeIcon
            className="cursor-pointer"
            icon={faAngleDown}
            size={"lg"}
            onClick={toggleVisibility}
          />
        </li>
        <li style={showWhenVisible} className="m-auto mr-0">
          <FontAwesomeIcon
            className="cursor-pointer"
            icon={faAngleUp}
            size={"lg"}
            onClick={toggleVisibility}
          />
        </li>
      </ul>
      <div style={showWhenVisible}>{props.children}</div>
    </div>
  );
};

export default Togglable;
