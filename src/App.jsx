import React from 'react';
import CounterDisplay from '../modules/CounterDisplay.jsx';
import CounterControls from '../modules/CounterControls.jsx';
import AppProvider from '../modules/CounterProvider.jsx';

function App() {
  return (
    <AppProvider>
      <div>
        <h1>Contador App</h1>
        <CounterDisplay />
        <CounterControls />
      </div>
    </AppProvider>
  );
};

export default App;