import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import CakeShop from './CakeShop'
import { Route, Routes } from 'react-router-dom'
import ProductDetails from './Components/ProductDetails'

 
export default function App() {
  return (
    <div>
      {/* <Store/> */}
    
       {/* <Npmproject/>  */}
 
 <Routes>
  <Route path='/' element={<CakeShop/>}/>
  <Route path='/product/:name' element={<ProductDetails/>}/>

 </Routes>


    </div>
  )
}
