import React, { Component } from "react";

import { Link } from "react-router-dom";

import Styles from "./register-form.module.scss";

class RegistrationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      userName: "",
      email: "",
      password: "",
      mobileNo: "",
      language: "",
      expertise: "",
      hobbies: [],
      gender: false,
      terms: false,
    };
    this.fileRef = React.createRef();
    this.imageRef = React.createRef();
  }

  onChangeHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  multipleCheckboxHandler = (event) => {
    if (event.target.checked) {
      this.setState({
        hobbies: [...this.state.hobbies, event.target.value],
      });
    } else {
      this.setState({
        hobbies: this.state.hobbies.filter(
          (hobby) => hobby !== event.target.value
        ),
      });
    }
  };

  singleCheckiboxHandler = (event) => {
    if (event.target.checked) {
      this.setState((prevState) => ({
        terms: !prevState.terms,
      }));
    } else {
      this.setState((prevState) => ({
        terms: !prevState.terms,
      }));
    }
  };

  radioHandler = (event) => {
    if (event.target.checked) {
      this.setState({
        gender: event.target.value,
      });
    }
  };

  submitHandler = (event) => {
    event.preventDefault();
    console.log(this.state);

    let image, file;
    image = this.imageRef.current.value;
    file = this.fileRef.current.value;
    console.log(image);
    console.log(file);
  };

  render() {
    const {
      firstName,
      lastName,
      userName,
      email,
      password,
      mobileNo,
      message,
      language,
      expertise,
      hobbies,
      gender,
      terms,
    } = this.state;
    return (
      <>
        <div className={Styles.userFormWrapper}>
          <form className={`${Styles.form} registerForm`}>
            <div className={Styles.formGroup}>
              <label className={Styles.label} htmlFor="firstName">
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                className={Styles.formControl}
                id="firstName"
                placeholder="Enter Your First Name"
                value={firstName}
                onChange={this.onChangeHandler}
              />
            </div>
            {/* end formGroup */}

            <div className={Styles.formGroup}>
              <label className={Styles.label} htmlFor="lastName">
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                className={Styles.formControl}
                id="lastName"
                placeholder="Enter Your Last Name"
                value={lastName}
                onChange={this.onChangeHandler}
              />
            </div>
            {/* end formGroup */}

            <div className={Styles.formGroup}>
              <label className={Styles.label} htmlFor="userName">
                Username
              </label>
              <input
                type="text"
                name="userName"
                className={Styles.formControl}
                id="userName"
                placeholder="Enter Your Username"
                value={userName}
                onChange={this.onChangeHandler}
              />
            </div>
            {/* end formGroup */}

            <div className={Styles.formGroup}>
              <label className={Styles.label} htmlFor="email">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                className={Styles.formControl}
                id="email"
                placeholder="Enter Your Email"
                value={email}
                onChange={this.onChangeHandler}
              />
            </div>
            {/* end formGroup */}

            <div className={Styles.formGroup}>
              <label className={Styles.label} htmlFor="password">
                Password
              </label>
              <input
                type="password"
                name="password"
                className={Styles.formControl}
                id="password"
                placeholder="Enter Your Password"
                value={password}
                onChange={this.onChangeHandler}
              />
            </div>
            {/* end formGroup */}

            <div className={Styles.formGroup}>
              <label className={Styles.label} htmlFor="mobileNo">
                Mobile No
              </label>
              <input
                type="text"
                name="mobileNo"
                className={Styles.formControl}
                id="mobileNo"
                placeholder="Enter Your Mobile No"
                value={mobileNo}
                onChange={this.onChangeHandler}
              />
            </div>
            {/* end formGroup */}

            <div className={Styles.formGroup}>
              <label className={Styles.label} htmlFor="message">
                Message
              </label>
              <textarea
                name="message"
                className={`${Styles.textArea} ${Styles.formControl}`}
                id="message"
                placeholder="Enter Message"
                value={message}
                onChange={this.onChangeHandler}
              />
            </div>
            {/* end formGroup */}

            <div className={`${Styles.formGroup}`}>
              <label className={Styles.label}>Your Hobbies</label>

              <div className={Styles.singleCheckbox}>
                <input
                  type="checkbox"
                  name="codeing"
                  id="codeing"
                  value="codeing"
                  onChange={this.multipleCheckboxHandler}
                />
                <label className={Styles.inlineLabel} htmlFor="codeing">
                  Codeing
                </label>
              </div>
              <div className={Styles.singleCheckbox}>
                <input
                  type="checkbox"
                  name="biking"
                  id="biking"
                  value="biking"
                  onChange={this.multipleCheckboxHandler}
                />
                <label className={Styles.inlineLabel} htmlFor="biking">
                  Biking
                </label>
              </div>
              <div className={Styles.singleCheckbox}>
                <input
                  type="checkbox"
                  name="traveling"
                  id="traveling"
                  value="traveling"
                  onChange={this.multipleCheckboxHandler}
                />
                <label className={Styles.inlineLabel} htmlFor="traveling">
                  Traveling
                </label>
              </div>
              <div className={Styles.singleCheckbox}>
                <input
                  type="checkbox"
                  name="learnjs"
                  id="learnjs"
                  value="learnjs"
                  onChange={this.multipleCheckboxHandler}
                />
                <label className={Styles.inlineLabel} htmlFor="learnjs">
                  Learn Js
                </label>
              </div>
            </div>
            {/* end formGroup */}

            <div className={Styles.formGroup}>
              <label className={Styles.label}>Language</label>
              <select
                name="language"
                id="language"
                value={language}
                onChange={this.onChangeHandler}
                className={Styles.formControl}
              >
                <option value="javascript">JavaScript</option>
                <option value="php">Php</option>
                <option value="python">Python</option>
                <option value="go">GO</option>
              </select>
            </div>
            {/* end formGroup */}

            <div className={Styles.formGroup}>
              <label className={Styles.label}>Expertise</label>
              <select
                name="expertise"
                id="expertise"
                value={expertise}
                onChange={this.onChangeHandler}
                className={Styles.formControl}
              >
                <option value="html">Html</option>
                <option value="css">Css</option>
                <option value="bootstarp">Bootstarp</option>
                <option value="tailwind">Tailwind</option>
              </select>
            </div>
            {/* end formGroup */}

            <div className={Styles.formGroup}>
              <label className={Styles.label} htmlFor="image">
                Upload photo
              </label>
              <input type="file" name="image" id="image" ref={this.imageRef} />
            </div>
            {/* end formGroup */}

            <div className={Styles.formGroup}>
              <label className={Styles.label} htmlFor="image">
                Upload file
              </label>
              <input type="file" name="image" id="image" ref={this.fileRef} />
            </div>
            {/* end formGroup */}

            <div className={`${Styles.formGroup} ${Styles.flex100}`}>
              <label className={Styles.label}>Gender</label>
              <div className={Styles.inlineFormGroup}>
                <div className={Styles.inlineForm}>
                  <input
                    type="radio"
                    name="gender"
                    value="male"
                    id="male"
                    onChange={this.radioHandler}
                  />
                  <label className={Styles.inlineLabel} htmlFor="male">
                    Male
                  </label>
                </div>
                <div className={Styles.inlineForm}>
                  <input
                    type="radio"
                    name="gender"
                    value="female"
                    id="female"
                    onChange={this.radioHandler}
                  />
                  <label className={Styles.inlineLabel} htmlFor="female">
                    Female
                  </label>
                </div>
                <div className={Styles.inlineForm}>
                  <input
                    type="radio"
                    name="gender"
                    value="custom"
                    id="custom"
                    onChange={this.radioHandler}
                  />
                  <label className={Styles.inlineLabel} htmlFor="custom">
                    Custom
                  </label>
                </div>
              </div>
            </div>
            {/* end formGroup */}

            <div className={`${Styles.formGroup} ${Styles.flex100}`}>
              <input
                type="checkbox"
                name="terms"
                id="terms"
                checked={terms}
                onChange={this.singleCheckiboxHandler}
              />
              <label className={Styles.inlineLabel} htmlFor="terms">
                I agree all terms and Condition
              </label>
            </div>
            {/* end formGroup */}

            <div className={`${Styles.formGroup} ${Styles.flex100}`}>
              <button className={Styles.submitBtn} onClick={this.submitHandler}>
                Register
              </button>
            </div>
            {/* end formGroup */}

            <div className={`${Styles.formFooter}`}>
              <p className={Styles.formFooterText}>
                If you already Registered , Please
                <Link to="/login">Sign In</Link>
              </p>
            </div>
            {/* end formGroup */}
          </form>
          {/* end form */}
        </div>
      </>
    );
  }
}

export default RegistrationForm;
