import React from 'react';
import Boards from './Boards'

function NewGame (  {onNew}  ) {

    return (
        <>
            <button
                onClick = {e => onNew()}
            >
                Start new game
            </button>
        </>
    )
}

export default NewGame;