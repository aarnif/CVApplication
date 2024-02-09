import { useState } from "react";
import Button from "../Button";
import InputField from "../InputField";
import TextAreaField from "../TextAreaField";
import ConfirmBox from "../ConfirmBox";

const Degree = ({ index, id, degree, handleEducationChange, deleteDegree }) => {
  const [deleteDegreeConfirm, setDeleteDegreeConfirm] = useState(false);

  return (
    <>
      <h2 className="text-xl pt-5 font-bold dark:text-slate-200">
        Degree {index}
      </h2>
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
            {deleteDegreeConfirm ? (
              <ConfirmBox
                cancel={() => setDeleteDegreeConfirm(false)}
                deleteFunction={deleteDegree}
              />
            ) : (
              <Button
                customStyle={{ marginTop: 20, marginBottom: 20 }}
                buttonText={"Delete"}
                onClickFunction={() => setDeleteDegreeConfirm(true)}
              />
            )}
          </li>
        </ul>
      </form>
    </>
  );
};

export default Degree;
