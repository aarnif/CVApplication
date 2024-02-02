import React from "react";
import Skill from "./Skill";

const Skills = ({ layout, skills }) => {
  return (
    <div className="flex-grow text-zinc-700 pt-5 pl-12 pr-6">
      <h1 className="font-['Heavitas'] text-xl text-zinc-800 border-b-2 border-black">
        Skills
      </h1>
      <ul className="columns-3 pr-5">
        {skills.map((skill) => (
          <li key={skill.id}>
            <Skill key={skill.id} id={skill.id} layout={layout} skill={skill} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
