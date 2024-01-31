import React from "react";
import Button from "../Button";
import InputField from "../InputField";
import TextAreaField from "../TextAreaField";

const Degree = ({ index, id, degree, handleEducationChange, deleteDegree }) => {
  return (
    <>
      <h2 className="text-xl pt-5">Degree {index}</h2>
      <form>
        <ul>
          <li className="flex flex-col">
            <InputField
              labelName={"School:"}
              inputName={"school"}
              inputType={"text"}
              placeholder={"School name"}
              inputValue={degree.school}
              onChangeFunction={handleEducationChange}
            />
          </li>
          <li className="flex flex-col">
            <InputField
              labelName={"Degree:"}
              inputName={"title"}
              inputType={"text"}
              placeholder={"Degree title"}
              inputValue={degree.title}
              onChangeFunction={handleEducationChange}
            />
          </li>
          <li className="flex flex-col">
            <InputField
              labelName={"Start date:"}
              inputName={"startDate"}
              inputType={"date"}
              placeholder={"Start date"}
              inputValue={degree.startDate}
              onChangeFunction={handleEducationChange}
            />
          </li>
          <li className="flex flex-col">
            <InputField
              labelName={"End date:"}
              inputName={"endDate"}
              inputType={"date"}
              placeholder={"End date"}
              inputValue={degree.endDate}
              onChangeFunction={handleEducationChange}
            />
          </li>
          <li className="flex flex-col">
            <TextAreaField
              labelName={"Description:"}
              inputName={"description"}
              inputType={"text"}
              placeholder={"A job description."}
              inputValue={degree.description}
              onChangeFunction={handleEducationChange}
            />
          </li>
          <li className="flex justify-center">
            <Button
              customStyle={{ marginTop: 20, marginBottom: 20 }}
              buttonText={"Delete"}
              onClickFunction={deleteDegree}
            />
          </li>
        </ul>
      </form>
    </>
  );
};

export default Degree;
