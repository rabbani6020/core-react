import React from "react";
import CompC from "./CompC";

import ProductContext from "../../context/ProductContext";

class CompB extends React.Component {
  render() {
    return (
      <>
        <h1>Price from CompB</h1>
        <h2>Price is - {this.context.price} </h2>
        <CompC />
      </>
    );
  }
}

CompB.contextType = ProductContext;

export default CompB;
