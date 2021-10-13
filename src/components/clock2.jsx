import React from "react";

class Clock2 extends React.Component {
  state = {
    date: new Date(),
  };

  tick = () => {
    this.setState({
      date: new Date(),
    });
  };

  componentDidMount() {
    setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.tick());
  }

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
