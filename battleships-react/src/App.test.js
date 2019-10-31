import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Test from './test';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test("MVP tests", () => {
  test("GIVEN that a new game has begun", () => {
    test("Generate a board for the player to see", () => {
      test("It generates a 4x4 2D array for the player to see")
      test("IT ensures that the visible board is initially empty")
    })
    test("Place one ship onto the board", () => {
      test("It generates random coordinates for the ship to start being placed on")
      test("It places the ship horizontally")
    })
    test("Allow the user to press a button to place their hit", () => {
      test("It checks to see if the computer's board has an occupied cell")
      test("GIVEN that the computer's board has an occupied cell", () => {
        test("It marks the cell on the visible board with an 'X'")
      test("GIVEN that the computer's board has an empty cell", () => {
        test("It marks the cell on the visible board with a '/'")
      })
      })
    test("Check to see if an entire ship has been sunk")
    })
  })
})