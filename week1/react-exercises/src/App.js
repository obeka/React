import React from 'react';
import './App.css';
import './Hobbies';
import Hobbies from './Hobbies';
import CustomerService from './CustomerService';
import Counter from './Counter'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Hobbies/>
        <CustomerService />
        <Counter />
      </header>
    </div>
  );
}

export default App;
