import React, { useState,useEffect } from 'react'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom';
import { getSingleProduct } from '../mock/AsyncService';

const OfertsDetailContainer = () => {
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

export default OfertsDetailContainer
