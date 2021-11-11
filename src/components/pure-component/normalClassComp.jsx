import React from "react";

class NormalClassComp extends React.Component {
  render() {
    console.log("NormalClassComp");
    const { name, age } = this.props;
    return (
      <>
        <h2>Name : {this.props.name} </h2>
        <h2>Age : {this.props.age} </h2>
      </>
    );
  }
}

export default NormalClassComp;
