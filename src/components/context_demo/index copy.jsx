import React from "react";

const AuthContext = React.createContext();
const { Provider, Consumer } = AuthContext;

class Navbar extends React.Component {
  render() {
    return (
      <div className="my-3">
        <h2>Context API Demo</h2>
        <Consumer>
          {({ isAuthenticated, authToggler, user }) => {
            return (
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
            );
          }}
        </Consumer>
        <hr />
      </div>
    );
  }
}

class Profile extends React.Component {
  render() {
    return (
      <div className="my-3">
        <Navbar />
        <Consumer>
          {({ isAuthenticated, user }) => {
            return (
              <>
                {isAuthenticated ? (
                  <>
                    <h3>Name: {user.name}</h3>
                    <h3>Email: {user.email}</h3>
                    <h3>Age: {user.age}</h3>
                  </>
                ) : (
                  <h2>Please Log In</h2>
                )}
              </>
            );
          }}
        </Consumer>
      </div>
    );
  }
}
class User extends React.Component {
  render() {
    return (
      <div className="my-3">
        <Profile />
      </div>
    );
  }
}

class ContextDemo extends React.Component {
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
      <>
        <Provider value={{ ...this.state, authToggler: this.authToggler }}>
          <User />
        </Provider>
      </>
    );
  }
}

export default ContextDemo;
