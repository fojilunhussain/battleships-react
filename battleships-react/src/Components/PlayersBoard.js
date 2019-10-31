import React from 'react';
import Cells from './Cells'

function PlayersBoard() {

    const [playersBoard, setPlayersBoard] = React.useState([
        ["","","",""],
        ["","","",""],
        ["","","",""],
        ["","","",""]
    ])

    const [computersBoard, setComputersBoard] = React.useState([
        ["","","",""],
        ["","","",""],
        ["","S","S",""],
        ["","","",""]
    ])

    const onHit = (row, col) => {
        const newPlayersBoard = playersBoard.slice()
        newPlayersBoard[row][col] = "X"
        setPlayersBoard(newPlayersBoard)
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

export default PlayersBoard