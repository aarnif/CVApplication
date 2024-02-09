import React from "react";

const InputFieldColor = ({
  labelName,
  inputName,
  inputType,
  inputValue,
  onChangeFunction,
}) => {
  return (
    <>
      <label className="font-500 dark:text-slate-200">{labelName}</label>
      <label
        style={{ backgroundColor: inputValue }}
        className="cursor-pointer rounded-full h-8 w-8 mx-2"
      >
        <input
          className="hidden"
          name={inputName}
          type={inputType}
          value={inputValue}
          onChange={onChangeFunction}
        />
      </label>
    </>
  );
};

export default InputFieldColor;
