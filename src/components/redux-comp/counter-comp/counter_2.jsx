/**
 * state and dispatch using mapStateProps and mapDispatchProps
 */

import { connect } from "react-redux";
import {
  countDecrement,
  countIncrement,
  countReset,
} from "../../../redux/counter/count_actions";

const CounterTwoDemo = ({
  count,
  countIncrement,
  countDecrement,
  countReset,
}) => {
  return (
    <>
      <div>
        <h3>Counter with Redux - Demo Two</h3>
        <h3>Count:{count}</h3>
        <p className="d-flex align-items-center gap-2">
          <button className="btn btn-success" onClick={countIncrement}>
            Increment
          </button>
          <button className="btn btn-primary" onClick={countDecrement}>
            Decrement
          </button>
          <button className="btn btn-danger" onClick={countReset}>
            Reset
          </button>
        </p>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    count: state.counter.count,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    countIncrement: () => dispatch(countIncrement()),
    countDecrement: () => dispatch(countDecrement()),
    countReset: () => dispatch(countReset()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CounterTwoDemo);
