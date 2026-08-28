import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import ProductDetails from './Pages/ProductDetails/ProductDetails';
import Category from './Pages/Category/Category';
import Cart from './Pages/Cart/Cart';
import Checkout from './Pages/Checkout/Checkout';
import OrderSuccess from './Pages/OrderSuccess/OrderSuccess';
import Shop from './Pages/Shop/Shop';
import Wishlist from './Pages/Wishlist/Wishlist';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/category/:category" element={<Category />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/order-success" element={<OrderSuccess />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
