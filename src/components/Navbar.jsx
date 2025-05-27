import CartWidget from "./CartWidget"
import { Link } from "react-router-dom"
const Navbar = ()=>{
    return(
        <nav className="nav">
            <Link to="/">
                <img src="../logo-PetShop.png" alt="" style= {{width: "7rem"}}/>
            </Link>
            <div className="a-container">
                <Link to="/petShop/nuevos" className="clase-a">Nuevos</Link>
                <Link to="/petShop/ofertas" className="clase-a">Ofertas</Link>
                <Link to="/petShop/populares" className="clase-a">Populares</Link>
            </div>
            <Link to="/petshop/cart"><CartWidget/></Link> 
        </nav>
    )
}
export default Navbar