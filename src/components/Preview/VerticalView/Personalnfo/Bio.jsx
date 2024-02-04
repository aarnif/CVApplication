import React from "react";

const Bio = ({ fullName, title, description, headerFont }) => {
  return (
    <div className="min-w-[500px] min-h-[300px] p-12 text-slate-100 min-w-500">
      <h1
        style={{ fontFamily: headerFont }}
        className="text-3xl font-['Heavitas']"
      >
        {fullName}
      </h1>
      <h2 className="text-xl font-bold">{title}</h2>
      <p className="text-base italic pt-4 pr-10">{description}</p>
    </div>
  );
};

export default Bio;
