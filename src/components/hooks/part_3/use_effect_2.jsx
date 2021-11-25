import React, { useState, useEffect } from "react";

const UseEffectTwoComp = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const moveHandler = (e) => {
    setX(e.clientX);
    setY(e.clientY);
    console.log("Hellow Dunia");
  };

  useEffect(() => {
    window.addEventListener("mousemove", moveHandler);

    return () => {
      window.removeEventListener("mousemove", moveHandler);
    };
  }, []);

  return (
    <>
      <h2>
        X-{x}--- y-{y}
      </h2>
    </>
  );
};

export default UseEffectTwoComp;
