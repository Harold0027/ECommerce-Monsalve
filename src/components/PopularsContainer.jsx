import React, { useEffect, useState } from 'react'
import { getPopularProducts } from '../mock/AsyncService'
import Popular from './Popular'
const PopularsContainer = () => {
  const [data,setData]=useState([])

  useEffect(()=>{
    getPopularProducts()
      .then(response=> setData(response))
      .catch(error=> console.error(error))
  },[])
  return (
    <div>
      <Popular data={data}/>
    </div>
  )
}

export default PopularsContainer
