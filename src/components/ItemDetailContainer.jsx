import React, { useState,useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom';
import { getSingleProduct } from '../mock/AsyncService';
import ItemDetail from './ItemDetail';
import { CartContext } from '../context/CartContex';
import { collection, doc, getDoc } from 'firebase/firestore';
import { db } from '../service/firebase';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
const ItemDetailContainer = () => {
  const {addItem} =useContext(CartContext)
  const [quantity,setQuantity] = useState(1)
  const {id} = useParams()
  const [invalid, setInvalid] = useState(false)
  const [product,setProduct] = useState({})
  const navigate = useNavigate()
  //Firebase
  useEffect(()=>{
    //conectar con nuestra coleccion
    const productsCollection = collection(db, "productos")
    //crear un referencia al documento que queremos traer
    const docRef = doc(productsCollection, id)
    //traer un documento
    getDoc(docRef)
      .then((res)=>{
        if(res.data()){
          setProduct({...res.data(),id:res.id})
        }else{
          setInvalid(true)
        }
      })
      .catch((error)=> console.log(error))
  },[])

  // useEffect(() => {
  //   getSingleProduct(id)
  //     .then(item => {setProduct(item)})
  //     .catch(error => console.error(error))
  // }, [id])

  const handleAddToCart = () => {
    const newProduct = {
      id: product.id,
      name: product.name,
      price: product.price,
      img: product.img,
      description: product.description
    }
    if(quantity===0){
      Swal.fire({
        title: 'No añadiste ningun producto 🤡',
        text: 'Debes seleccionar la cantidad del producto a añadir.',
        icon: 'warning',
        confirmButtonText: 'Entendido'
      })
    } else{
      addItem(newProduct,quantity),
      navigate("/carrito");
    }
  }

  if(invalid){
    return(
      <div>
        <h2>El producto no existe 😅</h2>
        <Link to={"/"} className='btn btn-dark'>Volver al home</Link>
      </div>
    )
  }
  return (
    <div>
      <div>
        {product ? <ItemDetail product={product} handleAddToCart={handleAddToCart} setQuantity={setQuantity} /> 
        : <p>Cargando carro ...</p> }
    </div>
    </div>
  )
}

export default ItemDetailContainer
