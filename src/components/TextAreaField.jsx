import React from "react";

const TextAreaField = ({
  labelName,
  inputName,
  inputType,
  placeholder,
  inputValue,
  onChangeFunction,
}) => {
  return (
    <>
      <label className="mt-3 font-bold dark:text-slate-200">{labelName}</label>
      <textarea
        rows="6"
        className="bg-slate-200 hover:bg-slate-300 dark:bg-zinc-500 dark:hover:bg-zinc-600 dark:placeholder-slate-200 dark:text-slate-200 shadow-lg rounded-lg p-2"
        name={inputName}
        type={inputType}
        placeholder={placeholder}
        value={inputValue}
        onChange={onChangeFunction}
      />
    </>
  );
};

export default TextAreaField;
