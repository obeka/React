import React from 'react';
import './App.css';
import './Hobbies';
import HobbyList from './Hobbies';
import Guarantee from './CustomerService';
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
        <HobbyList/>
        <Guarantee />
        <Counter />
      </header>
    </div>
  );
}

export default App;
