import React, { Component } from "react";

class Uncontrolled extends Component {
  constructor(props) {
    super(props);
    this.nameRef = React.createRef();
    this.emailRef = React.createRef();
  }

  submitHandler = (event) => {
    event.preventDefault();
    let name, email;
    name = this.nameRef.current.value;
    email = this.emailRef.current.value;

    console.log(name, email);
  };

  render() {
    return (
      <>
        <form className="form">
          <div className="form-group mb-3">
            <label htmlFor="name" className="d-block">
              Name
            </label>
            <input type="text" name="name" id="name" ref={this.nameRef} />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="email" className="d-block">
              Email
            </label>
            <input type="email" name="email" ref={this.emailRef} />
          </div>
          <div className="form-group mb-3">
            <button className="btn btn-primary" onClick={this.submitHandler}>
              Submit
            </button>
          </div>
        </form>
      </>
    );
  }
}

export default Uncontrolled;
