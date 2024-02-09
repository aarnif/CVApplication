import React from "react";
import InputFieldColor from "../InputFieldColor";

const Settings = ({ layout, handleLayoutChange }) => {
  return (
    <form>
      <ul>
        <li className="mt-3">
          <label className="font-bold dark:text-slate-200">
            Header Background Color:
          </label>
        </li>
        <li className="flex items-center bg-slate-200 hover:bg-slate-300 dark:bg-zinc-500 dark:hover:bg-zinc-600 shadow-lg rounded-lg p-2 mb-3">
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
          <label className="font-bold dark:text-slate-200">View:</label>
        </li>
        <li className="bg-slate-200 hover:bg-slate-300 dark:bg-zinc-500 dark:hover:bg-zinc-600 shadow-lg rounded-lg p-2 mb-3">
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
        <li className="bg-slate-200 hover:bg-slate-300 dark:bg-zinc-500 dark:hover:bg-zinc-600 shadow-lg rounded-lg p-2 mb-3">
          <label className="font-bold dark:text-slate-200">Header font:</label>
          <select
            name="headerFont"
            value={layout.headerFont}
            onChange={handleLayoutChange}
            className="bg-slate-100 hover:bg-slate-200 dark:bg-zinc-400 dark:hover:bg-zinc-500 dark:text-slate-200 shadow-lg rounded-lg my-1 mx-2 p-2"
          >
            <option value="Heavitas">Heavitas</option>
            <option value="ui-sans-serif">ui-sans-serif</option>
            <option value="system-ui">system-ui</option>
            <option value="sans-serif">sans-serif</option>
            <option value="Arial">Arial</option>
            <option value="Verdana">Verdana</option>
            <option value="Helvetica">Helvetica</option>
            <option value="Tahoma">Tahoma</option>
            <option value="'Times New Roman'">Times New Roman</option>
            <option value="Georgia">Georgia</option>
            <option value="Garamond">Garamond</option>
            <option value="'Lucida Console'">Lucida Console</option>
            <option value="'Comic Sans MS'">Comic Sans MS</option>
            <option value="'Trebuchet MS'">Trebuchet MS</option>
            <option value="'Impact'">Impact</option>
            <option value="'Courier'">Courier</option>
            <option value="'Optima'">Optima</option>
            <option value="'Hoefler Text'">Hoefler Text</option>
            <option value="'Plaster'">Plaster</option>
          </select>
        </li>
        <li className="bg-slate-200 hover:bg-slate-300 dark:bg-zinc-500 dark:hover:bg-zinc-600 shadow-lg rounded-lg p-2 mb-3">
          <label className="font-bold dark:text-slate-200">Body font:</label>
          <select
            name="bodyFont"
            value={layout.bodyFont}
            onChange={handleLayoutChange}
            className="bg-slate-100 hover:bg-slate-200 dark:bg-zinc-400 dark:hover:bg-zinc-500 dark:text-slate-200 shadow-lg rounded-lg my-1 mx-2 p-2"
          >
            <option value="ui-sans-serif">ui-sans-serif</option>
            <option value="system-ui">system-ui</option>
            <option value="sans-serif">sans-serif</option>
            <option value="Arial">Arial</option>
            <option value="Verdana">Verdana</option>
            <option value="Helvetica">Helvetica</option>
            <option value="Tahoma">Tahoma</option>
            <option value="'Times New Roman'">Times New Roman</option>
            <option value="Georgia">Georgia</option>
            <option value="Garamond">Garamond</option>
            <option value="'Lucida Console'">Lucida Console</option>
            <option value="'Comic Sans MS'">Comic Sans MS</option>
            <option value="'Trebuchet MS'">Trebuchet MS</option>
            <option value="'Impact'">Impact</option>
            <option value="'Courier'">Courier</option>
            <option value="'Optima'">Optima</option>
            <option value="'Hoefler Text'">Hoefler Text</option>
            <option value="'Plaster'">Plaster</option>
          </select>
        </li>
      </ul>
    </form>
  );
};

export default Settings;
