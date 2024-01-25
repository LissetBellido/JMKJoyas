// Styles
import './App.scss';
// Components
import { Cuerpo } from './components/cuerpo/Cuerpo.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Contact } from './components/contact/Contact.jsx';
import About from './components/about/About.jsx';
import Product from './components/product/product.jsx';
import Cart from './components/cart/cart.jsx';
import Marketplace from './components/marketplace/Marketplace.jsx';




export default function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Cuerpo />}> */}
          <Route path= '/' element={<Cuerpo />} />

          <Route path="about" element={<About />} />
          <Route path="marketplace" element={<Marketplace />} />
          <Route path="contact" element={<Contact />} /> 
          <Route path="product" element={<Product />} />
          <Route path="cart" element={<Cart />} /> 
          {/* </Route> */}

      </Routes>
      </BrowserRouter>
      </>
  )
}
