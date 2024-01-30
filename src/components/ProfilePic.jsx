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
      <label className="mt-3 font-bold">
        {labelName}
        <input
          className="hidden"
          name={inputName}
          type={inputType}
          placeholder={placeholder}
          onChange={onChangeFunction}
        />
        <div className="flex justify-center items-center bg-slate-200 hover:bg-slate-300 shadow-lg rounded-lg p-2">
          <div className="cursor-pointer bg-indigo-600 hover:bg-indigo-800 shadow-lg rounded-3xl text-white text-sm font-bold active:scale-95 px-4 py-2">
            Profile Image
          </div>
          <div className="m-2 p-2 pointer-events-none text-sm">{text}</div>
        </div>
      </label>
    </>
  );
};

export default ProfilePic;
