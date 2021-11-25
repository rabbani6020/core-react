import React, { useState, useEffect } from "react";
import UseEffectTwoComp from "./use_effect_2";

const UseEffectOneComp = () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  const [show, setShow] = useState(true);

  useEffect(() => {
    console.log("Component Did Mount");
  }, []);

  return (
    <>
      <h2>Use Effects Demo</h2>

      <div>
        <button
          className="btn btn-danger"
          onClick={() => setShow((prevState) => !prevState)}
        >
          Toggler
        </button>
      </div>

      {show && <UseEffectTwoComp />}

      <div className="d-flex gap-3">
        <div className="card p-4">
          <h2>{count}</h2>
          <p>
            <button
              className="btn btn-success"
              onClick={() => setCount((prevState) => prevState + 1)}
            >
              Incremnet
            </button>
          </p>
        </div>
        <div className="card p-4">
          <h2>{count2}</h2>
          <p>
            <button
              className="btn btn-success"
              onClick={() => setCount2((prevState) => prevState + 5)}
            >
              Incremnet
            </button>
          </p>
        </div>
      </div>
    </>
  );
};

export default UseEffectOneComp;
