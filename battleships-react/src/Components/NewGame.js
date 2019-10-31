import React from 'react';
import Cells from './Cells'

function NewGame () {

    const [randomCoordinates] = React.useState(Math.floor(Math.random() * 5))

    return (
        <>
            <button
                //onClick = {e => onNew()}
            >
                Start new game
            </button>
        </>
    )
}

export default NewGame