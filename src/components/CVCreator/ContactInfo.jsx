import React from "react";
import InputField from "../InputField";

const ContactInfo = ({ contactInfo, handleContactInfoChange }) => {
  return (
    <form>
      <ul>
        <li className="flex flex-col">
          <InputField
            labelName={"Email Address:"}
            inputName={"email"}
            inputType={"email"}
            placeholder={"john.doe@gmail.com"}
            inputValue={contactInfo.email}
            onChangeFunction={handleContactInfoChange}
          />
        </li>
        <li className="flex flex-col">
          <InputField
            labelName={"Phone Number:"}
            inputName={"phone"}
            inputType={"phone-number"}
            placeholder={"0400-123-123"}
            inputValue={contactInfo.phone}
            onChangeFunction={handleContactInfoChange}
          />
        </li>
        <li className="flex flex-col">
          <InputField
            labelName={"Location:"}
            inputName={"location"}
            inputType={"text"}
            placeholder={"Helsinki, Finland"}
            inputValue={contactInfo.location}
            onChangeFunction={handleContactInfoChange}
          />
        </li>
        <li className="flex flex-col">
          <InputField
            labelName={"Home Page:"}
            inputName={"homePage"}
            inputType={"text"}
            placeholder={"www.johndoe.com"}
            inputValue={contactInfo.homePage}
            onChangeFunction={handleContactInfoChange}
          />
        </li>
        <li className="flex flex-col">
          <InputField
            labelName={"LinkedIn Profile:"}
            inputName={"linkedin"}
            inputType={"text"}
            placeholder={"www.linkedin.com/in/johndoe"}
            inputValue={contactInfo.linkedin}
            onChangeFunction={handleContactInfoChange}
          />
        </li>
        <li className="flex flex-col">
          <InputField
            labelName={"GitHub Profile:"}
            inputName={"github"}
            inputType={"text"}
            placeholder={"www.github.com/johndoe"}
            inputValue={contactInfo.github}
            onChangeFunction={handleContactInfoChange}
          />
        </li>
      </ul>
    </form>
  );
};

export default ContactInfo;
