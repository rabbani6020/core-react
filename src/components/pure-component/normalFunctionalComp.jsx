import React from "react";

const NormalFunctionalComp = ({ name, age }) => {
  console.log("NormalFunctionalComp");
  return (
    <>
      <h2>Name : {name} </h2>
      <h2>Age : {age} </h2>
    </>
  );
};

export default NormalFunctionalComp;
