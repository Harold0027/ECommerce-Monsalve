import React, { useContext, useState } from 'react'
import { CartContext } from '../context/CartContex'
import { addDoc, collection} from 'firebase/firestore'
import { serverTimestamp } from 'firebase/firestore'
import { Link } from 'react-router-dom'
import {db} from '../service/firebase'
import Swal from 'sweetalert2'

const Checkout = () => {
  const [buyer,setBuyer] = useState({})
  const [validateEmail, setValidateEmail] = useState('')
  const [orderId, serOrderId] = useState('')
  const {cart, cartTotal,clear} = useContext(CartContext)

  const buyerData = (e)=>{
      setBuyer(
        {
          ...buyer,
          [e.target.name]: e.target.value
        }
      )
  }

  console.log(buyer) 

  const finalizarCompra = (e)=>{
      e.preventDefault()

      if (!buyer.name || !buyer.address || !buyer.email){
         Swal.fire({
          title: 'Todos los campos son obligatorios 😕',
          text: 'No puedes finalizar la compra si tus datos no estan completos.',
          icon: 'warning',
          confirmButtonText: 'Entendido'
        })
      } else if (buyer.email !== validateEmail){
         Swal.fire({
          title: 'Los correos no coinciden ☹',
          icon: 'warning',
          confirmButtonText: 'Entendido'
        })
      } else{
        let orden = {
        comprador: buyer,
        compras: cart,
        total: cartTotal(),
        date: serverTimestamp()
      }
      const ventas = collection(db,"orders")

      addDoc(ventas, orden)
        .then((res)=>{
            serOrderId(res.id)
            clear()
        })
        .catch(error => console.error(error))
      }
  }

  return (
    <div>
        {
        orderId ? 
        <div>
            <h2>¡Generaste tu orden correctamente!😀 </h2>
            <h2>El id es: {orderId}</h2>
            <Link to='/' className='btn btn-dark'>Volver al inicio</Link>
        </div>
        :
        <div>
        <h1>Completa tus datos</h1>
          <form onSubmit={finalizarCompra}>
            <input className='form-control' placeholder='Ingrese su nombre completo' type="text" name='name' onChange={buyerData}/>
            <input className='form-control' placeholder='Ingrese su direccion' type="text" name='address' onChange={buyerData}/>
            <input className='form-control' placeholder='Ingrese su correo' type="email" name='email' onChange={buyerData}/>
            <input className='form-control' placeholder='Repita su correo' type="email" name='email2' onChange={(e)=>setValidateEmail(e.target.value)}/>
            <button  type='submit' className='btn btn-success'>Finalizar compra</button>
          </form>
        </div>
        
        }
    </div>
  )
}

export default Checkout
