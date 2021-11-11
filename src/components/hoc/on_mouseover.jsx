import React from "react";
import WithCounter from "./with_counter";

class OnMouseOver extends React.Component {
  render() {
    const { count, incrementHandler, name, age } = this.props;
    console.log(this.props);
    return (
      <>
        <h2 className="d-2">
          Name is {name}. Age is {age}
        </h2>
        <h2 className="d-2" onMouseOver={incrementHandler}>
          Hovered {count} times
        </h2>
      </>
    );
  }
}

export default WithCounter(OnMouseOver, 10);
