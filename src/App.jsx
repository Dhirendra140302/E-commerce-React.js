import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Banner from './Components/Banner';
import Login from './Pages/Login';
import Register from './Pages/Register';
import ProductDetails from './Pages/ProductDetails';
import ErrorPage from './Pages/ErrorPage';
import MainLayout from './Layout/MainLayout';
import Whishlist from './Pages/Wishlist';
import Cart from './Pages/Cart';
function App() {
  return (
    <>
    <BrowserRouter>
      <Routes> 
        <Route element={<MainLayout/>}>
          <Route path='/' element={<Banner/>}/>
          <Route path='/details' element={<ProductDetails/>}/>
          <Route path='/wishlist' element={<Whishlist/>}/>
          <Route path='/cart' element={<Cart/>}/>
        </Route>
        <Route path='/login' element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="*" element={<Navigate to="/pagenotfound"/>}/>
        <Route path="/pagenotfound" element={<ErrorPage/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
