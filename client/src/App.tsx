import React, { useState } from 'react';
import logo from './logo.svg';
import axios from "axios"
import './App.css';

function App() {

  const [apple, setApple] = useState<string>("")

  const clickHandler = async () => {
    const res = await axios.get('https://427e8qujl2.execute-api.us-east-1.amazonaws.com/dev/hello')
    setApple(res.data)
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        <a onClick={clickHandler}>Click me</a> to check if lambda is working or not
        </p>
        <p>{apple}</p>
      </header>
    </div>
  );
}

export default App;
