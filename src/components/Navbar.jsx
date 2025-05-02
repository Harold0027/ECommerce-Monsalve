import CartWidget from "./CartWidget"
const Navbar = ()=>{
    return(
        <nav className="nav">
            <div>
                <img src="../logo-PetShop.png" alt="" style= {{width: "7rem"}}/>
            </div>
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