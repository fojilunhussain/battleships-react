import React from 'react';
import './App.css';
import Boards from './Components/Boards'

function App () {

  const isGameOver = false

  return (
    <>
      <h1 style = {{
        font: 'Optima'
      }}>Battleships</h1>
      <p>This is what your board looks like:</p>
      <Boards/>
    </>
  )
}

export default App;