import React, { Component } from "react";

import ChildrenComp from "./children";
import GrandChildren from "./grandchildren";

class ParentComp extends Component {
  constructor() {
    super();
    this.state = {
      name: "Md. Golam Rabbani",
      age: 25,
    };

    console.log(`I am from parent constructor`);
  }

  static getDerivedStateFromProps() {
    console.log(`I am from parent getDerivedStateFromPorps`);
    return null;
  }

  componentDidMount() {
    console.log(`I am from parent componentDidMount`);
  }

  render() {
    const { name, age } = this.state;
    console.log(`I am from parent component render`);
    return (
      <>
        <div className="profile">
          <h2 className="name">Name: {name}</h2>
          <p className="age">Age: {age}</p>
        </div>
      </>
    );
  }
}

export default ParentComp;
