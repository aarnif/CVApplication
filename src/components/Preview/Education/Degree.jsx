import React from "react";
import { formatDate } from "../../../utils/formatDate";

const Degree = ({ degree }) => {
  const { school, title, startDate, endDate, description } = degree;

  const formattedDate = `${startDate ? formatDate(startDate) : ""} - ${
    endDate ? formatDate(endDate) : ""
  }`;

  return (
    <div className="pt-5 pb-2 border-b-2">
      <h1 className="text-lg">{school}</h1>
      <h2 className="text-base pt-2">{title}</h2>
      <p className="text-sm pt-2">{formattedDate}</p>
      <p className="text-sm pt-2 italic">{description}</p>
    </div>
  );
};

export default Degree;
