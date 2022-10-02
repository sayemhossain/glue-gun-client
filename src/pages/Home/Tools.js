import React, { useEffect, useState } from "react";
import useTools from "../../hooks/useTools";
import Tool from "./Tool";

const Tools = () => {
  const [tools, setTools] = useTools();
  return (
    <div className="md:px-16 py-10 ">
      <div className="text-center pt-10">
        <h1
          className="text-3xl font-bold uppercase"
          style={{ fontFamily: "Teko" }}
        >
          Tools Categor
        </h1>
        <p className="text-orange-400">
          <small>Totol items: {tools.length}</small>
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-5 mt-10">
        {tools.map((tool) => (
          <Tool key={tool._id} tool={tool}></Tool>
        ))}
      </div>
    </div>
  );
};

export default Tools;
