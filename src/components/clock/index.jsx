// external import
import React from "react";

// internal imports
import Clock1 from "./clock1";
import Clock2 from "./clock2";
import Clock3 from "./clock3";

// clock component
const Clock = () => {
  return (
    <>
      <div className="mother-clock">
        {/* <Clock1 /> */}
        <Clock2 />
        {/* <Clock3 /> */}
      </div>
    </>
  );
};

export default Clock;
