import React, { Component } from "react";

class ShowColor extends Component {
  render() {
    const { color } = this.props;

    if (color === "Red") {
      throw new Error("This color is not a valid color");
    }

    return (
      <>
        <h2 className="d-1">Color is : {color}</h2>
      </>
    );
  }
}

export default ShowColor;
