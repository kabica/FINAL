import React from 'react';
import Main from './pages';
import Login from './pages/Login';
import Signup from './pages/Signup'
import Discover from '../../components/Discover/Discover'
import Profile from '../../App'
import Edit from '../../components/Edit/Edit'
import Friends from '../../components/Friends/Friends'
import auth from '../../login'

import { Switch, Route } from 'react-router-dom';



function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup}/>
        <Route path="/profile" component={Profile} />
        <Route path="/discover" component={Discover}/>
        <Route path="/auth" component={auth} />
        <Route path="/edit" component={Edit}/>
        <Route path="/friends" component={Friends}/>
      </Switch>
    </div>
  );
}

export default App;