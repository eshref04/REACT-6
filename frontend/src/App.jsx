import { useEffect, useState } from 'react'
import './App.css'
import MainContext from './context/Context'
import ROUTES from './Routes/Routes'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.css';
import { BASE_URL } from "./config/config";

function App() {
  const router = createBrowserRouter(ROUTES)
  const [data,setData]=useState([])
 
  const contextData={
    data,setData
  }

  useEffect(()=>{
     axios.get(BASE_URL).then(res=>{
      setData([...res.data])
      
     }).catch(error=>{
      alert(error)
     })
  },[])
  return (
    <MainContext.Provider value={contextData}>
      <RouterProvider router={router} />
    </MainContext.Provider>
  )
}

export default App
