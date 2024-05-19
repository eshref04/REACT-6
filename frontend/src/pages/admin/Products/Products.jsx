import React, { useContext } from 'react'
import "./Product.css"
import MainContext from '../../../context/Context'
import Table from '../../../components/admin/Table/Table'
import {Helmet} from "react-helmet";

const Products = () => {
  const {data} =useContext(MainContext)
  return (
   <>
     <Helmet>
      <title>Admin</title>
     </Helmet>

    <div> 
      <Table items={data} />
    </div>
   </>
    
    
  )
}

export default Products
