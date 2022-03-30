import React from 'react';
import Routes from './Routes';
import {AuthProvider} from './AuthProvider';

const Content = () => {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
};

export default Content;
