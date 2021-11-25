import React, { useState } from "react";

const UseStateComp = () => {
  const [count, setCount] = useState(0);

  const incrementHandler = () => {
    setCount((prevState => prevState + 5));
  };

  const decrementHandler = () => {
    setCount((prevState) => prevState - 5);
  };

  const resetHandler = () => {
    setCount(0);
  };

  return (
    <>
      <h2>UseStae Demo</h2>;
      <div className="card p-5">
        <h2>{count}</h2>
        <div className="button-group d-flex gap-2">
          <button className="btn btn-primary" onClick={incrementHandler}>
            Increment
          </button>
          <button className="btn btn-primary" onClick={decrementHandler}>
            Decrement
          </button>
          <button className="btn btn-primary" onClick={resetHandler}>
            Reset
          </button>
        </div>
      </div>
    </>
  );
};
export default UseStateComp;
