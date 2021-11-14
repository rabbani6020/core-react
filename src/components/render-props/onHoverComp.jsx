import React from "react";

class OnHoverComp extends React.Component {
  render() {
    return (
      <>
        <h2 className="d-2" onMouseOver={() => this.props.incrementHandler(20)}>
          Clicked {this.props.count} times
        </h2>
      </>
    );
  }
}

export default OnHoverComp;
