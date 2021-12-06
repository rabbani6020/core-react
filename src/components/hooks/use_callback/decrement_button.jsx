import React from "react";
const DecrementButton = ({ decrementHandler, children }) => {
  console.log(children);
  return (
    <>
      <button className="btn btn-primary" onClick={decrementHandler}>
        {children}
      </button>
    </>
  );
};

export default React.memo(DecrementButton);
