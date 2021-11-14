import React from "react";

class RenderPropsComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  incrementHandler = (countTimes) => {
    this.setState((prevState) => {
      return {
        count: prevState.count + countTimes,
      };
    });
  };

  render() {
    return <>{this.props.render(this.state.count, this.incrementHandler)}</>;
  }
}

export default RenderPropsComp;
