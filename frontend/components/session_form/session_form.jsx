import React from 'react';
import { Link, withRouter } from 'react-router';

//TODO: add button to log demo acct in
class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  componentDidMount() {
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
    this.props.login(this.state).then(() => this.props.router.push("/"));
  }

  demoLogin(e) {
    e.preventDefault();
    this.props.login({email: "demo@gmail.com", password: "1234567890"}).then(() => this.props.router.push("/"));
  }

  handleSignUp(e) {
    e.preventDefault();
    this.props.signup(this.state).then(() => this.props.router.push("/"));
  }

  render() {
    return(
      <div className="session-form-root">
        <h1 className="form-title">Get Schwifty!</h1>
        <p className="demo">{this.props.errors}</p>
        <form className="session-form">
          <input onChange={this.handleTextChange('email')} className="session-input" type="email" value={this.state.email} placeholder="Email"/>
          <input onChange={this.handleTextChange('password')} className="session-input" type="password" value={this.state.password} placeholder="Password"/>
          <div className="session-buttons">
            <button className="login-button" onClick={this.handleLogin.bind(this)}>Log In</button>
            <button className="login-button" onClick={this.demoLogin.bind(this)}>Demo Log In</button>
            <button className="signup-button" onClick={this.handleSignUp.bind(this)}>Sign Up</button>
          </div>
        </form>
      </div>
    );
  }
}

export default SessionForm;