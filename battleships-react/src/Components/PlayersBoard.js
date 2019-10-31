import React from 'react';
import Cells from './Cells'

class Cell {
    constructor(content) {
        this.content = content
        this.isHit = false
    }
    hit () {
        this.isHit = true
        if(this.content === "~") this.content = "/"
        if(this.content === "SH") this.content = "X"
    }
    getContent() {
        return this.isHit ? this.content : " "
    }
}

function PlayersBoard() {

    const [playersBoard, setPlayersBoard] = React.useState([
        [new Cell("~"),"","",""],
        ["","","",""],
        ["","","",""],
        ["","","",""]
    ])

    const [computersBoard, setComputersBoard] = React.useState([
        [new Cell("~"),new Cell("~"),new Cell("~"),new Cell("SH")],
        [new Cell("~"),new Cell("~"),new Cell("~"),new Cell("SH")],
        [new Cell("~"),new Cell("~"),new Cell("~"),new Cell("SH")],
        [new Cell("~"),new Cell("~"),new Cell("~"),new Cell("SH")]
    ])

    const onHit = (row, col) => {
        const newComputersBoard = computersBoard.slice()
        newComputersBoard[row][col].hit()
        setComputersBoard(newComputersBoard)
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
            <Cells content = {computersBoard[0][0].getContent()} onHit = {() => onHit(0,0)}/>
            <Cells content = {computersBoard[0][1].getContent()} onHit = {() => onHit(0,1)}/>
            <Cells content = {computersBoard[0][2].getContent()} onHit = {() => onHit(0,2)}/>
            <Cells content = {computersBoard[0][3].getContent()} onHit = {() => onHit(0,3)}/>
            <Cells content = {computersBoard[1][0].getContent()} onHit = {() => onHit(1,0)}/>
            <Cells content = {computersBoard[1][1].getContent()} onHit = {() => onHit(1,1)}/>
            <Cells content = {computersBoard[1][2].getContent()} onHit = {() => onHit(1,2)}/>
            <Cells content = {computersBoard[1][3].getContent()} onHit = {() => onHit(1,3)}/>
            <Cells content = {computersBoard[2][0].getContent()} onHit = {() => onHit(2,0)}/>
            <Cells content = {computersBoard[2][1].getContent()} onHit = {() => onHit(2,1)}/>
            <Cells content = {computersBoard[2][2].getContent()} onHit = {() => onHit(2,2)}/>
            <Cells content = {computersBoard[2][3].getContent()} onHit = {() => onHit(2,3)}/>
            <Cells content = {computersBoard[3][0].getContent()} onHit = {() => onHit(3,0)}/>
            <Cells content = {computersBoard[3][1].getContent()} onHit = {() => onHit(3,1)}/>
            <Cells content = {computersBoard[3][2].getContent()} onHit = {() => onHit(3,2)}/>
            <Cells content = {computersBoard[3][3].getContent()} onHit = {() => onHit(3,3)}/>


            </div>

        </>
    )
}

export default PlayersBoard