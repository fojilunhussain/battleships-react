import React from 'react';
import './App.css';
import Boards from './Components/Boards'
import NewGame from './Components/NewGame'
import Test from './test'

function App () {

  const isGameOver = false

  return (
    <>
      <h1>Battleships</h1>
      <NewGame/>
      <p>This is what your board looks like:</p>
      <Boards/>
    </>
  )
}

export default App;