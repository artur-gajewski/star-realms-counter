import React from 'react';
import { useSelector } from 'react-redux';
import { Counter } from './features/counter/Counter';
import { selectCurrentValue } from './features/counter/counterSlice';
import './App.css';

function App() {
  const currentValue = useSelector(selectCurrentValue);
  return (
    <div className="App">
      <link href='https://fonts.googleapis.com/css?family=Lato:300,400,700' rel='stylesheet' type='text/css' />
      <div id='stars'></div>
      <div id='stars2'></div>
      <div id='stars3'></div>
      <header className="App-header">
        <h1>{currentValue}</h1>
        <Counter />
      </header>
    </div>
  );
}

export default App;
