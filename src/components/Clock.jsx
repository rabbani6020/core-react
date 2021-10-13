import React from "react";

class Clock extends React.Component {
  state = {
    date: new Date(),
  };

  tick = () => {
    this.setState({
      date: new Date(),
    });
  };

  componentDidMount() {
    setInterval(() => {
      this.tick();
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.tick());
  }

  render() {
    const { date } = this.state;

    return (
      <>
        <div className="clock-wrapper">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h2>{date.toLocaleTimeString("bn-BD")}</h2>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Clock;
