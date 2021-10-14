// External imports
import React from "react";

// Internal imports
import Counter1 from "./counter1";
import Counter2 from "./counter2";
import Counter4 from "./counter4";

// Counter component
const Counter = () => {
  return (
    <>
      <div className="mother-counter">
        <Counter1 />
        <Counter2 />
        <Counter4 />
      </div>
    </>
  );
};

export default Counter;
