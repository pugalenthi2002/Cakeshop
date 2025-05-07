import React, { useEffect, useState } from 'react'

export default function UseEffectHook() {
    const [data, setData] = useState(0)

    console.log("Component running");


    useEffect(() => {
        // setData(5)
        // console.log("UseEffect Running");
        // setData(data + 1)
        
        setTimeout(() => {
            setData(data + 1)
        }, 1000);


    }, []


)
    // },[data])

    return (
        <div>
            <h1>UseEffectHook</h1>
            <h1>{data}</h1>
            <button onClick={() => setData(data + 1)}>+</button>

        </div>
    )
}
