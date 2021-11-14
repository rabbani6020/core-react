import React from "react";
import { AuthProvider } from "./auth_context";
import User from "./user";

const ContextDemo = () => {
  return (
    <>
      <AuthProvider>
        <User />
      </AuthProvider>
    </>
  );
};

export default ContextDemo;
