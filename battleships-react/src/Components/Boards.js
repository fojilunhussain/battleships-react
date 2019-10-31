import React from 'react';
import Cells from './Cells'

function Boards() {

    const [shipTypes] = React.useState({

        Carrier: 5,
        Battleship: 4,
        Cruiser: 3,
        Submarine: 3,
        Destroyer: 2

    })

    const [playersBoard, setPlayersBoard] = React.useState([

        // ["","","",""],
        // ["","","",""],
        // ["","","",""],
        // ["","","",""]
        Array.from(Array(4), _ => Array(4).fill("")),
        Array.from(Array(4), _ => Array(4).fill("")),
        Array.from(Array(4), _ => Array(4).fill("")),
        Array.from(Array(4), _ => Array(4).fill(""))

    ])

    const [computersBoard, setComputersBoard] = React.useState([
        ["","","","BA"],
        ["","","","BA"],
        ["","DE","","BA"],
        ["","DE","","BA"]
    ])

    const onHit = (row, col) => {

        const newPlayersBoard = playersBoard.slice()
        const newRowOnBoard = newPlayersBoard[row].slice()

        if (computersBoard[row][col] == "CA") {
            console.log('hit for', row, col)
            newRowOnBoard[col] = "X"
        } else if (computersBoard[row][col] == "BA") {
            console.log('hit for', row, col)
            newRowOnBoard[col] = "X"
        }else if (computersBoard[row][col] == "CR") {
            console.log('hit for', row, col)
            newRowOnBoard[col] = "X"
        } else if (computersBoard[row][col] == "SU") {
            console.log('hit for', row, col)
            newRowOnBoard[col] = "X"
        } else if (computersBoard[row][col] == "DE") {
            console.log('hit for', row, col)
            newRowOnBoard[col] = "X"
        } else {
            console.log('miss at', row, col)
            newRowOnBoard[col] = "/"
        }

        console.log(newPlayersBoard) //compare computer's board against newPlayersBoard

        newPlayersBoard[row] = newRowOnBoard
        setPlayersBoard(newPlayersBoard)
        checkIfSunk(playersBoard, row, col)

        const numberOfTurnsTaken = playersBoard.reduce(
            (acc, content) => content === "X" ? acc : acc + 1
        )

    }

    const checkIfSunk = (playersBoard, row, col) => {

        for (let i = 0; i < 3; i++) {

            if (playersBoard[i][3] == "X" && i == 2) {
                console.log("SH sunk")
            }
        }
    }

    const checkIfEndGame = () => {

    }

    return (

        <>

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

export default Boards