import React, { useContext } from "react";
import { AuthConsumer, AuthContext } from "./auth_context";

const Navbar = () => {
  const { isAuthenticated, authToggler } = useContext(AuthContext);
  return (
    <div className="my-3">
      <h2>Context API Demo</h2>
      <>
        {isAuthenticated ? (
          <button className="btn btn-success" onClick={authToggler}>
            Log Out
          </button>
        ) : (
          <button className="btn btn-danger" onClick={authToggler}>
            Log In
          </button>
        )}
      </>
      <hr />
    </div>
  );
};

export default Navbar;
