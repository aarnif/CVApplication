import React from "react";

const Button = ({ customStyle, onClickFunction, buttonText }) => {
  const style = customStyle ? customStyle : {};

  const defaultStyle =
    "hover:from-indigo-700 hover:to-indigo-800 bg-gradient-to-r from-indigo-500 to-indigo-600 shadow-lg rounded-3xl text-white text-xl font-bold active:scale-95 px-7 py-3.5";

  const deleteStyle =
    "hover:from-red-700 hover:to-red-800 bg-gradient-to-r from-red-500 to-red-600 shadow-lg rounded-3xl text-white text-xl font-bold active:scale-95 px-7 py-3.5";

  const useStyle = buttonText !== "Delete" ? defaultStyle : deleteStyle;

  return (
    <button style={style} className={useStyle} onClick={onClickFunction}>
      {buttonText}
    </button>
  );
};

export default Button;
