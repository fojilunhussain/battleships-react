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
      it("Generates a 4x4 2D array for the player to see")
      it("Ensures that the visible board is initially empty")
    })
    test("Place one ship onto the board", () => {
      it("Generates random coordinates for the ship to start being placed on")
      it("Places the ship horizontally")
    })
    test("Allow the user to press a button to place their hit", () => {
      it("Checks to see if the computer's board has an occupied cell")
      test("GIVEN that the computer's board has an occupied cell", () => {
        it("Marks the cell on the visible board with an 'X'")
      test("GIVEN that the computer's board has an empty cell", () => {
        it("Marks the cell on the visible board with a '/'")
      })
      })
    test("Check to see if an entire ship has been sunk")
    })
  })
})