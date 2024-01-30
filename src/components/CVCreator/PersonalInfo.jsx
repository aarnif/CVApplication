import React from "react";
import InputField from "../InputField";
import TextAreaField from "../TextAreaField";
import ProfilePic from "../ProfilePic";

const PersonalInfo = ({ personalInfo, handlePersonalInfoChange }) => {
  return (
    <form>
      <ul>
        <li className="flex flex-col">
          <InputField
            labelName={"First Name:"}
            inputName={"firstName"}
            inputType={"text"}
            placeholder={"John"}
            inputValue={personalInfo.firstName}
            onChangeFunction={handlePersonalInfoChange}
          />
        </li>
        <li className="flex flex-col">
          <InputField
            labelName={"Last Name:"}
            inputName={"lastName"}
            inputType={"text"}
            placeholder={"Doe"}
            inputValue={personalInfo.lastName}
            onChangeFunction={handlePersonalInfoChange}
          />
        </li>
        <li className="flex flex-col">
          <InputField
            labelName={"Title:"}
            inputName={"title"}
            inputType={"text"}
            placeholder={"Developer"}
            inputValue={personalInfo.title}
            onChangeFunction={handlePersonalInfoChange}
          />
        </li>
        <li className="flex flex-col">
          <TextAreaField
            labelName={"Description:"}
            inputName={"description"}
            inputType={"text"}
            placeholder={"A brief description."}
            inputValue={personalInfo.description}
            onChangeFunction={handlePersonalInfoChange}
          />
        </li>
        <li className="flex flex-col">
          <ProfilePic
            labelName={"Image:"}
            inputName={"image"}
            inputType={"file"}
            placeholder={"Load image from file."}
            onChangeFunction={handlePersonalInfoChange}
            text={
              personalInfo.image
                ? personalInfo.imageFileName
                : "Upload image from file."
            }
          />
        </li>
      </ul>
    </form>
  );
};

export default PersonalInfo;
