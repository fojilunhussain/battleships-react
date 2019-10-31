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

    const [computersHitColumn, setComputersHitColumn] = React.useState(Math.floor(Math.random() * 3))
    const [computersHitRow, setComputersHitRow] = React.useState(Math.floor(Math.random() * 3))

    const [playersBoard, setPlayersBoard] = React.useState([

        ["","","",""],
        ["","","",""],
        ["","","",""],
        ["","","",""]
        // Array.from(Array(4), _ => Array(4).fill("")),
        // Array.from(Array(4), _ => Array(4).fill("")),
        // Array.from(Array(4), _ => Array(4).fill("")),
        // Array.from(Array(4), _ => Array(4).fill(""))
    ])

    const [computersBoard, setComputersBoard] = React.useState([
        // ["","","","BA"],
        // ["","","","BA"],
        // ["","","","BA"],
        // ["","","","BA"]
        ["","","","X"],
        ["","","","X"],
        ["","","","X"],
        ["","","","X"]
    ])

    const checkIfWon = (newPlayersBoard, computersBoard) => {
        if (newPlayersBoard === computersBoard) {
            console.log("You win")
        }
    }

    const onHit = (hitRow, hitColumn) => {

        const newPlayersBoard = playersBoard.slice()
        const newRowOnBoard = newPlayersBoard[hitRow].slice()

        if (computersBoard[hitRow][hitColumn] == "CA") {
            console.log('hit for', hitRow, hitColumn)
            newRowOnBoard[hitColumn] = "X"
        } else if (computersBoard[hitRow][hitColumn] == "X") {
            console.log('hit for', hitRow, hitColumn)
            newRowOnBoard[hitColumn] = "X"
        }else if (computersBoard[hitRow][hitColumn] == "CR") {
            console.log('hit for', hitRow, hitColumn)
            newRowOnBoard[hitColumn] = "X"
        } else if (computersBoard[hitRow][hitColumn] == "SU") {
            console.log('hit for', hitRow, hitColumn)
            newRowOnBoard[hitColumn] = "X"
        } else if (computersBoard[hitRow][hitColumn] == "DE") {
            console.log('hit for', hitRow, hitColumn)
            newRowOnBoard[hitColumn] = "X"
        } else {
            console.log('miss at', hitRow, hitColumn)
            newRowOnBoard[hitColumn] = "/"
        }

        console.log(newPlayersBoard) //compare computer's board against newPlayersBoard

        newPlayersBoard[hitRow] = newRowOnBoard
        setPlayersBoard(newPlayersBoard)
        checkIfSunk(playersBoard, hitRow, hitColumn)
    }

    const checkIfSunk = (playersBoard, hitRow, hitColumn) => {

        for (let i = 0; i < 3; i++) {

            if (playersBoard[i][3] == "X" && i == 2) {
                console.log("SH sunk")
            }
        }
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