import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import LoginForm from './components/Forms/LoginForm';
import RegisterForm from './components/Forms/RegisterForm';
import ForgotPasswordForm from './components/Forms/ForgotPasswordForm';

import Home from './components/Home';
//IMPORTANT NEED TO USE REACT-ROUTER-DOM-VERSION-5

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <LoginForm />
        </Route>
        <Route path='/RegisterForm'>
          <RegisterForm />
        </Route>
        <Route path='/ForgotPasswordForm'>
          <ForgotPasswordForm />
        </Route>
        <Route path='/Home'>
          <Home />
        </Route>
      </Switch>
    </Router>
  )
};

export default App;