import React from 'react'
import "./CardItem.css"
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'


const CardItem = ({item}) => {
    
    
  return (
    <div className='products__section__card__items  '>
    
    <div style={{width:"290px",height:"200px"}} className='products__section__card__items__image'><img width={"100%"} height={"100%"} src={item.image} alt="" /></div>
      <div style={{overflow:"hidden"}} className='products__section__card__items__text p-3 d-flex flex-column align-items-center mt-3 p-3'>
        <h3>{item.title}</h3>
        <p className='text-center' style={{width:"250px"}}>{item.description}</p>
        <span><i class="fa-solid fa-star text-warning  mx-2"></i>{item.price}</span>
       <Link className='text-decoration-none' style={{color:"white"}} to={`/detail/${item._id}`}><button style={{width:"100px"}} className='detail__btn btn btn-primary p-2 my-3'>Detail</button></Link> 
        <button onClick={() => addBasket(item.id)} style={{width:"100px"}} className='btn btn-danger p-2'>Add</button>
      </div>
    
      
    </div>
  )
}

export default CardItem
