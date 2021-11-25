import React, { useState } from "react";
import Button from "./button_comp";
import ShowCount from "./show_count";
import Title from "./title";

const HooksComp1 = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const incrementOne = () => {
    setCount1((prevState) => prevState + 1);
  };
  const incrementFive = () => {
    setCount2((prevState) => prevState + 5);
  };

  return (
    <>
      <div className="text-center py-4">
        <Title>Component Life Cylce with Hooks</Title>
        <div className="row g-5 justify-content-center">
          <div className="col-lg-4">
            <div className="card py-4">
              <ShowCount>{count1}</ShowCount>
              <p>
                <Button incrementHandler={incrementOne}>Increment One</Button>
              </p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card py-4">
              <ShowCount>{count2}</ShowCount>
              <p>
                <Button incrementHandler={incrementFive}>Increment Five</Button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HooksComp1;
