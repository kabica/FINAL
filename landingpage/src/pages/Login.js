import React, { Component } from 'react';
import LoginForm from '../components/login/LoginForm';
import LoginFooter from '../components/login/LoginFooter';
import classes from './login.module.css';

class Login extends Component {
  render() {
    return (
      <div>
      <div className={classes.Background}>
        <div className="header-top">
        </div>
        <LoginForm />
      </div>
      <LoginFooter />
      </div>
      );
  }
}

export default Login;



