import React from "react";

const Button = ({ customStyle, onClickFunction, buttonText }) => {
  const style = customStyle ? customStyle : {};

  const defaultClassAttributes =
    "bg-indigo-600 hover:bg-indigo-800 shadow-lg rounded-3xl text-white text-xl font-bold active:scale-95 px-7 py-3.5";

  return (
    <button
      style={style}
      className={defaultClassAttributes}
      onClick={onClickFunction}
    >
      {buttonText}
    </button>
  );
};

export default Button;
