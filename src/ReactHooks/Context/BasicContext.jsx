import React, { createContext, useContext } from 'react'

const CreateCon = createContext() 

export default function BasicContext() {

    const proVideData = "Pugal Hari Sharavanan"

  return (
    <div>
        <h1>BasicContext</h1>
        <CreateCon.Provider value={proVideData}>
           <Component3 />
     </CreateCon.Provider>

    </div>
  )
}

function Component3(){
    const use =  useContext(CreateCon)
    return(
        <div>
            <h1>Component-3</h1>
            <h1>{use}</h1>
        </div>
    )
}
