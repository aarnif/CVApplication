import React from "react";

const Bio = ({ fullName, title, description }) => {
  return (
    <div className="">
      <h1 className="text-2xl">{fullName}</h1>
      <h2 className="text-xl">{title}</h2>
      <p className="text-base italic pt-5 pr-10">{description}</p>
    </div>
  );
};

export default Bio;
