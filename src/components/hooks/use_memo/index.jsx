import React, { useState, useMemo } from "react";

const UseMemoDemo = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const increment1 = () => {
    setCount1(count1 + 1);
  };
  const increment2 = () => {
    setCount2(count2 + 1);
  };

  const testInc = useMemo(() => {
    let i = 0;
    while (i < 500000000) i++;
    return count1 + 20;
  }, [count1]);

  return (
    <>
      <div className="py-5">
        <h2 className="text-center mb-3">UseMemoDemo</h2>
        <h2 className="text-center mb-3">
          test Counter Function return value {testInc}
        </h2>
        <div className="row justify-content-center">
          <div className="col-lg-5">
            <div className="card p-4 shadow">
              <h2>Counter 01 = {count1}</h2>
              <button className="btn btn-primary" onClick={increment1}>
                Inc 01
              </button>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="card p-4 shadow">
              <h2>Counter 01 = {count2}</h2>
              <button className="btn btn-danger" onClick={increment2}>
                Inc 02
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UseMemoDemo;
