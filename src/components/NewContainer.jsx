import React, { useEffect, useState } from 'react'
import { getNewProducts } from '../mock/AsyncService'
import New from './New'

const NewsContainer = () => {
  const [data,setData]=useState([])

  useEffect(()=>{
    getNewProducts()
      .then(response=> setData(response))
      .catch(error=> console.error(error))
  },[])
  return (
    <div>
      <New data={data} /> 
    </div>
  )
}

export default NewsContainer
