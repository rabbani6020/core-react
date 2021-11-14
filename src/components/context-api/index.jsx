import React from "react";
import CompA from "./CompA";

import ProductContext from "../../context/ProductContext";
import { ProductProvider, ProductConsumer } from "../../context/ProductContext";

class ContextApiDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productName: "Trimer",
      price: "1300",
    };
  }
  render() {
    return (
      <>
        <ProductProvider value={this.state}>
          <CompA />
        </ProductProvider>
      </>
    );
  }
}

export default ContextApiDemo;
