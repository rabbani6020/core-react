import React, { useReducer } from "react";

const initialStates = 0;

const reducer = (state, action) => {
  switch (action.type) {
    case "increment": {
      return state + action.countStep;
    }
    case "decrement": {
      return state - action.countStep;
    }
    case "reset": {
      return initialStates;
    }
    default: {
      return state;
    }
  }
};

const UseReducerDemoComp = () => {
  const [count, dispatch] = useReducer(reducer, initialStates);
  return (
    <>
      <div className="text-center">
        <h2>Use Reduer Demo Component</h2>
        <h2>{count}</h2>
        <p className="d-flex align-items-center justify-content-center gap-2">
          <button
            className="btn btn-primary"
            onClick={() => dispatch({ type: "increment", countStep: 1 })}
          >
            Increment
          </button>

          <button
            className="btn btn-success"
            onClick={() => dispatch({ type: "decrement", countStep: 1 })}
          >
            Decrement
          </button>

          <button
            className="btn btn-danger"
            onClick={() => dispatch({ type: "reset" })}
          >
            Reset
          </button>
        </p>
      </div>
    </>
  );
};

export default UseReducerDemoComp;
