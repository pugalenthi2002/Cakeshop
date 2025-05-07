import react from "react";
import Image from '../Image/npm3397.jpg'

export default function Npmproject() {

    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-body-success">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#"></a>
                    <img src={Image} className="" height={"100px"} alt="" />
                    <div class="input-group w-75 h-50 mb-3 mx-auto">
                        <input type="text" class="form-control" placeholder="Search Packages" aria-label="Recipient's username" aria-describedby="button-addon2" />
                        <button class="btn btn-dark" type="button" id="button-addon2">Search</button>

                    </div>
                    <button className="btn btn-outline-secondary me-4"> SignUp</button>
                    <h6 className="fs-6 me-4">Sign In</h6>
                    <hr />
                </div>




            </nav>
            <div className="fs-6" style={{ marginLeft: "150px" }}>
                <h3>npm</h3>
                <ul className="d-flex gap-4">
                    <li>11.3.0</li>
                    <li className="text-success">Public</li>
                    <li>Published 13 days ago</li>
                </ul>
                <ul class="nav nav-tabs gap-4">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#" className="btn btn-outline-success">Readme</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link inactive" aria-current="page" href="#" className="btn btn-outline-success">Readme</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link inactive" aria-current="page" href="#" className="btn btn-outline-success">Readme</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link inactive" aria-current="page" href="#" className="btn btn-outline-success">Readme</a>
                    </li>

                    
                </ul>
            </div>

        </div>

    )

}