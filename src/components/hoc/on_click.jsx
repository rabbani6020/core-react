import React, { Component } from "react";
import WithCounter from "./with_counter";

class OnClick extends Component {
  render() {
    const { count, incrementHandler, name, age } = this.props;
    console.log(this.props);
    return (
      <>
        <h2 className="d-2">
          Name is : {name} . Age is {age}
        </h2>
        <button className="btn btn-success" onClick={incrementHandler}>
          Clicked {count} times
        </button>
      </>
    );
  }
}

export default WithCounter(OnClick, 20);
