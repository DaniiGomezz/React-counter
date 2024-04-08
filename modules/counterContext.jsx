import React, { createContext, useContext, useState } from 'react';

const CounterContext = createContext();

export const useCounter = () => {
  const context = useContext(CounterContext);
  if (!context) {
    throw new Error('useCounter debe ser usado dentro de un CounterProvider');
  }
  return context;
};

export const CounterProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(prevCount => prevCount + 1);
  const decrement = () => setCount(prevCount => prevCount - 1);

  return (
    <CounterContext.Provider value={{ count, increment, decrement }}>
      {children}
    </CounterContext.Provider>
  );
};