import React from "react";

import Child from "./child";

class Clock2 extends React.Component {
  constructor() {
    super();
    this.state = {
      date: new Date(),
      name: "Rabbani",
    };
  }

  componentDidMount() {
    setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.tick());
  }

  tick = () => {
    this.setState({
      date: new Date(),
    });
  };

  nameChangeHandler = () => {
    this.setState({
      name: "Golam ",
    });
  };

  render() {
    const { date, name } = this.state;
    return (
      <>
        <div className="py-5">
          <div className="container">
            <div className="row col-lg-10  mx-auto">
              <h2>{date.toLocaleTimeString("en-US")}</h2>
              <h3>{name}</h3>
              <Child nameChangeHandler={this.nameChangeHandler} />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Clock2;
