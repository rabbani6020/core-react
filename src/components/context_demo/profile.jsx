import React, { useContext } from "react";
import { AuthConsumer, AuthContext } from "./auth_context";
import Navbar from "./navbar";

const Profile = () => {
  const { user, isAuthenticated } = useContext(AuthContext);
  return (
    <div className="my-3">
      <Navbar />
      {isAuthenticated ? (
        <>
          <h3>Name: {user.name}</h3>
          <h3>Email: {user.email}</h3>
          <h3>Age: {user.age}</h3>
        </>
      ) : (
        <h2>Please Log In</h2>
      )}
    </div>
  );
};

export default Profile;
