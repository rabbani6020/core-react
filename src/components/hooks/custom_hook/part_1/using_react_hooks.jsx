import React, { useState } from "react";

const CustomHookOne = () => {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(mail);
    console.log(password);
    setMail("");
    setPassword("");
  };
  return (
    <>
      <div className="p-4">
        <h2>Custom hook part One</h2>
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <form className="form_1 card p-4" onClick={submitHandler}>
              <div className="form-group mb-3">
                <input
                  className="form-control"
                  type="text"
                  value={mail}
                  onChange={(e) => setMail(e.target.value)}
                  placeholder="Enter your email"
                />
              </div>
              <div className="form-group mb-3">
                <input
                  className="form-control"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                />
              </div>
              <div className="form-group mb-3">
                <button type="submit" className="btn btn-success">
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
