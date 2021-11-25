import React, { useState } from "react";

const UseSateComp = () => {
  const [count, setCount] = useState(5);

  const incrementHandler = () => {
    setCount(count + 5);
  };

  return (
    <>
      <h1>UseSate Demo</h1>
      <div>
        <h3 className="card-title">{count}</h3>
        <button className="btn btn-primary" onClick={incrementHandler}>
          increment
        </button>
      </div>
    </>
  );
};

export default UseSateComp;
