import React from "react";
import Button from "../Button";

const Skill = ({ index, id, skill, handleSkillChange, deleteSkill }) => {
  return (
    <>
      <h2 className="text-xl pt-5">Skill {index}</h2>
      <form>
        <ul>
          <li className="flex flex-col">
            <label>Add a skill:</label>
            <input
              className="border-2 border-black"
              name="name"
              type="text"
              placeholder="Skill name"
              value={skill.name}
              onChange={handleSkillChange}
            />
          </li>
          <li className="flex justify-end">
            <Button
              customStyle={{ marginTop: 20, marginBottom: 20 }}
              buttonText={"Delete"}
              onClickFunction={deleteSkill}
            />
          </li>
        </ul>
      </form>
    </>
  );
};

export default Skill;
