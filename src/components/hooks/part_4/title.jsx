import React from "react";

const Title = ({ children }) => {
  console.log("I am rendering from Title Comp.....");
  return (
    <>
      <h2 className="mb-5">{children}</h2>
    </>
  );
};

export default Title;
