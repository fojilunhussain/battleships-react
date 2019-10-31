import React from 'react';
import Cells from './Cells'

function Boards() {

    const [playersBoard, setPlayersBoard] = React.useState([
        ["","","",""],
        ["","","",""],
        ["","","",""],
        ["","","",""]
    ])

    const [computersBoard, setComputersBoard] = React.useState([
        ["","","","SH"],
        ["","","","SH"],
        ["","","","SH"],
        ["","","","SH"]
    ])

    const onHit = (row, col) => {
        const newPlayersBoard = playersBoard.slice()
        // be careful about newPlayersBoard[0][0] = 'X'

        const newRowOnBoard = newPlayersBoard[row].slice()
        // newRowOnBoard[col] = 'X'

        // check the row and col in the computers board
        // if it is a ship, then update newRowOnBoard[col]
        // if not, update in a different way

        if (computersBoard[row][col] == "SH") {
            console.log('hit for', row, col)
            newRowOnBoard[col] = "X"
        } else {
            console.log('miss at', row, col)
            newRowOnBoard[col] = "/"
        }

        newPlayersBoard[row] = newRowOnBoard

        setPlayersBoard(newPlayersBoard)
    }

    // const checkHit = (row, col) => {
    //     console.log(computersBoard[row][col])
    // }

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