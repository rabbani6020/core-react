import { connect } from "react-redux";
import { buyLaptop } from "../../../redux/laptop/laptop_actions";
const ReduxCompDemoTwo = ({ totalLaptop, buyLaptop }) => {
  return (
    <>
      <div>
        <h3>Stock from comp two {totalLaptop}</h3>
        <button className="btn btn-primary" onClick={() => buyLaptop()}>
          Buy Laptop
        </button>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    totalLaptop: state.laptop.totalLaptop,
  };
};

const mapDispatchProps = (dispatch) => {
  return {
    buyLaptop: () => dispatch(buyLaptop()),
  };
};

export default connect(mapStateToProps, mapDispatchProps)(ReduxCompDemoTwo);
