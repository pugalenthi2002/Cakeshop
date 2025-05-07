import react from "react";
import SonPage from  './SonPage'
// import React from 'react'

export default function DadPage() {
    const name1="sun,moon,star"
     const name2="ocean,hills,valley"
  const arr =[""]
  return (
    <div>
       <h1>DadPage</h1> 
       <h1>{name1}</h1>
       <SonPage data={name1}/>
        </div>
  )
}
