import React, { Component } from "react";

class LogInControl extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogedIn: true,
    };
  }

  logInHandler = () => {
    this.setState((prevState) => ({
      isLogedIn : !prevState.isLogedIn
    }));
  };

  render() {
    const { isLogedIn } = this.state;
    return (
      <>
        <div className="login-panel py-4">
          <div className="login-panel-heading">
            <h2>
              {isLogedIn
                ? "Welcome to our Dashboard"
                : "You are not authenticate user"}
            </h2>
          </div>
          <div className="login-panel-button">
            <button className="btn btn-success" onClick={this.logInHandler}>
              {isLogedIn ? "Log Out" : "Log In"}
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default LogInControl;
