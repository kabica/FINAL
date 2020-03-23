import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Discover from './components/Discover/Discover';
import App from './App'
import { BrowserRouter as Router } from 'react-router-dom';
import Mo from './landingpage/src/App';
import Edit from './components/Edit/Edit'
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reduxReducer from './Reducers/reduxReducer'
import Login from './login'

import * as serviceWorker from './serviceWorker';
import axios from "axios";

const store = createStore(reduxReducer);

if (process.env.REACT_APP_API_BASE_URL) {
  axios.defaults.baseURL = process.env.REACT_APP_API_BASE_URL;
}



// ReactDOM.render(<Login />, document.getElementById('root'));
// ReactDOM.render(<Router><Provider store={store}><Mo /></Provider></Router>, document.getElementById('root'));
ReactDOM.render(<Router><Mo /></Router>, document.getElementById('root'));




serviceWorker.unregister();
