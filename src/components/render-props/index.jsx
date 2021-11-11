import React from "react";
import OnClickComp from "./OnClick";
import OnHoverComp from "./onHoverComp";

import RenderPropsComp from "./render_props_comp";
import ShowName from "./show_name";

class RenderProps extends React.Component {
  render() {
    return (
      <>
        <RenderPropsComp countTimes={5}
          render={(count, incrementHandler) => {
            return (
              <OnClickComp count={count} incrementHandler={incrementHandler} />
            );
          }}
        />
        <RenderPropsComp countTimes={10}
          render={(count, incrementHandler) => {
            return (
              <OnHoverComp count={count} incrementHandler={incrementHandler} />
            );
          }}
        />
      </>
    );
  }
}

export default RenderProps;
