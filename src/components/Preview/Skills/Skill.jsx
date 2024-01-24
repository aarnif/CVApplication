import React from "react";

const Skill = ({ skill }) => {
  const { name } = skill;

  return (
    <div className="pt-5 pb-2">
      <h1 className="text-lg">{name}</h1>
    </div>
  );
};

export default Skill;
