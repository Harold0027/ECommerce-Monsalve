import React from 'react'
import { Link } from 'react-router-dom'
import ItemCount from './ItemCount'

const ItemDetail = ({product}) => {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: '80vh', padding: '1rem' }}
    >
      <div
        className="card shadow-lg"
        style={{
          width: '45rem',
          borderRadius: '1rem',
          overflow: 'hidden',
        }}
      >
        <h2 className="card-title text-center mb-3" style={{ color: 'red' }} >
            Vista del Producto
          </h2>
        <img
          src={product.img}
          className="card-img-top"
          alt={product.title}
          style={{
            height: '300px',
            objectFit: 'contain',
            backgroundColor: '#f8f9fa',
          }}
        />
        <div className="card-body">
          <h5 className="card-subtitle mb-2 text-muted text-center">
            {product.title}
          </h5>
          <p className="card-text mt-3" style={{ minHeight: '4rem' }}>
            {product.description}
          </p>
          <h4 className="mt-4 mb-3 text-center">S/ {product.price}</h4>
          <div className="text-center">
            <button className="btn btn-primary">
              <Link to={"/carrito"} className="clase-a">Agregar al carrito</Link>
            </button>
            <ItemCount stock={10}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ItemDetail

