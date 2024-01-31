import React from "react";

const Image = ({ image }) => {
  console.log("Image.jsx: image", image);
  return (
    <div className="min-w-[250px] flex justify-center items-center pr-12">
      <div className="min-w-[200px] min-h-[200px] shadow-lg rounded-full bg-gradient-to-r from-indigo-500 to-indigo-700 flex justify-center items-center">
        {image !== "" ? (
          <img
            className="max-w-[200px] max-h-[200px] rounded-full"
            src={image}
            alt="Profile"
          />
        ) : (
          <div className="text-white text-xl font-bold">Profile Image</div>
        )}
      </div>
    </div>
  );
};

export default Image;
