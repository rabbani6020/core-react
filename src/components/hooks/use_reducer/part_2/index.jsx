import React, { useReducer } from "react";

const initialStates = {
  counter: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "increment": {
      return { counter: state.counter + 1 };
    }
    case "decrement": {
      return { counter: state.counter - 1 };
    }
    case "reset": {
      return initialStates;
    }
    default: {
      return state;
    }
  }
};

const UseReducerTwo = () => {
  const [count, dispatch] = useReducer(reducer, initialStates);
  return (
    <div className="text-center py-5">
      <h2>Use Reducer Two Demo</h2>
      <h2>Count is ={count.counter}</h2>
      <div className="div btn-group">
        <button
          className="btn btn-primary"
          onClick={() => dispatch({ type: "increment" })}
        >
          Increment
        </button>
        <button
          className="btn btn-secondary"
          onClick={() => dispatch({ type: "decrement" })}
        >
          Decrement
        </button>
        <button
          className="btn btn-danger"
          onClick={() => dispatch({ type: "reset" })}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default UseReducerTwo;
