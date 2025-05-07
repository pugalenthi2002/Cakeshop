// import React, { Practice, useContext, useState } from "react";
// import CreateContext1 from "./Context/CreateCont";



// export default function PracticeHooks() {
//     const [str, setStr] = useState("Swathi")
//     const [num, setNum] = useState(2)
//     const [arr, setArr] = useState(["abcde", "555"])
//     const [obj, setObj] = useState({
//         Name: "Tamil"
//     })


//     function show() {
//         setStr("Tamil")

//     }
    const use = useContext(CreateContext1)
//     return (
//         <div>
//             <h1>PracticeHooks</h1>

//             <h1>{str}</h1>
//             <button onClick={show}>Change</button>
//             <button onClick={() => setStr("Pugal")}>Change2</button>
//             <h1>{num}</h1>
//             <button onClick={() => setNum(num + 1)}>+</button>
//             <button onClick={() => setNum(num - 1)} >-</button>
//             <h1>{arr[1]}</h1>
//             <h1>{arr}</h1>
//             <h1>{obj.Name}</h1>
//             <h1>This Topic Is Done</h1>

//             <h1>{use}</h1>

//         </div>
//     )
// }
