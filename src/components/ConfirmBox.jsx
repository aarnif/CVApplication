import React from "react";
import Button from "./Button";

const ConfirmBox = ({ cancel, deleteFunction }) => {
  return (
    <div className="flex flex-col items-center p-10">
      <h1 className="text-xl font-bold">Are you sure?</h1>
      <div className="flex">
        <Button
          customStyle={{ margin: 10 }}
          buttonText={"Cancel"}
          onClickFunction={cancel}
        />
        <Button
          customStyle={{ margin: 10 }}
          buttonText={"Delete"}
          onClickFunction={deleteFunction}
        />
      </div>
    </div>
  );
};

export default ConfirmBox;
