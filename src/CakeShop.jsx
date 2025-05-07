import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import  img1 from "../src/Components/arr.webp"




export default function CakeShop() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('/Data.json')
            .then((res) => {
                setData(res.data)
            })
    }, [])

    const navi = useNavigate();
    return (
        <div>

            <div className='Navbar'>





                <form class="d-flex justify-content-center mt-3 gap-4  w-50" style={{ marginLeft: "400px" }} role="search">
                    <input class="form-control " type="search" placeholder="Search for Gifts" aria-label="Search" />
                </form>

            </div>
            <hr />

            <div className='d-flex gap-2'>
               
            

         
            <p>Gifts</p>
<span className='w-25'><img src={img1} alt="" /></span>
<p>Cakes</p>
<p>All Cakes</p>
               </div>


            







            <div className='d-flex mt-3 flex-wrap ms-5 gap-3'>


                {


                    data.map((i) =>





                        <div className='card ms-1 ' style={{ width: '19rem', height: '460px', gap: '1', marginTop: '10px' }}
                            onClick={() => {
                                navi(`/product/${i.title}`)
                            }}
                        >
                          
                             <img src={i.image} title={i.title} alt="" /> 

                            <div className='text-secondary ms-3 fw-medium fs-6'>
                                <p>{i.name}</p>

                            </div>
                            <div className='d-flex ms-3 fw-bold'>

                                <img src={i.logo} style={{ width: '20px', height: '20px' }} alt="" />

                                <p>{i.price}</p>

                            </div>
                            <div className='d-flex ms-3 text-secondary'>

                                <p >{i.rating}<span><img src={i.star} style={{ height: '20px' }} alt="" /></span> </p>
                                <p>{i.reviews}</p>
                                <button type="button" class="btn btn-primary ms-3  h-100">{i.button}</button>


                            </div>
                            <div>


                                {/* 
                                <button>{i.discount}</button> */}
                            </div>

                        </div>

                    )
                }

            </div>

        </div >
    )
}
