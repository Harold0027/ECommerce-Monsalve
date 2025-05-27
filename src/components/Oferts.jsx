import React from 'react'
import ItemCard from './ItemCard'

const Oferts = ({data}) => {
  return (
    <div style={{display: "flex", justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap'}}>
      {data.map(dato=> <ItemCard key={dato.id} dato={dato} nombreRuta={"/popularesDetail"}/> )}
    </div>
  )
}

export default Oferts
