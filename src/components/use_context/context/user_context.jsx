import React from "react";

const UserContext = React.createContext();

const { Provider } = UserContext;

export { Provider as UserProvider };

export default UserContext;
