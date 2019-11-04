import React, {  useCallback  } from 'react';
import Cells from './Cells'
import NewGame from './NewGame'

function Boards() {

    const [playersBoard, setPlayersBoard] = React.useState([

        ["","","",""], // what the player will see
        ["","","",""],
        ["","","",""],
        ["","","",""]
    ])

    const [computersBoard, setComputersBoard] = React.useState([
        ["","","",""], // the ships will be placed on this board
        ["","","",""],
        ["","","",""],
        ["","","",""]
    ])

    const onHit = (hitRow, hitColumn, setComputersBoard) => {

        const newPlayersBoard = playersBoard.slice()
            // take shallow copy of player's board
        const newRowOnPlayersBoard = newPlayersBoard[hitRow].slice()
            // take shallow copy of the row on the player's board

        if (computersBoard[hitRow][hitColumn] === "CA") {
           console.log('hit for', hitRow, hitColumn)
            newRowOnPlayersBoard[hitColumn] = "X"
        } else if (computersBoard[hitRow][hitColumn] === "BA") {
            console.log('hit for', hitRow, hitColumn)
            newRowOnPlayersBoard[hitColumn] = "X"
        }else if (computersBoard[hitRow][hitColumn] === "CR") {
            console.log('hit for', hitRow, hitColumn)
            newRowOnPlayersBoard[hitColumn] = "X"
        } else if (computersBoard[hitRow][hitColumn] === "SU") {
            console.log('hit for', hitRow, hitColumn)
            newRowOnPlayersBoard[hitColumn] = "X"
        } else if (computersBoard[hitRow][hitColumn] === "DE") {
            console.log('hit for', hitRow, hitColumn)
            newRowOnPlayersBoard[hitColumn] = "X"
        } else {
            console.log('miss at', hitRow, hitColumn)
            newRowOnPlayersBoard[hitColumn] = "/"
        }
            // hits for the different boats

        console.log(newPlayersBoard + "players board") 

        newPlayersBoard[hitRow] = newRowOnPlayersBoard
        setPlayersBoard(newPlayersBoard) // updates the player's board
    }

    const onNew = useCallback((computersBoard) => {
        // this function runs whenever the 'new game' button is pressed
        // it clears the board and places the ships on random and
        // unique coordinates
        const generatedCoordinates = []
        const shipTypes = ["CA", "BA", "CR", "SU", "DE"]
        const newComputersBoard = computersBoard.slice()

        for (let i = 0; i < 5; i++) {
            console.log(newComputersBoard)
            const computersHitColumn = Math.floor(Math.random() * 4)
            const computersHitRow = Math.floor(Math.random() * 4)
            console.log(computersHitRow, computersHitColumn)
            const newRowOnComputersBoard
                = newComputersBoard[computersHitRow].slice()

            if (computersBoard[computersHitRow][computersHitColumn]
                === "") {
            newRowOnComputersBoard[computersHitColumn] = shipTypes.pop()
            }
                
            newComputersBoard[computersHitRow] = newRowOnComputersBoard
            setComputersBoard(newComputersBoard)
        
            console.log(newComputersBoard)
            if (generatedCoordinates
                .includes([computersHitRow, computersHitColumn]))
                {
                    
            }
            generatedCoordinates.push([computersHitRow, computersHitColumn])
            console.log(generatedCoordinates)
        }
    })

    return (
        <>
            <NewGame onNew = {() => onNew(computersBoard)}/>
            <div style = {{

                display: 'grid',
                gridTemplateColumns: 'repeat(4, 50px)',
                gridTemplateRows: 'repeat(4, 50px)'
            }}>
                <Cells content = {playersBoard[0][0]} onHit = {() => onHit(0,0)}/>
                <Cells content = {playersBoard[0][1]} onHit = {() => onHit(0,1)}/>
                <Cells content = {playersBoard[0][2]} onHit = {() => onHit(0,2)}/>
                <Cells content = {playersBoard[0][3]} onHit = {() => onHit(0,3)}/>
                <Cells content = {playersBoard[1][0]} onHit = {() => onHit(1,0)}/>
                <Cells content = {playersBoard[1][1]} onHit = {() => onHit(1,1)}/>
                <Cells content = {playersBoard[1][2]} onHit = {() => onHit(1,2)}/>
                <Cells content = {playersBoard[1][3]} onHit = {() => onHit(1,3)}/>
                <Cells content = {playersBoard[2][0]} onHit = {() => onHit(2,0)}/>
                <Cells content = {playersBoard[2][1]} onHit = {() => onHit(2,1)}/>
                <Cells content = {playersBoard[2][2]} onHit = {() => onHit(2,2)}/>
                <Cells content = {playersBoard[2][3]} onHit = {() => onHit(2,3)}/>
                <Cells content = {playersBoard[3][0]} onHit = {() => onHit(3,0)}/>
                <Cells content = {playersBoard[3][1]} onHit = {() => onHit(3,1)}/>
                <Cells content = {playersBoard[3][2]} onHit = {() => onHit(3,2)}/>
                <Cells content = {playersBoard[3][3]} onHit = {() => onHit(3,3)}/>
            </div>
        </>
    )
}
export default Boards;