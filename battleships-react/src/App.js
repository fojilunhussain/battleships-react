import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [playersBoard, setPlayersBoard] = React.useState(Array.from(Array(10), _ => Array(10).fill("_")))
  const [computersBoard, setComputersBoard] = React.useState(Array.from(Array(10), _ => Array(10).fill("_")))

  return (
    <>
      <h1>Battleships</h1>
      <p>This is what the board looks like: {playersBoard}</p>
    </>
  );
}

export default App;
