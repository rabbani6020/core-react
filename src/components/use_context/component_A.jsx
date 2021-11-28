import React, { useContext } from "react";
import ComponentB from "./component_B";

const ComponentA = () => {
  return (
    <>
      <div>
        <h2>This is component A</h2>
        <ComponentB />
      </div>
    </>
  );
};

export default ComponentA;
