import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function ProductDetails() {
    const {name} = useParams();
    const [data, setData] = useState({});
    
        useEffect(() => {
            axios.get('/Data.json')
                .then((res) => {
                    const filteredData = res.data.filter((item)=>{
                        // const itemname = res.data.name.replace("%"," ")
                        return item.title === name
                    });
                    setData(filteredData[0]);
                    console.log(filteredData[0]);
                    
                })
        }, [name])
       
  return (
    <div>
        <h1>{data.name}</h1>
        <p>{data.rating}</p>
        <p>{data.button}</p>
       {/* <p>{data.image}</p> */}
        <img src={data.image} alt="" />
    </div>
  )
}
