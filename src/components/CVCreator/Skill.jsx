import React from "react";

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
          <li className="flex flex-col">
            <button
              className="border-2 border-black m-5 px-6 py-2"
              onClick={deleteSkill}
            >
              Delete
            </button>
          </li>
        </ul>
      </form>
    </>
  );
};

export default Skill;
