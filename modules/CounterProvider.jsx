import React from 'react';
import { CounterProvider } from './counterContext.jsx';

const AppProvider = ({ children }) => {
  return <CounterProvider>{children}</CounterProvider>;
};

export default AppProvider;