import React from 'react';
import './App.css'



function Test () {

    const [count, setCount] = React.useState(10)

    return (

        <>
            <button onClick = {() =>
                setCount(currentCount  =>
                currentCount + 1)}></button>
            {count}
        </>

    )

}

export default Test;