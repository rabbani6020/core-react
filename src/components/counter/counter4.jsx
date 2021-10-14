import React, { useState } from "react";

const Counter4 = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="counter4 py-2">
        <h2>{count}</h2>

        <div className="btn-group">
          <button
            className="btn btn-primary"
            onClick={() => setCount(count + 1)}
          >
            plus
          </button>
          <button
            className="btn btn-danger"
            onClick={() => setCount(count - 1)}
          >
            minus
          </button>
        </div>
      </div>
    </>
  );
};

export default Counter4;
