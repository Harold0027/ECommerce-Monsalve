import React, { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { getSingleProduct } from '../mock/AsyncService';
import ItemDetail from './ItemDetail';
const HomeDetailContainer = () => {
  const {id} = useParams()
  const [product,setProduct] = useState({})

  useEffect(() => {
    getSingleProduct(id)
      .then(item => {setProduct(item)})
      .catch(error => console.error(error))
  }, [id])

  return (
    <div>
      <div>
        {product ? <ItemDetail product={product} /> : <p>Cargando carro ...</p> }
    </div>
    </div>
  )
}

export default HomeDetailContainer
