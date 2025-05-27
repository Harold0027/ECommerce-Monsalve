import './App.css'
import Navbar from './components/Navbar'
import { Route,Routes,BrowserRouter } from 'react-router-dom'
import HomeContainer from './components/HomeContainer'
import HomeDetailContainer from './components/HomeDetailContainer'
import NewsContainer from './components/NewContainer'
import NewDetailContainer from './components/NewDetailContainer'
import OfertsContainer from './components/OfertsContainer'
import OfertsDetailContainer from './components/OfertsDetailContainer'
import PopularsContainer from './components/PopularsContainer'
import PopularDetailContainer from './components/PopularDetailContainer'


function App() {
  return (
    <>
      <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path='/' element={<HomeContainer/>} />
            <Route path='/homeDetail/:id' element={<HomeDetailContainer/>}/>
            <Route path='/petShop/nuevos' element={<NewsContainer/>}/>
            <Route path='/nuevosDetail/:id' element={<NewDetailContainer/>}/>
            <Route path='/petShop/ofertas' element={<OfertsContainer/>} />
            <Route path='/ofertasDetail/:id' element={<OfertsDetailContainer/>} />
            <Route path='/petShop/populares' element={<PopularsContainer/>} />
            <Route path='/popularesDetail/:id' element={<PopularDetailContainer/>} />
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
