import React from 'react';
import './css/App.css';
import Main from './pages';
import Login from './pages/Login';
import Signup from './pages/Signup'

import { Switch, Route } from 'react-router-dom';
import ChoosePlan from './pages/ChoosePlan';


function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/login" component={Login} />
        <Route path="/choose-plan" component={ChoosePlan} />
        <Route path="/signup" component={Signup}/>
      </Switch>
    </div>
  );
}

export default App;