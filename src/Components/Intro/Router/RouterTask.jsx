import React from "react";
import { Link, Route, Routes } from 'react-router-dom'
import File1 from "./File1";
import File2 from "./File2";
import File3 from "./File3";

export default function RouterTask() {
  return (
    <div>
      <h1>RouterTask</h1>
      <div className="text-center">
        <div class="dropdown">
          <h1 className="  text-success mt-3 fs-1 fw-bold bg-warning">Bikes</h1>

          <button class="btn btn-secondary dropdown-toggle text-success .offcanvas-end mt-3 fs-1 fw-bold bg-warning" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            BIKES
          </button>
          <div>
            <h1>RouterTask </h1>
            {/* <h1>
              <Link to={'/File1'}>Go To The File1</Link>
            </h1>
            <h1>
              <Link to={'/File2'}>Go To The File2</Link>
            </h1>
            <h1>
              <Link to={'/File3'}>Go To The File3</Link>
            </h1> */}









            <ul class="dropdown-menu">

              <li><a class="dropdown-item" href=""><h1>
                <Link to={'File1'}>Go to the File-1
                
                </Link></h1></a></li>
              <li><a class="dropdown-item" href="#"><h1><Link to={'File2'}>Go to the File-2</Link></h1></a></li>
              <li><a class="dropdown-item" href="#"><h1><Link to={'File3'}>Go to the File-3</Link></h1></a></li>
            </ul>
          </div>

          <Routes>
            <Route path='/File1' element={<File1 />} />
            <Route path='/File2' element={<File2 />} />
            <Route path='/File3' element={<File3 />} />
          </Routes>
        </div>


      </div>
    </div>

  )

}




//     *{ <h1>
//         <Link to={'/Task1'}>Go to Task-1</Link>
//     </h1>
//     <h1>
//         <Link to={'/Task2'}>Go to Task-2</Link>
//     </h1>
//     <h1>
//         <Link to={'/Task3'}>Go to Task-3</Link>
//     </h1>
//     <Routes>
//         <Route path='/Task1' element={<Task1 />} />
//         <Route path='/Task2' element={<Task2 />} />
//         <Route path='/Task3' element={<Task3 />} />
//     </Routes> */}
