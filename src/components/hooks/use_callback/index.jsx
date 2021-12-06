import React, { useState, useCallback } from "react";
import DecrementButton from "./decrement_button";
import Greeting from "./greeting";
import IncrementButton from "./increment_button";
import ResetButton from "./reset_button";
import ShowCount from "./show_count";

const UseCallBackDemo = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const incrementHandler1 = useCallback(() => {
    setCount1(count1 + 1);
  }, [count1]);
  const decrementHandler1 = useCallback(() => {
    setCount1(count1 - 1);
  }, [count1]);
  const incrementHandler2 = useCallback(() => {
    setCount2(count2 + 1);
  }, [count2]);
  const decrementHandler2 = useCallback(() => {
    setCount2(count2 - 1);
  }, [count2]);
  const resettHandler1 = useCallback(() => {
    setCount1(0);
  }, [count1]);
  const resettHandler2 = useCallback(() => {
    setCount2(0);
  }, [count2]);

  return (
    <>
      <div className="py-5">
        <h2 className="text-center text-decoration-underline">useCallback Demo</h2>
        <Greeting />
        <div className="row">
          <div className="col-lg-6">
            <div className="card p-4 shadow">
              <ShowCount count={count1}>Counter 01</ShowCount>
              <div className="d-flex align-items-center gap-3">
                <IncrementButton incrementHandler={incrementHandler1}>
                  Inc Button 01
                </IncrementButton>
                <DecrementButton decrementHandler={decrementHandler1}>
                  Dec Button 01
                </DecrementButton>
                <ResetButton resetHandler={resettHandler1}>
                  Res Button 01
                </ResetButton>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="card p-4 shadow">
              <ShowCount count={count2}>Counter 02</ShowCount>
              <div className="d-flex align-items-center gap-3">
                <IncrementButton incrementHandler={incrementHandler2}>
                  Inc Button 02
                </IncrementButton>
                <DecrementButton decrementHandler={decrementHandler2}>
                  Dec Button 02
                </DecrementButton>
                <ResetButton resetHandler={resettHandler2}>
                  Res Button 02
                </ResetButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UseCallBackDemo;
