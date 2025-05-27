import React from 'react'
import ItemCard from './ItemCard'

const Home = ({data}) => {
  return (
   <div style={{display: "flex", justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap'}}>
      {data.map(dato=> <ItemCard key={dato.id} dato={dato} nombreRuta={"/HomeDetail"}/> )}
    </div> 
  )
}

export default Home
