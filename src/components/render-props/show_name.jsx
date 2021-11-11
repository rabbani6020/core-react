import React from "react";

class ShowName extends React.Component {
  render() {
    return (
      <>
        <h2 className="d-2">
          Name is - 
          {this.props.render("Md. Golam Rabbani")}
        </h2>
      </>
    );
  }
}

export default ShowName;
