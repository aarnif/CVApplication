import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

const Togglable = (props) => {
  const [visible, setVisible] = useState(false);

  const hideWhenVisible = { display: visible ? "none" : "" };
  const showWhenVisible = { display: visible ? "" : "none" };

  const toggleVisibility = () => {
    setVisible(!visible);
  };

  return (
    <div className="border-2 border-black m-10 p-10">
      <div
        style={hideWhenVisible}
        className="flex justify-between content-center"
      >
        <h1 className="text-2xl">{props.header}</h1>
        <FontAwesomeIcon
          icon={faAngleUp}
          onClick={toggleVisibility}
          className="self-center"
        />
      </div>
      <div style={showWhenVisible}>
        <div className="flex justify-between content-center">
          <h1 className="text-2xl">{props.header}</h1>
          <FontAwesomeIcon
            icon={faAngleDown}
            onClick={toggleVisibility}
            className="self-center"
          />
        </div>
        {props.children}
      </div>
    </div>
  );
};

export default Togglable;
