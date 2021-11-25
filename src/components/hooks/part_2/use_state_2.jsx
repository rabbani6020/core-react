import axios from "axios";
import React, { useState } from "react";

const UseStateComp2 = () => {
  const [user, setUser] = useState({ name: "", age: "" });

  const changeHandler = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  return (
    <>
      <div className="card p-5">
        <div className="card-header">
          <h2>Name: {user.name}</h2>
          <h2>Age: {user.age}</h2>
        </div>
        <div className="card-body">
          <input
            type="text"
            name="name"
            value={user.name}
            className="form-control"
            onChange={changeHandler}
          />
          <input
            type="text"
            name="age"
            value={user.age}
            className="form-control"
            onChange={changeHandler}
          />
          {/* <input
            type="text"
            name="name"
            value={user.name}
            className="form-control"
            onChange={(e) => setUser({ ...user, name: e.target.value })}
          />
          <input
            type="text"
            name="age"
            value={user.age}
            className="form-control"
            onChange={(e) => setUser({ ...user, age: e.target.value })}
          /> */}
        </div>
      </div>
    </>
  );
};

export default UseStateComp2;
