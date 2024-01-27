import React from "react";

const Image = ({ image }) => {
  console.log("Image.jsx: image", image);
  return (
    <div className="min-w-[250px] flex justify-center items-center">
      <div className="min-w-[200px] min-h-[200px] border-2 border-black rounded-full bg-slate-400 flex justify-center items-center">
        <img
          className="max-w-[200px] max-h-[200px] rounded-full"
          src={image}
          alt="Profile"
        />
      </div>
    </div>
  );
};

export default Image;
