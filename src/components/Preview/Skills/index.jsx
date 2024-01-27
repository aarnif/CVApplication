import React from "react";
import Skill from "./Skill";

const Skills = ({ skills }) => {
  return (
    <div className="flex-grow pt-5 pr-5">
      <h1 className="text-xl border-b-2 border-black">Skills</h1>
      <ul className="list-disc columns-3 px-5">
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
