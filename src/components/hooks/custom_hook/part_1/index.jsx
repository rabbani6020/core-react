import React, { useEffect, useRef, useState } from "react";
import useInput from "./use_input";

const CustomHookOne = () => {
  const [mail, bindMail, resetMail] = useInput("", "email");
  const [password, bindPassword, resetPassword] = useInput("", "password");

  const mailRef = useRef(null);

  useEffect(() => {
    mailRef.current.focus();
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(mail);
    console.log(password);
    resetMail(password);
    resetPassword();
  };
  return (
    <>
      <div className="p-4 text-center">
        <h2>Custom hook part One</h2>
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <form className="form_1 card p-5" onClick={submitHandler}>
              <div className="form-group mb-3">
                <input
                  className="form-control"
                  placeholder="Enter your email"
                  {...bindMail}
                  ref={mailRef}
                />
              </div>
              <div className="form-group mb-3">
                <input
                  className="form-control"
                  placeholder="Enter your password"
                  {...bindPassword}
                />
              </div>
              <div className="form-group">
                <button type="submit" className="btn btn-success w-100" >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomHookOne;
