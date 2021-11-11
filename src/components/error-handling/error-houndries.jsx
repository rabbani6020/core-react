import React, { Component } from "react";

class ErrorBoundries extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError() {
    return {
      hasError: true,
    };
  }

  render() {
    const { hasError } = this.state;

    if (hasError) {
      return <h2 className="d-1">Some error has occured</h2>;
    }
    return this.props.children;
  }
}

export default ErrorBoundries;
