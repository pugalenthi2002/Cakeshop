import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function AxiosFull() {

  const [name, setName] = useState("")
  const [Email, setEmail] = useState("")
  const [pass, setPass] = useState("")
  const [data, setData] = useState([])

  const apiUrl = "https://67da5c7a35c87309f52c0fb8.mockapi.io/sdfghjkl"

  const details = {
    Name: name,
    Email: Email,
    PassWord: pass
  }

  const sendData = () => {

    axios.post(apiUrl, details)

    alert("Data Posted")

  }
  function del(id) {
    axios.delete(`${apiUrl}/${id}`)
    .then((res)=>{
      setData(data.filter((i)=>i.id !==id))
    } )
    alert("data Deleted")  
  }
  function edit(id) {
    axios.put(`${apiUrl}/${id}`)
    .then((res)=>{
      setData(data.filter((i)=>i.id !==id))
    })
    alert("Data Edited")
    
  }

  useEffect(() => {
    axios.get(apiUrl)
      .then((res) => {
        setData(res.data)
      })
  }, [])


  return (
    <div>
      <center>
        <h1>Axios-Crud</h1>

        <div className='col-5'>

          <input type="text" name="" className='form-control mt-3' placeholder='Enter Your Name' id="" value={name} onChange={(e) => setName(e.target.value)} />
          <input type="text" name="" className='form-control mt-3' placeholder='Enter Your Email' id="" value={Email} onChange={(e) => setEmail(e.target.value)} />
          <input type="text" name="" className='form-control mt-3' placeholder='Enter Your Password' id="" value={pass} onChange={(e) => setPass(e.target.value)} />
          <button className='btn btn-success mt-3' onClick={sendData}>ADD</button>

        </div>
      </center>
      <table className=' table text-center border border-5 col-5 border-primary rounded rounded-4 table-danger '>
        <tr>
          <td>Name</td>
          <td>Email</td>
          <td>Password</td>
          <td>Edit</td>
          <td>Delete</td>
        </tr>



        <tbody>
          {
            data.map((item, index) => (
              <tr key={index}>
                <td>{item.Name}</td>
                <td>{item.Email}</td>
                <td>{item.PassWord}</td>
                <td><button className='btn btn-outline-dark'onClick={()=>edit(item.id)}>Edit</button></td>
                <td><button className='btn btn-outline-dark' onClick={()=>del(item.id)}>Delete</button></td>

              </tr>
            ))
          }
        </tbody>
      </table>
    </div>

  )
}
