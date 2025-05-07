import react from "react";
import img from '../Image/photo.png'
import Image from '../Image/npm3397.jpg'
import img1 from '../Image/capital.jpg'
import Img2 from '../Image/boonai.jpg'

export default function NmpProject() {
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

        </div>



      </nav>

      <div className="Container bg-danger   justify-content-around" style={{ height: "500px", width: "100%" }} >
        <h1 className="text-white text-center mt-3 fs-1 fw-bolder">Build Amazing  <br /> things</h1>
        <p className="text-center mt-5 text-white fw-bold">We're GitHub, the company behind the npm Registry and npm CLI.  We <br /> offer those to the community for free, but our day job is building and <br /> selling useful tools for developers like you.</p>
        <h4 className="text-center text-white fs-1 fw-bolder mt-1">Take your JavaScript <br /> development up a notch</h4>
        <p className="text-center  mt-3 text-white fw-bold">Get started today for free, or step up to npm Pro to enjoy a premium <br />JavaScript development experience, with features like private packages.</p>
        <div class="d-flex gap-2  justify-content-center ">
          <button class="btn btn-primary " type="button">Sign Up for free</button>
          <button class="btn btn-outline-warning" type="button">Learn about Pro</button>
        </div>
      </div>
      <div>
        <img src={img} className="d-block mx-auto mt-5" alt="" />
        <h2 className="text-center fw-bolder mt-2"> Bring the best of open  <br />source to you, your team, <br /> and your company
        </h2>
        <p className="text-center mt-5">Relied upon by more than 17 million developers worldwide, npm is <br /> committed to making JavaScript development elegant, productive, and <br /> safe. The free npm Registry has become the center of JavaScript code <br /> sharing, and with more than two million packages, the largest software <br /> registry in the world. Our other tools and services take the Registry, and <br /> the work you do around it, to the next level.</p>
        <br />
        <br />
        <br />
        <br />
        <br />
        <hr />


      </div>


      <div className="d-flex gap-5">

        <div>
          <img src={img1} className="" style={{ height: "100px", marginLeft: "100px" }} alt="" />
          <br />
          <img src={Img2} className="mt-1" style={{ height: "75px", width: "75px", marginLeft: "115px" }} alt="" />


        </div>
        <div className=" fs-5" style={{ marginLeft: "200px" }}>
          <h1>Support</h1>
          <p>Help</p>
          <p>Advisories</p>
          <p>Status</p>
          <p>Contact npm</p>
        </div>

        <div>
          <h1>Company</h1>
          <p>About</p>
          <p>Blog</p>
          <p>Press</p>
        </div>

        <div>
          <h1>Terms & Policies</h1>
          <p>Policies</p>
          <p>Terms of Use</p>
          <p>Code of Conduct</p>
          <p>Privacy</p>
        </div>

      </div>
    </div>

  )

}

