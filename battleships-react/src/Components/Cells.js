import React from 'react';

function Cells(  {content, onHit}  ) {
    return ( 
        <>
            <button
                style = {{
                    backgroundColor: 'gray',
                    width: '50px',
                    height: '50px',
                    borderWidth: '5px'
                }}
                onClick = {e => onHit()}
            >{content}
            </button>
        </>
    )
}

export default Cells;