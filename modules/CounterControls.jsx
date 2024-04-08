import React from 'react';
import { useCounter } from './counterContext.jsx';

const CounterControls = () => {
  const { increment, decrement } = useCounter();
  return (
    <div>
      <button onClick={increment}>Incrementar</button>
      <button onClick={decrement}>Decrementar</button>
    </div>
  );
};

export default CounterControls;
