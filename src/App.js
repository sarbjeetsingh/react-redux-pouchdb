import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { createUser } from "./userActions";
import { connect } from "react-redux";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: ""
    };
  }

  handleSubmit = () => {
    const user = {
      _id: new Date().toISOString(),
      username: this.state.username
    };
    this.props._createUser(user);
  };
  handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  render() {
    return (
      <div className="App">
        <div>
          <h1>Add User</h1>
          <div>
            <input
              type="text"
              name="username"
              placeholder="enter username"
              onChange={this.handleInput}
            />
            <button type="button" onClick={this.handleSubmit}>
              Submit
            </button>
          </div>
        </div>
        <hr />
        <ul>
          {this.props.users &&
            this.props.users.map((user, index) => <li>{user.name}</li>)}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user.userList
  };
};

const mapDispatchToProps = dispatch => {
  return {
    _createUser: user => dispatch(createUser(user))
  };
};

const connectedPage = connect(mapStateToProps, mapDispatchToProps)(App);
export { connectedPage as App };
