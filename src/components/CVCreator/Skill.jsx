import { useState } from "react";
import Button from "../Button";
import InputField from "../InputField";
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
