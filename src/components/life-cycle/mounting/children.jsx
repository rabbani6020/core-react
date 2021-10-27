import React, { Component } from "react";

import GrandChildren  from "./grandchildren";

class ChildrenComp extends Component {
  constructor() {
    super();
    this.state = {
      name: "Meftahul Jannat Mamoni",
      age: 18,
    };

    console.log(`I am from children constructor`);
  }

  static getDerivedStateFromProps() {
    console.log(`I am from children getDerivedStateFromProps`);
    return null;
  }

  componentDidMount() {
    console.log(`I am from children componentDidMount`);
  }

  render() {
    const { name, age } = this.state;
    console.log(`I am from children render `);

    return (
      <>
        <div className="profile">
          <h2 className="name">Children Name: {name}</h2>
          <p className="age">Children Name: {age}</p>
        </div>
      </>
    );
  }
}

export default ChildrenComp;
