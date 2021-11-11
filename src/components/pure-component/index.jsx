import React, { Component } from "react";
import NormalClassComp from "./normalClassComp";
import NormalFunctionalComp from "./normalFunctionalComp";
import PureComp from "./pureComp";

class PureCompDemo extends Component {
  constructor() {
    super();
    this.state = {
      name: "Golam Rabbani",
      age: 25,
    };
    this.searchInput = React.createRef();
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: "Mobidul Haque Rabbani",
        age: 100,
      });
    }, 3000);

    // this.searchInput.current.focus()
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (JSON.stringify(nextState) !== JSON.stringify(this.state)) {
      return true;
    }
    return false;
  }

  render() {
    console.log("PureCompDemo");
    const { name, age } = this.state;
    return (
      <>
        <NormalClassComp name={name} age={age} />
        <PureComp name={name} age={age} />
        <NormalFunctionalComp name={name} age={age} />
        {/* <input
          type="text"
          placeholder="Enter your keyword"
          ref={this.searchInput}
        /> */}
        <input type="text" placeholder="Enter your keyword" autoFocus/>
      </>
    );
  }
}

export default PureCompDemo;
