import React from "react";
import UseInput from "./useInput";

const ShowForm = () => {
  const [email, bindEmail, resetEmail] = UseInput("", "email");
  const [password, bindPassword, resetPassword] = UseInput("", "password");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(email, password);
    resetEmail();
    resetPassword();
  };

  return (
    <>
      <div className="">
        <h2>Show form component</h2>
        <div className="row">
          <div className="col-lg-5">
            <div className="card p-4 shadow">
              <form className="form" onSubmit={submitHandler}>
                <div className="form-group mb-3">
                  <label className="d-block mb-2">Enter Your Email</label>
                  <input
                    className="form-control"
                    placeholder="Enter Your Name"
                    {...bindEmail}
                  />
                </div>
                <div className="form-group mb-3">
                  <label className="d-block mb-2">Enter Your Email</label>
                  <input
                    className="form-control"
                    placeholder="Enter Your Name"
                    {...bindPassword}
                  />
                </div>
                <div className="form-group">
                  <button type="submit" className="btn btn-primary btn-md">
                    Submit Now
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShowForm;
