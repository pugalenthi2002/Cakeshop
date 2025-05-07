import React,{ useEffect, useState,} from "react";



export default function UseEffectHook1 () {
    const[data,setData] = useState (0)
    console.log("Component Running");
    useEffect(()=>{
        // setData(10)
        // console.log("UseEffect Running");
        // setTimeout(()=>{
        //     setData(data+100)
        // },1000);
        
    },[])
return(
    <div>
        <h1>UseEffectHook1</h1>
        <h1>{data}</h1>
        <button onClick={()=>setData(data + 1)}>+</button>
    </div>
)
    
    
}