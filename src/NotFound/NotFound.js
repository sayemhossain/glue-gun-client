import React from "react";
import errorImg from "../assets/errorImg.webp";
const NotFound = () => {
  return (
    <div className="min-h-screen">
      <div className="flex justify-center items-center h-screen">
        <img className="w-8/12" src={errorImg} alt="" />
      </div>
    </div>
  );
};

export default NotFound;
