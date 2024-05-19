import React from 'react'
import "./Home.css"

import { Helmet } from 'react-helmet'
import ProductsSection from './components/ProductsSection/ProductsSection/ProductsSection'

const Home = () => {
  return (
    <>
    <Helmet>
      <title>Home</title>
    </Helmet>
  <div>
      <ProductsSection />
    </div>
    </>
   
  )
}

export default Home
