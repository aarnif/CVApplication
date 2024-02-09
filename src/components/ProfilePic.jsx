import React from "react";

const ProfilePic = ({
  labelName,
  inputName,
  inputType,
  placeholder,
  onChangeFunction,
  text,
}) => {
  return (
    <>
      <label className="mt-3 font-bold dark:text-slate-200">
        {labelName}
        <input
          className="hidden"
          name={inputName}
          type={inputType}
          placeholder={placeholder}
          onChange={onChangeFunction}
        />
        <div className="flex justify-center items-center bg-slate-200 hover:bg-slate-300 dark:bg-zinc-500 dark:hover:bg-zinc-600 shadow-lg rounded-lg p-2">
          <div className="cursor-pointer hover:from-indigo-700 hover:to-indigo-800 bg-gradient-to-r from-indigo-500 to-indigo-600 shadow-lg rounded-3xl text-white text-sm font-bold active:scale-95 px-4 py-2">
            Profile Image
          </div>
          <div className="m-2 p-2 pointer-events-none text-sm">{text}</div>
        </div>
      </label>
    </>
  );
};

export default ProfilePic;
