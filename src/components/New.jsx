import React from 'react'
import ItemCard from './ItemCard'

const New = ({data}) => {
  return (
    <div style={{display: "flex", justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap'}}>
      {data.map(dato=> <ItemCard key={dato.id} dato={dato} nombreRuta={"/nuevosDetail"}/> )}
    </div>
  )
}

export default New
