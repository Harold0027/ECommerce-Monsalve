import { useContext } from 'react'
import { CartContext } from '../context/CartContex'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
const Cart = () => {
    const {cart, deleteItem, clear, cartTotal} = useContext(CartContext)
    const navigate = useNavigate()

    const handleCheckout = () => {
    if (cart.length === 0) {
      Swal.fire({
        title: 'Carrito vacío 🤡',
        text: 'No puedes finalizar la compra si el carrito está vacío.',
        icon: 'warning',
        confirmButtonText: 'Entendido'
      })
    } else {
      navigate("/checkout")
    }
    }


  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{ textAlign: "center" }}>Mi Carrito</h1>

      {cart.length === 0 ? (
        <h3 style={{ textAlign: "center" }}>El carrito está vacío 😥</h3>
        
      ) : (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            maxWidth: "700px",
            margin: "0 auto", 
          }}
        >
          {cart.map((item) => (
            <div
              key={item.id}
              style={{
                display: "flex",
                width: "100%",
                height: "180px",
                border: "1px solid #ccc",
                borderRadius: "10px",
                overflow: "hidden",
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                backgroundColor: "#fff",
              }}
            >
              <div style={{ width: "180px", height: "100%" }}>
                <img
                  src={item.img}
                  alt={item.name}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain", 
                    padding: "10px",
                  }}
                />
              </div>
              <div
                style={{
                  padding: "15px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  flex: 1,
                }}
              >
                <h5 style={{ margin: "0 0 10px" }}>{item.name}</h5>
                <p style={{ margin: "5px 0" }}>Cantidad: {item.quantity}</p>
                <p style={{ margin: "5px 0" }}>Precio: S/{item.price.toFixed(2)}</p>
                <p style={{ margin: "5px 0" }}>
                  Subtotal: S/{(item.price * item.quantity).toFixed(2)}
                </p>
              </div>
              <button className="btn btn-danger" onClick={()=>{deleteItem(item.id)}}>Eliminar</button>
            </div>
          ))} 
          <span>{`Total a pagar: S/.${cartTotal()}`}</span>
        </div>
      )}
      <div style={{display: 'flex', justifyContent:'space-around', alignItems:'center', width:'100%', padding:'2rem', gap:'1rem'}}>
          <button onClick={clear} className="btn btn-dark" >Limpiar carrito</button>
          <Link to='/' className='btn btn-dark'>Seguir comprando</Link>
          <button className="btn btn-dark" onClick={handleCheckout}>Terminar compra</button>      
      </div>
    </div>
  )
}

export default Cart
