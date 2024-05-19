import React, { useContext, useState } from 'react'
import { useEffect } from 'react'
import "./Detail.css"
import { useParams } from 'react-router'
import axios from 'axios'
import { Helmet } from 'react-helmet'
import { BASE_URL } from "../../../config/config";

const Detail = () => {
    
   
    const [item,setItem]=useState([])
    const {id}=useParams()
    
    
   useEffect(()=>{
    axios.get(`${BASE_URL}/${id}`).then(res=>{
        setItem(res.data)
    }

    )
   
   },[])
   
  return (
      <>
  <Helmet>
    <title>{item.title}</title>
  </Helmet>

   <div className='details__page container  p-5'>
      
      <div className='d-flex my-5 detail__cards align-items-center'><img src={item.image} width={"580px"}  height={"480px"} alt="" />
      <div style={{marginLeft:"24px"}} className='details__text d-flex flex-column gap-4 '>
      <h1><i>{item.title}</i></h1>
        <h2>{item.description}</h2>
       
       <h3>{item.price}<i class="fa-solid fa-star text-warning  mx-2"></i></h3>
      </div>
      </div>
    </div>
      </>

   
  )
}

export default Detail
