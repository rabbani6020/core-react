import React from "react";
import ComponentC from "./component_C";

const ComponentB = () => {
  return (
    <>
      <div>
        <h2>Component B</h2>
        <ComponentC />
      </div>
    </>
  );
};

export default ComponentB;
