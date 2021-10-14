import React from "react";

class Counter1 extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  handleIncrement = (e) => {
    e.preventDefault();
    this.setState({
      count: this.state.count + 1,
    });
  };

  handleDecrement = (e) => {
    e.preventDefault();
    this.setState({
      count: this.state.count - 1,
    });
  };

  render() {
    const { count } = this.state;

    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mx-auto">
              <div className="counter py-2 text-center">
                <h2 className="count-value">{count}</h2>
                <div className="btn-list d-flex justify-content-center align-items-center gap-2">
                  <button
                    className="btn btn-primary"
                    onClick={this.handleIncrement}
                    disabled={count == 10 ? true : false}
                  >
                    Increment
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={this.handleDecrement}
                    disabled={count == 0 ? true : false}
                  >
                    Decrement
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

export default Counter1;


