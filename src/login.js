import React, { useState, useEffect } from 'react';
import './login.css'
import axios from 'axios';

const Login = function(props) {
  const initial = {
    email: 'no',
    password: 'no',
    status: 'OUT'
  }
  const [state, setState] = useState({initial})
  useEffect(() => {
    setState({...state, status: 'error'})
  },[])


  const testAuth = function() {
    return axios.get('http://localhost:8000/testAuth')
    .then(data => setState({...state, status: data}))
    .catch(err => console.log(err))
  }

  const login = function () {
    return axios.post('http://localhost:8000/login', {
      email: state.email,
      password: state.password,
    })
    .then(response => {
      if(response.data.error) {
        console.log(response.data.error)
        setState({...state, status: response.data.error})
      }
      else if(response.data.Encryption) {
        console.log(response.data.Encryption)
        sessionStorage.Encryption = response.data.Encryption;
        setState({...state, status: 'success'})
      }
    })
    .catch(err => console.log(err))
  };
  const register = function () {
    return axios.post('http://localhost:8000/register', {
      email: state.email,
      password: state.password,
    })
    .then(response => {
      if(response.data.error) {
        console.log(response.data.error)
        setState({...state, status: response.data.error})
      }
      else if(response.data.Encryption) {
        console.log(response.data.Encryption)
        sessionStorage.Encryption = response.data.Encryption;
        setState({...state, status: 'success'})
      }
    })
    .catch(err => console.log(err))
  };

  return (
    <div id='container'>
      <div>USER AUTHENTICATION PAGE</div>
      <div>Email:</div>
      <input 
      value={state.email || ''}
      onChange={(event) => setState({...state, email: event.target.value})}
      type='text'
      placeholder='Enter email'
      />
      <div>Password:</div>
      <input 
      value={state.password || ''}
      onChange={(event) => setState({...state, password: event.target.value})}
      type='password'
      placeholder='Enter pw'
      />
      <button class='button_log' onClick={login}>Login</button>
      <button class='button_log' onClick={register}>Reg</button>
      {state.status === 'success' && (<div>SUCCESS : USER AUTHENTICATION</div>)}
      {state.status === 'error' && (<div>ERROR : USER AUTHENTICATION</div>)}
    </div>
  );
}

export default Login;