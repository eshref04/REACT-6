import React from 'react'
import "./Table.css"
import TableItem from '../TableItem/TableItem'

const Table = ({items}) => {
    return (
      <div className='container'>
      <table className="table table-dark m-5">
   <thead>
     <tr>
       
       <th scope="col">Image</th>
       <th scope="col">Title</th>
       
       <th scope="col">Price</th>
       <th scope="col">Delete</th>
       <th scope="col">Edit</th>

     </tr>
   </thead>
   <tbody>
    {
      items.map((item,index)=>{
          return(<TableItem key={index} item={item}/>)
      })
    }
   </tbody>
  </table>
     </div>
  
     
    
    )
  }

export default Table
