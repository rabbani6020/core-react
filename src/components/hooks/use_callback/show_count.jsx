import React from "react";
const ShowCount = ({ count, children }) => {
  console.log(children);
  return (
    <>
      <h2>
        {children} = {count}
      </h2>
    </>
  );
};

export default React.memo(ShowCount);
