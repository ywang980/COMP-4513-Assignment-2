import React, { useState, useEffect } from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import LoginForm from './components/LoginForm/LoginForm';
import RegisterForm from './components/RegisterForm/RegisterForm';
import ForgotPasswordForm from './components/ForgotPasswordForm/ForgotPasswordForm';
import Home from './components/Home';
import CircuitDetails from './components/CircuitDetailsPopup/CircuitDetails';
import { FavoritesProvider } from './components/ContextProviders/FavoritesProvider';
import ContextProviderWrapper from './components/ContextProviders/ContextProviderWrapper'
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
        <Route path='/test'>
          <ContextProviderWrapper>
          <CircuitDetails Name= "Monza" Location={[0.5,33]} Country="Italy" url= "monkeyman.com" />
          </ContextProviderWrapper>
        </Route>
      </Switch>
    </Router>
  )
};

export default App;