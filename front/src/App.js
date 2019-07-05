import React from 'react';
import { Switch, Route } from 'react-router-dom';
import SignUp  from './SignUp'
import SignIn from './SignIn'
import Profile from './Profile'
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
      <Route exact path="/" component={SignIn} />
      <Route exact path="/signin" component={SignIn} />
      <Route exact path="/signup" component={SignUp} />
      <Route exact path="/profile" component={Profile} />
      </Switch>
    </div>
  );
}

export default App;