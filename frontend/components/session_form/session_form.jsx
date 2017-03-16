import React from 'react';
import { Link, withRouter } from 'react-router';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
    console.log(this);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  componentDidUpdate() {
		this.redirectIfLoggedIn();
	}

	redirectIfLoggedIn() {
		if (this.props.loggedIn) {
			this.props.router.push("/");
		}
	}

  handleTextChange(field) {
    let that = this;
    return (
      function curry(e) {
        that.setState({[field]: e.target.value});
      }
    );
  }

  handleLogin(e) {
    e.preventDefault();
    console.log(this.props);
    this.props.loginAction(this.state);
  }

  render() {
    return(
      <div className="session-form-root">
        <h1 className="form-title">Get Schwifty!</h1>
        <form className="session-form">
          <input onChange={this.handleTextChange('email')} className="session-input" type="email" value={this.state.email} placeholder="Email"/>
          <input onChange={this.handleTextChange('password')} className="session-input" type="password" value={this.state.password} placeholder="Password"/>
          <button onClick={this.handleLogin.bind(this)}>Log In</button>
        </form>
      </div>
    );
  }
}

export default SessionForm;