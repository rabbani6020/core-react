import React from "react";

class Clock1 extends React.Component {
  state = {
    date: new Date(),
    timeString: "en-US",
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

  toggleHandler = () => {
    this.setState({
      timeString: "bn-BD",
    });
  };

  render() {
    const { date, timeString } = this.state;

    return (
      <>
        <div className="clock-wrapper">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h2>{date.toLocaleTimeString(timeString)}</h2>
                <div className="btn-wrap my-3">
                  <button
                    className="btn btn-primary"
                    onClick={this.toggleHandler}
                  >
                    Toggle Button
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Clock1;
