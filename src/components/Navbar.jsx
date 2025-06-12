import CartWidget from "./CartWidget"
import { Link } from "react-router-dom"
const Navbar = ()=>{
    return(
        <nav className="nav">
            <Link to="/">
                <img src="../logo-PetShop.png" alt="" style= {{width: "7rem"}}/>
            </Link>
            <div className="a-container">
                <Link to="/nuevos" className="clase-a">Nuevos</Link>
                <Link to="/ofertas" className="clase-a">Ofertas</Link>
                <Link to="/populares" className="clase-a">Populares</Link>
            </div>
            <Link to="/carrito"><CartWidget/></Link> 
        </nav>
    )
}
export default Navbar