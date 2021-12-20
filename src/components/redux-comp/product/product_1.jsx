import { useDispatch, useSelector, connect } from "react-redux";
import { buyLaptop } from "../../../redux/laptop/laptop_actions";

const ReduxCompDemoOne = () => {
  const dispatch = useDispatch();
  const reduxState = useSelector((state) => state);
  const { counter, laptop, theme } = reduxState;

  return (
    <>
      <div>
        <h3>React Redux Demo</h3>
        <h3>Laptop Stock {laptop.totalLaptop}</h3>
        <p>
          <button
            className="btn btn-success"
            onClick={() => dispatch(buyLaptop())}
          >
            Buy Laptop
          </button>
        </p>
      </div>
    </>
  );
};

export default ReduxCompDemoOne;
