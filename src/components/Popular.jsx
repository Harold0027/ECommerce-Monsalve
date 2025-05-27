import ItemCard from './ItemCard'
const Popular = ({data}) => {
    return (
        <div style={{display: "flex", justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap'}}>
        {data.map(dato=> <ItemCard key={dato.id} dato={dato} nombreRuta={"/ofertasDetail"}/> )}
        </div>
    )
}

export default Popular
