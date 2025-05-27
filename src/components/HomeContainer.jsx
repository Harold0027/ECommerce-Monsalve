import React, { useState,useEffect } from 'react'
import { GetProducts } from '../mock/AsyncService'
import Home from './Home'

const HomeContainer = () => {
    const [data,setData] = useState([])

    useEffect(()=>{ 
        GetProducts() 
            .then((response)=>{
                setData(response)
            })
            .catch(error => {
                console.error(error)
            })
    },[])
  return (
    <div>
        <Home data={data} /> 
    </div>
  )
}

export default HomeContainer
