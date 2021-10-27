import React, { Component } from "react";
import ChildrenComp from "./children";
import GrandChildren from "./grandchildren";
import ParentComp from "./parentComp";

class LifeCycleSmart extends Component {
  render() {
    return (
      <>
        <ParentComp />
        <ChildrenComp />
        <GrandChildren />
      </>
    );
  }
}

export default LifeCycleSmart;
