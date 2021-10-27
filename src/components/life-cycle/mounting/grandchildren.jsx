import React, { Component } from "react";

class GrandChildren extends Component {
  constructor() {
    super();
    this.state = {
      name: "Unknown Buri",
      age: 3,
    };

    console.log(`I am from GrandChildren constructor `);
  }

  static getDerivedStateFromProps() {
    console.log(`I am from GrandChildren getDerivedStateFromProps`);
    return null;
  }

  componentDidMount() {
    console.log(`I am from GrandChildren ComponentDidMount`);
  }

  render() {
    const { name, age } = this.state;
    console.log(`I am from Grandchildren render`);
    return (
      <>
        <div className="profile">
          <h2 className="name">GrandChildren Name: {name}</h2>
          <p className="age">Age : {age}</p>
        </div>
      </>
    );
  }
}

export default GrandChildren;
