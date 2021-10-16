import React, { Component } from "react";

class ConRendering extends Component {
  constructor() {
    super();
    this.state = {
      isLogedIn: true,
    };
  }

  logInHandler = () => {
    this.setState({
      isLogedIn: false,
    });
  };
  logOutHandler = () => {
    this.setState({
      isLogedIn: true,
    });
  };

  render() {
    const { isLogedIn } = this.state;
    const { logInHandler, logOutHandler } = this;

    return (
      <>
        <div className="login-panel">
          <div className="panel-heading">
            <h2 className="title">
              {isLogedIn
                ? "Welcome to our dashboard"
                : "You are not authenticte user"}
            </h2>
          </div>
          <div className="panel-button">
            <button
              className="btn btn-secondary"
              onClick={isLogedIn ? logInHandler : logOutHandler}
            >
              {isLogedIn ? "Log Out" : "Log In"}
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default ConRendering;
