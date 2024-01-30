import React from "react";

const InputField = ({
  labelName,
  inputName,
  inputType,
  placeholder,
  inputValue,
  onChangeFunction,
}) => {
  return (
    <>
      <label className="mt-3 font-bold">{labelName}</label>
      <input
        className="bg-slate-200 hover:bg-slate-300 shadow-lg rounded-lg p-2"
        name={inputName}
        type={inputType}
        placeholder={placeholder}
        value={inputValue}
        onChange={onChangeFunction}
      />
    </>
  );
};

export default InputField;
