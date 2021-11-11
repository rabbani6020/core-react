import React, { Component } from "react";
import ErrorBoundries from "./error-houndries";
import ShowColor from "./show-color";

class ErrorHanding extends Component {
  render() {
    return (
      <>
        <div className="card p-5">
          <ErrorBoundries>
            <ShowColor color="Black" />
          </ErrorBoundries>
          <ErrorBoundries>
            <ShowColor color="Red" />
          </ErrorBoundries>
          <ErrorBoundries>
            <ShowColor color="Blue" />
          </ErrorBoundries>
        </div>
      </>
    );
  }
}

export default ErrorHanding;
