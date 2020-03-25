import React, { Component } from 'react';
import SignupForm from '../components/signup/SignupForm';
// import SignupFooter from '../components/signup/SignupFooter';
import classes from './signup.module.css'

class Signup extends Component {
  render() {
    return (
      <div>
      <div className={classes.Background}>
        <div className="header-top">
        </div>
        <SignupForm />
        </div>
      </div>
    );
  }
}

export default Signup;
