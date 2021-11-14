import React, { createContext } from "react";

let AuthContext = null;
const { Provider, Consumer } = (AuthContext = createContext());

class AuthProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        name: "Golam Rabbani",
        age: "25",
        email: "rabbani.cse.69@gmail.com",
      },
      isAuthenticated: true,
    };
  }

  authToggler = () => {
    this.setState((prevState) => ({
      isAuthenticated: !prevState.isAuthenticated,
    }));
  };
  render() {
    return (
      <Provider value={{ ...this.state, authToggler: this.authToggler }}>
        {this.props.children}
      </Provider>
    );
  }
}

export { AuthProvider, Consumer as AuthConsumer, AuthContext };
