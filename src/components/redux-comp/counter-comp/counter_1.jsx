/**
 *
 * State and dispatch using react-redux hooks
 *
 */

import { useSelector, useDispatch } from "react-redux";
import {
  countDecrement,
  countIncrement,
  countReset,
} from "../../../redux/counter/count_actions";

const CounterOneDemo = () => {
  const { counter } = useSelector((state) => state);
  const dispatch = useDispatch();
  return (
    <>
      <div>
        <h3>Counter with Redux - Demo One</h3>
        <h3>Count: {counter.count}</h3>
        <p className="d-flex align-items-center gap-2">
          <button
            className="btn btn-success"
            onClick={() => dispatch(countIncrement())}
          >
            Increment
          </button>
          <button
            className="btn btn-primary"
            onClick={() => dispatch(countDecrement())}
          >
            Decrement
          </button>
          <button
            className="btn btn-danger"
            onClick={() => dispatch(countReset())}
          >
            Reset
          </button>
        </p>
      </div>
    </>
  );
};

export default CounterOneDemo;
