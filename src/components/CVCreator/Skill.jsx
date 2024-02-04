import { useState } from "react";
import Button from "../Button";
import InputField from "../InputField";
import InputFieldColor from "../InputFieldColor";
import ConfirmBox from "../ConfirmBox";

const Skill = ({ index, id, skill, handleSkillChange, deleteSkill }) => {
  const [deleteSkillConfirm, setDeleteSkillConfirm] = useState(false);
  return (
    <>
      <h2 className="text-xl pt-5">Skill {index}</h2>
      <form>
        <ul>
          <li className="flex flex-col">
            <InputField
              labelName={"Add a skill:"}
              inputName={"name"}
              inputType={"text"}
              placeholder={"Skill name"}
              inputValue={skill.name}
              onChangeFunction={handleSkillChange}
            />
          </li>
          <li className="flex">
            <label className="mt-3 font-bold">Skill Color:</label>
          </li>
          <li className="flex items-center bg-slate-200 hover:bg-slate-300 shadow-lg rounded-lg p-2 mb-3">
            <InputFieldColor
              labelName={"From:"}
              inputName={"colorFrom"}
              inputType={"color"}
              inputValue={skill.colorFrom}
              onChangeFunction={handleSkillChange}
            />
            <InputFieldColor
              labelName={"To:"}
              inputName={"colorTo"}
              inputType={"color"}
              inputValue={skill.colorTo}
              onChangeFunction={handleSkillChange}
            />
          </li>
          <li className="flex justify-center">
            {deleteSkillConfirm ? (
              <ConfirmBox
                cancel={() => setDeleteSkillConfirm(false)}
                deleteFunction={deleteSkill}
              />
            ) : (
              <Button
                customStyle={{ marginTop: 20, marginBottom: 20 }}
                buttonText={"Delete"}
                onClickFunction={() => setDeleteSkillConfirm(true)}
              />
            )}
          </li>
        </ul>
      </form>
    </>
  );
};

export default Skill;
