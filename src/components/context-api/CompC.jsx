import React from "react";

import { ProductConsumer } from "../../context/ProductContext";

class CompC extends React.Component {
  render() {
    return (
      <>
        <h1>Price From CompC</h1>
        <ProductConsumer>
          {({ productName, price }) => {
            return (
              <>
                <h2>
                  ProcutName is - {productName}. Price is - {price}
                </h2>
              </>
            );
          }}
        </ProductConsumer>
      </>
    );
  }
}

export default CompC;
