import React from "react";
import Button from "../Button";
import InputField from "../InputField";
import TextAreaField from "../TextAreaField";

const Job = ({ index, id, job, handleWorkExperienceChange, deleteJob }) => {
  return (
    <>
      <h2 className="text-xl pt-5">Job {index}</h2>
      <form>
        <ul>
          <li className="flex flex-col">
            <InputField
              labelName={"Position:"}
              inputName={"position"}
              inputType={"text"}
              placeholder={"Position title"}
              inputValue={job.position}
              onChangeFunction={handleWorkExperienceChange}
            />
          </li>
          <li className="flex flex-col">
            <InputField
              labelName={"Company:"}
              inputName={"company"}
              inputType={"text"}
              placeholder={"Company name"}
              inputValue={job.company}
              onChangeFunction={handleWorkExperienceChange}
            />
          </li>
          <li className="flex flex-col">
            <InputField
              labelName={"Start date:"}
              inputName={"startDate"}
              inputType={"date"}
              placeholder={"Start date"}
              inputValue={job.startDate}
              onChangeFunction={handleWorkExperienceChange}
            />
          </li>
          <li className="flex flex-col">
            <InputField
              labelName={"End date:"}
              inputName={"endDate"}
              inputType={"date"}
              placeholder={"End date"}
              inputValue={job.endDate}
              onChangeFunction={handleWorkExperienceChange}
            />
          </li>
          <li className="flex flex-col">
            <TextAreaField
              labelName={"Description:"}
              inputName={"description"}
              placeholder={"A job description."}
              inputValue={job.description}
              onChangeFunction={handleWorkExperienceChange}
            />
          </li>
          <li className="flex justify-end">
            <Button
              customStyle={{ marginTop: 20, marginBottom: 20 }}
              buttonText={"Delete"}
              onClickFunction={deleteJob}
            />
          </li>
        </ul>
      </form>
    </>
  );
};

export default Job;
