import React, { useEffect, useState } from 'react'
import { getOfertProducts } from '../mock/AsyncService'
import Oferts from './Oferts'

const OfertsContainer = () => {
  const [data,setData]=useState([])

  useEffect(()=>{
    getOfertProducts()
      .then(response=> setData(response))
      .catch(error=> console.error(error))
  },[])
  return (
    <div>
      <Oferts data={data} /> 
    </div>
  )
}

export default OfertsContainer
