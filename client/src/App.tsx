import React, { useState } from 'react'
import logo from './logo.svg'
import axios from 'axios'
import './App.css'

function App() {
  const [apple, setApple] = useState<string>('')

  const clickHandler = async () => {
    const res = await axios.get(`${process.env.REACT_APP_GW_URL}/hello`)
    setApple(res.data)
  }

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          <a
            onClick={clickHandler}
            style={{ cursor: 'pointer', textDecorationLine: 'underline' }}
          >
            Click me
          </a>{' '}
          to check if lambda is working or knot
        </p>
        <p>{apple}</p>
        <p>{`${process.env.ApiUrl}`}</p>
      </header>
    </div>
  )
}

export default App
