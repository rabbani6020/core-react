import React, { PureComponent } from "react";

class PureComp extends PureComponent {
  render() {
    console.log("PureComp");
    const { name, age } = this.props;
    return (
      <>
        <h2>Name : {this.props.name} </h2>
        <h2>Age : {this.props.age} </h2>
      </>
    );
  }
}

export default PureComp;
