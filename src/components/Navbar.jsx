import CartWidget from "./CartWidget"
const Navbar = ()=>{
    return(
        <nav className="nav">
            <h2>Ecommerce</h2>
            <div className="a-container">
                <a href="" className="clase-a" >Nuevos</a>
                <a href="" className="clase-a" >Ofertas</a>
                <a href="" className="clase-a" >Populares</a>
            </div>
            <CartWidget/>
        </nav>
    )
}
export default Navbar