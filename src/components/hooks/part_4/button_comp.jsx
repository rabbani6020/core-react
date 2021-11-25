import React from "react";

const Button = ({ children, incrementHandler }) => {
  console.log("I am rendering from Button Comp.....");
  return (
    <>
      <button className="btn btn-primary" onClick={incrementHandler}>
        {children}
      </button>
    </>
  );
};

export default Button;
