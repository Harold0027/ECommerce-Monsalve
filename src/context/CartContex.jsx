import { createContext,useState } from "react";

export const CartContext = createContext()

export const CartProvider = ({children})=>{
    const [cart,setCart] = useState([])

    const addItem = (product, quantity)=>{
        const item = { ...product, quantity };
    setCart((prevCart) => {
      const itemRepeat = prevCart.find((p) => p.id === item.id);
      if (itemRepeat) {
        return prevCart.map((p) =>
          p.id === item.id ? { ...p, quantity: p.quantity + quantity } : p
        );
      } else {
        return [...prevCart, item]
      }}); 
    }
    const cartTotal = () => {
    return cart.reduce((acumulador, item) => acumulador + item.price * item.quantity, 0);
    }

    const deleteItem = (id)=>{
        setCart((prevCart)=> prevCart.filter((item)=> item.id !== id))
    }
    
    const clear = ()=>{
        setCart([])
    }



    return(
        <CartContext.Provider value={{cart,addItem,deleteItem,clear,cartTotal}}>
            {children}
        </CartContext.Provider>
    )
}