import React, { Component } from "react";
import OnClick from "./on_click";
import OnMouseOver from "./on_mouseover";

class Hoc extends Component {
  render() {
    return (
      <div className="py-5">
        <OnClick name="Md. Golam Rabbani" age="25" />
        <OnMouseOver name="Shahin Ahmed Shagor" age="24" />
      </div>
    );
  }
}

export default Hoc;
