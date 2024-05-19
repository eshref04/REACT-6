
import React, { useState, useEffect } from 'react';
import "./Cards.css";
import CardItem from '../CardItem/CardItem';
import axios from 'axios';


const Cards = ({data,searchInp}) => {
     const [sort,setSort] = useState(null)
    return (
        <>
 <div className='products__section__btns d-flex gap-3'>
        <div className='d-flex gap-2'>
        <button onClick={()=>setSort({field:"title",asc:true})} className='btn btn-primary text-light'>A-Z</button>
        <button onClick={()=>setSort({field:"title",asc:false})} className='btn btn-primary text-light'>Z-A</button>
        </div>

        <div className='d-flex gap-2'>
          <button onClick={()=>setSort({field:"price",asc:true})} className='btn btn-warning text-light'>Low to High</button>
          <button onClick={()=>setSort({field:"price",asc:false})} className='btn btn-warning text-light'>High to Low</button>
        </div>
          <button onClick={()=>setSort(null)} className='btn btn-danger text-light'>Default</button>          
        </div>
        <div className='products__section__cards__cont mt-5 d-flex gap-4 flex-wrap'>
            {data.filter((x)=>x.title.toLowerCase().includes(searchInp.toLowerCase())).sort((a,b)=>{
                if(!sort){
                  return 0
                }
                else if(sort.asc){
                   return (a[sort.field] > b[sort.field]) ? 1 : ((b[sort.field] > a[sort.field]) ? -1 : 0)
                }
                else if(!sort.asc){
                   return (a[sort.field] < b[sort.field]) ? 1 : ((b[sort.field] < a[sort.field]) ? -1 : 0) 
                }
            })
            .map((item, index) => {
                return (
                    <CardItem key={index} item={item} />
                )
            })}
        </div>
        </>
       
    )
}

export default Cards;

