import React from "react";
import ProductContext from "../../context/ProductContext";
import CompB from "./CompB";

class CompA extends React.Component {
  static contextType = ProductContext;

  render() {
    return (
      <>
        <h1>Price from CompA</h1>
        <h2>Price is - {this.context.price}</h2>
        <CompB />
      </>
    );
  }
}

export default CompA;
