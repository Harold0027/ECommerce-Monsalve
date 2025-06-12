import './App.css'
import Navbar from './components/Navbar'
import { Route,Routes,BrowserRouter } from 'react-router-dom'
import ItemContainer from './components/ItemContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import {CartProvider} from './context/CartContex'
import Cart from './components/Cart'
import Checkout from './components/Checkout'


function App() {
  return (
    <CartProvider>
      <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path='/' element={<ItemContainer/>} />
            <Route path='/detail/:id' element={<ItemDetailContainer/>}/>
            <Route path='/:category' element={<ItemContainer/>} />
            <Route path='/:category/:id' element={<ItemDetailContainer/>} />
            <Route path='/carrito' element={<Cart/>} />
            <Route path='/checkout' element={<Checkout/>}/>
          </Routes>
      </BrowserRouter>
    </CartProvider>
  )
}

export default App
