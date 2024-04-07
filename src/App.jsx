import React, { useState, useEffect } from 'react';
import { Button } from 'react-daisyui';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ContextProviderWrapper from './components/ContextProviders/ContextProviderWrapper'
import HeaderBar from './components/HeaderBar';
import HomeViewContent from './components/HomeViewContent';
import LoginForm from './components/LoginForm/LoginForm';
import RegisterForm from './components/RegisterForm/RegisterForm';
import ForgotPasswordForm from './components/ForgotPasswordForm/ForgotPasswordForm';
import Home from './components/Home';
// import LoginForm from './components/LoginForm/LoginForm';
//IMPORTANT NEED TO USE REACT-ROUTER-DOM-VERSION-5

const App = () => {
  /*
  return (
    <ContextProviderWrapper>
      <HeaderBar />
      <HomeViewContent />
    </ContextProviderWrapper>
  );
  */
 return(
  <Router>
    <Switch>
      <Route  exact path='/'>
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