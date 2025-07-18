import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Register from './pages/Register'
import Navbar from './components/Navbar'
import Product from './pages/Product'


const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path="/product/:category/:id" element={<Product />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
