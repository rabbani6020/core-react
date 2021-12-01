import React, { useState } from "react";

const useInput = (initialValue, type) => {
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

export default useInput;
