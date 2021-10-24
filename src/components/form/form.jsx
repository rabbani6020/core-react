import React, { Component } from "react";

import Styles from "./form.module.scss";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Golam Rabbani",
      email: "rabbani.cse.69@gmail.com",
      password: "1234",
      language: "javascript",
      //   hobbies: {
      //     isCode: false,
      //     isPlay: false,
      //     isTravel: false,
      //   },

      isCode: false,
      isPlay: false,
      isTravel: false,
    };
  }

  onChangeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  onChangeCheckBoxHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    const { name, email, password, language, isCode, isPlay, isTravel } = this.state;
    return (
      <>
        <div className="form-wrapper py-5">
          <div className="row">
            <div className="col-lg-6">
              <form className={Styles.form}>
                <div className="form-group mb-3">
                  <label className="form-label d-block" htmlFor="name">
                    Name
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    id="name"
                    placeholder="Enter Your Name"
                    name="name"
                    value={name}
                    onChange={this.onChangeHandler}
                  />
                </div>
                <div className="form-group mb-3">
                  <label className="form-label d-block" htmlFor="email">
                    Email
                  </label>
                  <input
                    className="form-control"
                    type="email"
                    id="email"
                    placeholder="Enter Your Email"
                    name="email"
                    value={email}
                    onChange={this.onChangeHandler}
                  />
                </div>
                <div className="form-group mb-3">
                  <label className="form-label d-block" htmlFor="password">
                    Password
                  </label>
                  <input
                    className="form-control"
                    type="password"
                    id="password"
                    placeholder="Enter Your Password"
                    name="password"
                    value={password}
                    onChange={this.onChangeHandler}
                  />
                </div>
                <div className="form-group mb-3">
                  <label className="form-label d-block" htmlFor="language">
                    Language
                  </label>
                  <select
                    className="form-select"
                    id="language"
                    name="language"
                    value={language}
                    onChange={this.onChangeHandler}
                  >
                    <option>Javascript</option>
                    <option>Php</option>
                    <option>Python</option>
                  </select>
                </div>
                <div className="form-group mb-3">
                  <label className="form-label d-block">Hobbies</label>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value={isCode}
                      name="isCode"
                      id="coding"
                      onChange={this.onChangeHandler}
                    />
                    <label className="form-check-label" htmlFor="coding">
                      Coding
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value={isPlay}
                      name="isPlay"
                      id="playing"
                      onChange={this.onChangeHandler}
                    />
                    <label className="form-check-label" htmlFor="playing">
                      Playing
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value={isTravel}
                      name="isTravel"
                      id="travelling"
                      onChange={this.onChangeHandler}
                    />
                    <label className="form-check-label" htmlFor="travelling">
                      Travelling
                    </label>
                  </div>
                </div>
                <div className="form-group mb-3">
                  <label className="form-label d-block">Gender</label>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="gender"
                      id="male"
                    />
                    <label className="form-check-label" htmlFor="male">
                      Male
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="gender"
                      id="female"
                    />
                    <label className="form-check-label" htmlFor="female">
                      Female
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="gender"
                      id="other"
                    />
                    <label className="form-check-label" htmlFor="other">
                      Other
                    </label>
                  </div>
                </div>
                <div className="form-group ">
                  <button type="submit" className="btn btn-primary btn-md">
                    Submit
                  </button>
                </div>
              </form>
            </div>
            <div className="col-lg-6">
              <div className={Styles.showOutputBox}>
                <p className={Styles.showOutput}>{name}</p>
                <p className={Styles.showOutput}>{email}</p>
                <p className={Styles.showOutput}>{password}</p>
                <p className={Styles.showOutput}>{language}</p>
                <p className={Styles.showOutput}>
                  {(isPlay, isCode, isTravel)}
                </p>
                
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Form;
