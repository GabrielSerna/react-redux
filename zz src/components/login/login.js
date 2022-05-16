import React, { Component } from 'react'
import LoginService from './loginService.js'

import { createBrowserHistory } from "history";
let history = createBrowserHistory();

export class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      showSuccess: false,
      showError: false,
      errorMessage: '',
      successMessage: ''
    };

    this.LoginService = new LoginService();

  };
  changeText = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  };

  onSubmit = (e) => {
    e.preventDefault();
  };

  login = (e) => {
    this.LoginService.login(this.state.username, this.state.password, this.loginSuccess, this.loginError);
    console.log('Login con username: ', this.state.username);
    console.log('Login con password: ', this.state.password);
  };

  loginSuccess = (dataResult) => {
    this.setState({
      showSuccess: true,
      successMessage: `Login effettuato con successo, il tuo token é ${dataResult.token}`,
      showError: false,
      errorMessage: ''
    });
    history.push('/booklist', [this.state]);
  };

  loginError = (errorData) => {
    this.setState({
      showSuccess: false,
      successMessage: ``,
      showError: true,
      errorMessage: `Login fallito: ${errorData.error}`
    });
  };

  getSuccessMessage = () => {
    if(this.state.showSuccess) {
      return (
        <div style={{ color: 'green' }}>
          {this.state.successMessage}
        </div>
      );
    } else {
      return (
        <div></div>
      );
    };
  };

  getErrorMessage = () => {
    if(this.state.showError) {
      return (
        <div style={{ color: 'red' }}>
          {this.state.errorMessage}
        </div>
      );
    } else {
      return (
        <div></div>
      );
    };
  };

  render() {
    let successMessage = this.getSuccessMessage();
    let errorMessage = this.getErrorMessage();
    return (
      <div style={{ marginTop: "100px", minHeight: "70vh" }}>
        <div className="container">
          <div className="row">
            <div className="col-6 mr-auto ml-auto">
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    name='username'
                    className="form-control"
                    placeholder="username"
                    value={this.state.username}
                    onChange={this.changeText} />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    name='password'
                    className="form-control"
                    placeholder="password"
                    value={this.state.password}
                    onChange={this.changeText} />
                </div>
                <button
                  type="submit"
                  className="btn btn-primary pull-right"
                  onClick={this.login}
                >
                  Invio
                </button>
                {successMessage}
                {errorMessage}
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Login