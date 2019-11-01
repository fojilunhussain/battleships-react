import React, {  useState, useCallback  } from 'react';
import Cells from './Cells'
import NewGame from './NewGame'

function Boards() {

    // const [shipTypes] = React.useState({

    //     Carrier: 5,
    //     Battleship: 4,
    //     Cruiser: 3,
    //     Submarine: 3,
    //     Destroyer: 2
    // })

    const [playersBoard, setPlayersBoard] = React.useState([

        ["","","",""],
        ["","","",""],
        ["","","",""],
        ["","","",""]
    ])

    const [computersBoard, setComputersBoard] = React.useState([
        ["","","",""],
        ["","","",""],
        ["","","",""],
        ["","","",""]
    ])

    const onHit = (hitRow, hitColumn, setComputersBoard) => {

        const newPlayersBoard = playersBoard.slice()
        const newRowOnPlayersBoard = newPlayersBoard[hitRow].slice()

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

        console.log(newPlayersBoard + "players board") 

        newPlayersBoard[hitRow] = newRowOnPlayersBoard
        setPlayersBoard(newPlayersBoard)
    }

    const getRandomShip = () => {
        const shipTypes = ["CA", "BA", "CR", "SU", "DE"]
        const randomShipIndex = Math.floor(Math.random() * 5)
        const randomShip = shipTypes[randomShipIndex]
        console.log(randomShip)
    }

    const onNew = useCallback((computersBoard, randomShip) => {

        getRandomShip()

        const computersHitColumn = Math.floor(Math.random() * 4)
        const computersHitRow = Math.floor(Math.random() * 4)
        console.log(computersHitRow, computersHitColumn)

        const newComputersBoard = computersBoard.slice()
        const newRowOnComputersBoard = newComputersBoard[computersHitRow].slice()
    
        if (computersBoard[computersHitRow][computersHitColumn]
                === "") {
            newRowOnComputersBoard[computersHitColumn] = randomShip
        }
    
        newComputersBoard[computersHitRow] = newRowOnComputersBoard
        setComputersBoard(newComputersBoard)
    
        console.log(newComputersBoard + "computers board")
        console.log("new game")
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