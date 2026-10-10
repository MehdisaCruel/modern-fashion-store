import { Navbar } from './components/Navbar'
import { Home } from './pages/Home'
import { Routes, Route } from 'react-router-dom'
import { Shop } from './pages/Shop'
import { ProductDetails } from './pages/ProductDetails'
import { Cart } from './pages/Cart'
import { Login } from './pages/Login'
import { Register } from './pages/Register'
import { Checkout } from './pages/Checkout'
import { NotFound } from "./pages/NotFound"
import { OrderSuccess } from "./pages/OrderSuccess"
import { Footer } from "./components/Footer"
function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/order-success" element={<OrderSuccess />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
