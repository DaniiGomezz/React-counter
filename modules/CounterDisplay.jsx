import React from 'react';
import { useCounter } from './counterContext.jsx';

const CounterDisplay = () => {
  const { count } = useCounter();
  return <div>Contador: {count}</div>;
};

export default CounterDisplay;