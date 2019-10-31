import React from 'react';
import logo from './logo.svg';
import './App.css';
import Cells from './Components/Cells'
import PlayersBoard from './Components/PlayersBoard'
import NewGame from './Components/NewGame'
import Test from './test'

function App () {

  return (
    <>
      <h1>Battleships</h1>
      <NewGame/>
      <p>This is what your board looks like:</p>
      <PlayersBoard/>
    </>
  )
}

export default App;