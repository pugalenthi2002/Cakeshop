import React from "react";
import img1 from '../Image/img1.jpg'
import './Intro/style.css'

function Hello(){
    const style1={
        color:"brown",
        backgroundColor:"pink"
    }
    return(
        <div>
            <h1>helloo component</h1>
            <img src="https://images.pexels.com/photos/556416/pexels-photo-556416.jpeg?cs=srgb&dl=landscape-mountains-nature-556416.jpg&fm=jpg" height={200} width={200}/>
            i<img src={img1} height={200} width={200}/>

<h1 style={{color:"red", backgroundColor:"yellow"}}>inline</h1>
<h2 style={style1}>internal styling</h2>
<h3  style={style1}>bchbfeckjef</h3>
<h4>external</h4> 

        </div>
    )
}
export default Hello;
