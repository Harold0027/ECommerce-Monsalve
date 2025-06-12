import { Link } from 'react-router-dom'

const ItemCard = ({dato,nombreRuta}) => {
  return (
    <div className="card" style={{ width: "350px", textAlign: "center" }}>
      <img 
        src={dato.img} 
        alt={dato.name}
        className="card-img-top"
        style={{ 
          width: "90%", 
          height: "350px",         
          objectPosition: "center" 
        }} 
      />
      <div className="card-body">
        <h5 className="card-title">{dato.name}</h5>
        <p className="card-text">S/ {dato.price}</p>
        <button className="btn btn-primary">
              <Link to={`${nombreRuta}/${dato.id}`} className="clase-a">Ver más</Link>
        </button>
      </div>
    </div>
  )
}

export default ItemCard
