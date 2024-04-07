import React, { useState, useEffect } from 'react';
import { Button } from 'react-daisyui';

import ContextProviderWrapper from './components/ContextProviders/ContextProviderWrapper'
import HeaderBar from './components/HeaderBar';
import HomeViewContent from './components/HomeViewContent';
// import LoginForm from './components/LoginForm/LoginForm';

const App = () => {
  return (
    <ContextProviderWrapper>
      <HeaderBar />
      <HomeViewContent />
    </ContextProviderWrapper>
  );
};

export default App;