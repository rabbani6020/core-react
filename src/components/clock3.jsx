import React, { useState, useEffect } from "react";

const Clock3 = () => {
  const [date, setDate] = useState(new Date());

  const tick = () => {
    setDate(new Date());
  };

  useEffect(() => {
    setInterval(() => tick(), 1000);
    clearInterval(tick())
  });

  return (
    <>
      <h2>{date.toLocaleTimeString()}</h2>
    </>
  );
};

export default Clock3;
