import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

const PersonalInfo = ({ personalInfo, handlePersonalInfoChange }) => {
  return (
    <form>
      <ul>
        <li className="flex flex-col">
          <label>First Name:</label>
          <input
            className="border-2 border-black"
            name="firstName"
            type="text"
            placeholder="John"
            value={personalInfo.firstName}
            onChange={handlePersonalInfoChange}
          />
        </li>
        <li className="flex flex-col">
          <label>Last Name:</label>
          <input
            className="border-2 border-black"
            name="lastName"
            type="text"
            placeholder="Doe"
            value={personalInfo.lastName}
            onChange={handlePersonalInfoChange}
          />
        </li>
        <li className="flex flex-col">
          <label>Title:</label>
          <input
            className="border-2 border-black"
            name="title"
            type="text"
            placeholder="Developer"
            value={personalInfo.title}
            onChange={handlePersonalInfoChange}
          />
        </li>
        <li className="flex flex-col">
          <label>Description:</label>
          <textarea
            className="border-2 border-black"
            name="description"
            type="text"
            placeholder="A brief description."
            value={personalInfo.description}
            onChange={handlePersonalInfoChange}
          />
        </li>
        <li className="flex flex-col">
          <label>Image:</label>
          <input
            className="border-2 border-black"
            name="image"
            type="file"
            placeholder="Load image from file."
            onChange={handlePersonalInfoChange}
          />
        </li>
      </ul>
    </form>
  );
};

export default PersonalInfo;
