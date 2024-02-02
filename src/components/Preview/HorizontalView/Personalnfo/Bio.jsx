import React from "react";
import Image from "./Image";
import ContactInfo from "../ContactInfo";

const Bio = ({ fullName, title, description, image }) => {
  return (
    <div className="min-w-[200px] text-slate-100 flex flex-col items-center">
      <h1 className="text-3xl font-['Heavitas']">{fullName}</h1>
      <h2 className="text-xl font-bold">{title}</h2>
      <Image image={image} />
      <p className="text-base italic text-center">{description}</p>
    </div>
  );
};

export default Bio;
