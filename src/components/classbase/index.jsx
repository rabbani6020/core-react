import React from "react";

class ClassComponent extends React.Component {
  
  render() {
    return (
      <>
        <div className="class-base bg-danger section-padding">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h2> Hi i am from {this.props.name} component</h2>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ClassComponent;
