import React from "react";
const IncrementButton = ({ incrementHandler, children }) => {
  console.log(children);
  return (
    <>
      <button className="btn btn-success" onClick={incrementHandler}>
        {children}
      </button>
    </>
  );
};

export default React.memo(IncrementButton);
