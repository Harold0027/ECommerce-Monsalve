import ItemCard from './ItemCard'

const Item = ({data, type}) => {
  return (
   <div style={{display: "flex", justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap'}}>
      {data.map(dato=> <ItemCard key={dato.id} dato={dato} nombreRuta={`${type}`}  /> )}
    </div> 
  )
}

export default Item
