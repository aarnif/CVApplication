import React from "react";
import InputFieldColor from "../InputFieldColor";

const Settings = ({ layout, handleLayoutChange }) => {
  return (
    <form>
      <ul>
        <li className="mt-3">
          <label className="font-bold">Header Background Color:</label>
        </li>
        <li className="flex items-center bg-slate-200 hover:bg-slate-300 shadow-lg rounded-lg p-2 mb-3">
          <InputFieldColor
            labelName={"From:"}
            inputName={"headerBackGroundColorFrom"}
            inputType={"color"}
            inputValue={layout.headerBackGroundColorFrom}
            onChangeFunction={handleLayoutChange}
          />
          <InputFieldColor
            labelName={"To:"}
            inputName={"headerBackGroundColorTo"}
            inputType={"color"}
            inputValue={layout.headerBackGroundColorTo}
            onChangeFunction={handleLayoutChange}
          />
        </li>
        <li>
          <label className="font-bold">View:</label>
        </li>
        <li className="bg-slate-200 hover:bg-slate-300 shadow-lg rounded-lg p-2 mb-3">
          <button
            name="view"
            value="vertical"
            onClick={handleLayoutChange}
            className="bg-gradient-to-t from-white from-50% to-indigo-500 to-50% hover:from-slate-200 hover:to-indigo-700 active:scale-95 border border-black rounded-sm p-5 m-1"
          ></button>
          <button
            name="view"
            value="horizontalLeft"
            onClick={handleLayoutChange}
            className="bg-gradient-to-r from-indigo-500 from-50% to-white to-50% hover:from-indigo-700 hover:to-slate-200 active:scale-95 border border-black rounded-sm p-5 m-1"
          ></button>
          <button
            name="view"
            value="horizontalRight"
            onClick={handleLayoutChange}
            className="bg-gradient-to-r from-white from-50% to-indigo-500 to-50% hover:from-slate-200 hover:to-indigo-700 active:scale-95 border border-black rounded-sm p-5 m-1"
          ></button>
        </li>
      </ul>
    </form>
  );
};

export default Settings;
