import React, { useState } from "react";

const Counter2 = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 mx-auto text-center">
            <div className="counter-block py-2">
              <h2 className="value">{count}</h2>
              <div className="btn-list d-flex  align-items-center justify-content-center gap-2">
                <button
                  className="btn btn-primary"
                  onClick={() => setCount(count + 1)}
                  disabled={count == 5 ? true : false}
                >
                  Increment
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => setCount(count - 1)}
                  disabled={count == 0 ? true : false}
                >
                  Decrement
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Counter2;
