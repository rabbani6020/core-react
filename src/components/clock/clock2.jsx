import React from "react";

class Clock2 extends React.Component {
  constructor() {
    super();
    this.state = {
      date: new Date(),
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

  render() {
    const { date } = this.state;
    return (
      <>
        <h2>{date.toLocaleTimeString("en-US")}</h2>
      </>
    );
  }
}

export default Clock2;
