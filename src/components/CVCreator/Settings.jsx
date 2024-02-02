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
          <label className="font-bold">Skills Background Color:</label>
        </li>
        <li className="flex items-center bg-slate-200 hover:bg-slate-300 shadow-lg rounded-lg p-2 mb-3">
          <InputFieldColor
            labelName={"From:"}
            inputName={"skillBackGroundColorFrom"}
            inputType={"color"}
            inputValue={layout.skillBackGroundColorFrom}
            onChangeFunction={handleLayoutChange}
          />
          <InputFieldColor
            labelName={"To:"}
            inputName={"skillBackGroundColorTo"}
            inputType={"color"}
            inputValue={layout.skillBackGroundColorTo}
            onChangeFunction={handleLayoutChange}
          />
        </li>
        <li>
          <label className="font-bold">View:</label>
        </li>
        <li>
          <select
            name="view"
            value={layout.view}
            onChange={handleLayoutChange}
            className="bg-slate-200 hover:bg-slate-300 shadow-lg rounded-lg p-2 mb-3"
          >
            <option value="vertical">Vertical</option>
            <option value="horizontal">Horizontal</option>
          </select>
        </li>
      </ul>
    </form>
  );
};

export default Settings;
