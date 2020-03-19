import React from 'react';
import Main from './pages';
import Login from './pages/Login';
import Signup from './pages/Signup'

import { Switch, Route } from 'react-router-dom';


function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup}/>
      </Switch>
    </div>
  );
}

export default App;