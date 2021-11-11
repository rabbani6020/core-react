import React from "react";

class OnClickComp extends React.Component {
  render() {
    const { count, incrementHandler } = this.props;
    return (
      <>
        <button className="btn btn-success" onClick={incrementHandler}>Clicked {count} times</button>
      </>
    );
  }
}

export default OnClickComp;
