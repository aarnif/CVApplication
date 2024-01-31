import React from "react";

const Bio = ({ fullName, title, description }) => {
  return (
    <div className="p-12 text-slate-100">
      <h1 className="text-3xl font-['Heavitas']">{fullName}</h1>
      <h2 className="text-xl font-bold">{title}</h2>
      <p className="text-base italic pt-4 pr-10">{description}</p>
    </div>
  );
};

export default Bio;
