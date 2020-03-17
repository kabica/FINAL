import React, { Component } from 'react';

import SignupForm from '../components/signup/SignupForm';
import SignupFooter from '../components/signup/SignupFooter';

class Signup extends Component {
  render() {
    return (
      <div className="main-singup-container">
        <div className="header-top">
        </div>
        <SignupForm />
        <SignupFooter />
      </div>
    );
  }
}

export default Signup;
