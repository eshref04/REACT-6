import React, { useContext } from 'react'
import "./ProductsSection.css"
import MainContext from '../../../../../../context/Context'
import Cards from '../../../../../../components/site/Cards/Cards'
import { useState } from 'react'


const ProductsSection = () => {
    const {data} = useContext(MainContext)
    const [search,setSearch]=useState("")

    
  return (
    <section className='products__section mt-5 '>
    <div className="container  ">
    <div className='products__section__heading d-flex flex-column align-items-center'>
      
       <h2>Featured Products</h2>
    </div>

    <div className='mt-3 mb-3 products__section__cards d-flex flex-column align-items-center justify-content-center gap-4'>
    <div className="d-flex gap-4">
            <input
              value={search}
              onChange={(e)=>{
              setSearch(e.target.value)
              }}
              className="p-2 border-1 rounded-1"
              placeholder="Search for something"
              type="text"
              id="search"
            />

        
           
          </div>
    <Cards  data={data} searchInp={search} />
    </div>

    
    </div>
      
    </section>
  )
}

export default ProductsSection
