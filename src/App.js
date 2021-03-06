import React from "react";
import LoginForm from "./components/LoginForm";
import "./styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      credentials: {
        smcnearney: {
          password: "s3kr3t"
        }
      }
    };
  }

  _checkCredentials = (username, password) => {
    const userObject = this.state.credentials[username];
    if (userObject && userObject.password === password) {
      return {
        isValid: true,
        message: "Login Successful"
      };
    } else {
      return {
        isValid: false,
        message: "Bad username or password"
      };
    }
  };

  render() {
    return (
      <div className="App">
        <LoginForm handleSubmit={this._checkCredentials} />
      </div>
    );
  }
}
export default App;
