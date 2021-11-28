import React from "react";
import ComponentA from "./component_A";
import { ThemeProvider } from "./context/theme_context";


const UseContextDemoTwo = () => {
  return (
    <>
      <ThemeProvider value="dark">
        <h2>UseContextDemoTwo </h2>
        <ComponentA />
      </ThemeProvider>
    </>
  );
};

export default UseContextDemoTwo;
