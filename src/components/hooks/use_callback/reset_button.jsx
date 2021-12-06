import React from "react";
const ResetButton = ({ resetHandler, children }) => {
  console.log(children);
  return (
    <>
      <button className="btn btn-danger" onClick={resetHandler}>
        {children}
      </button>
    </>
  );
};

export default React.memo(ResetButton);
