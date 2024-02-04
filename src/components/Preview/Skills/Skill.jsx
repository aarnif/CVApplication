import React from "react";

const Skill = ({ layout, skill }) => {
  const { name, colorFrom, colorTo } = skill;

  return (
    <div className="text-lg text-slate-100 font-bold pt-4 pb-1">
      <h1
        style={{
          backgroundImage: `linear-gradient(90deg, ${colorFrom}, ${colorTo})`,
        }}
        className="bg-gradient-to-r from-sky-600 to-blue-700 flex justify-center rounded-full p-2"
      >
        {name}
      </h1>
    </div>
  );
};

export default Skill;
