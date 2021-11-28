import React, { useContext } from "react";
import ThemeContext from "./context/theme_context";

const ComponentC = () => {
  const theme = useContext(ThemeContext);

  return (
    <>
      <div>
        <h2>Component C</h2>
        {theme}
      </div>
    </>
  );
};

export default ComponentC;
