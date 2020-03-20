import React from 'react';
import Main from './pages';
import Login from './pages/Login';
import Signup from './pages/Signup'
import Discover from '../../components/Discover/Discover'
import Profile from '../../App'

import { Switch, Route } from 'react-router-dom';
// import { ImplicitCallback } from '@okta/okta-react';;


function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup}/>
        <Route path="/profile" component={Profile} />
        <Route path="/discover" component={Discover}/>
      </Switch>
    </div>
  );
}

export default App;