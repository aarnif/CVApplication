import React from "react";

const Image = ({ image }) => {
  console.log("Image.jsx: image", image);
  return (
    <div className="min-w-[250px] flex justify-center items-center pr-12">
      <div className="min-w-[200px] min-h-[200px] bg-white border-2 rounded-full flex justify-center items-center">
        {image !== "" ? (
          <img
            className="max-w-[200px] max-h-[200px] rounded-full"
            src={image}
            alt="Profile"
          />
        ) : (
          <div className="font-['Heavitas'] text-zinc-700 text-xl font-bold">
            Photo
          </div>
        )}
      </div>
    </div>
  );
};

export default Image;
