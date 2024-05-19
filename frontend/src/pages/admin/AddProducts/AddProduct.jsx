import React, { useContext } from 'react'
import "./AddProduct.css"
import axios from 'axios'
import { v4 as uuidv4 } from 'uuid';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import MainContext from '../../../context/Context';
import { Helmet } from 'react-helmet';

const AddProduct = () => {
  const { data,setData } = useContext(MainContext)
return (
  <>
 <Helmet>
  <title>Add Page</title>
 </Helmet>

<div className='container text-center mt-5 mb-5'>
   <h1 className='mb-5'>Bir sey elave et qozel insan:(</h1>
   <Formik
     initialValues={{ image: '', title: '' , price: '',description: ''}}
     validate={values => {
      
     }}
     onSubmit={(values, { setSubmitting }) => {
      axios.post("http://localhost:5000/category",{
          id: uuidv4(),
          image: values.image,
          title: values.title,
          price: values.price,
          description: values.description
         
      } ).then(res=>{
          setData([...data, res.data])
          
      })
     }}
   >
     {({
       values,
       errors,
       touched,
       handleChange,
       handleBlur,
       handleSubmit,
       isSubmitting,
       
     }) => (
       <form  onSubmit={handleSubmit}>
         <input
         className='p-2 border-1 m-lg-2'
           type="text"
           name="image"
           placeholder='Sekil ureyim'
           onChange={handleChange}
           onBlur={handleBlur}
           value={values.image}
         />
         {errors.image && touched.image && errors.image}
         <input
         className='p-2 border-1 m-lg-2'
           type="text"
           name="title"
           placeholder='Title ureyim'
           onChange={handleChange}
           onBlur={handleBlur}
           value={values.title}
         />
         {errors.title && touched.title && errors.title}
       
        

         <input
         className='p-2 border-1 m-lg-2'
           type="number"
           name="price"
           placeholder='Price ureyim'
           onChange={handleChange}
           onBlur={handleBlur}
           value={values.price}
         />
         {errors.price && touched.price && errors.price}
         <input
         className='p-2 border-1 m-lg-2'
           type="text"
           name="description"
           placeholder='Description ureyim'
           onChange={handleChange}
           onBlur={handleBlur}
           value={values.description}
         />
         {errors.description && touched.description && errors.description}
         <div className='mt-5'>
         <button className='btn btn-primary ' type="submit" >
           Submit
         </button>
         </div>
       </form>
     )}
   </Formik>
 </div>
  </>
  
)
}

export default AddProduct
