import React from "react";

const WithCounter = (NewComponent, times) => {
  return class CounterDemo extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0,
      };
    }

    incrementHandler = () => {
      this.setState((prevState) => ({
        count: prevState.count + times,
      }));
    };

    render() {
      const { count } = this.state;
      console.log(this.props);
      return (
        <>
          <NewComponent
            count={count}
            incrementHandler={this.incrementHandler}
            {...this.props}
          />
        </>
      );
    }
  };
};

export default WithCounter;
