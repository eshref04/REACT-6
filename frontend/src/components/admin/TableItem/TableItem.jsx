import React, { useContext } from 'react'
import "./TableItem.css"
import axios from 'axios'
import MainContext from '../../../context/Context'

const TableItem = ({item}) => {
    const {data,setData} =useContext(MainContext)
    const deleteItem = (id) => {
      axios.delete(`http://localhost:5000/category/${id}`).then(res => {
        setData([...data.filter(x => x.id != res.data.id)])
      })
    }
    return (
      <tr>
     
      <td><img width={"40px"} height={"40px"} src={item.image} alt="" /></td>
      <td>{item.title}</td>
     
      <td>{item.price}</td>
      <td><button onClick={()=>{
        deleteItem(item._id)
      }} className='btn btn-danger'>Delete</button></td>
       <td><button className='btn btn-warning'>Edit</button></td>
    </tr>
    )
  }

export default TableItem
