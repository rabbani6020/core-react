import React, { useState } from "react";

const UseInput = (initialValue, type) => {
  const [value, setValue] = useState("");

  const reset = () => {
    setValue(initialValue);
  };

  const bind = {
    type,
    value,
    onChange: (e) => setValue(e.target.value),
  };

  return [value, bind, reset];
};

export default UseInput;
