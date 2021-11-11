import React from "react";

class OnHoverComp extends React.Component {
  render() {
    return (
      <>
        <h2 className="d-2" onMouseOver={this.props.incrementHandler}>
          Clicked {this.props.count} times
        </h2>
      </>
    );
  }
}

export default OnHoverComp;
