import React from "react";
import Skill from "./Skill";

const Skills = ({ skills }) => {
  if (skills.length === 0) {
    return null;
  }

  return (
    <div className="p-10">
      <h1 className="text-2xl border-b-2 border-black">Skills</h1>
      <ul className="list-disc columns-2 px-10">
        {skills.map((skill) => (
          <li key={skill.id}>
            <Skill key={skill.id} id={skill.id} skill={skill} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
