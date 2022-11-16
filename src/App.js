import Navbar from './components/Navbar/Navbar.js';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import Cart from './components/Cart/Cart.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { createContext, useState } from 'react';
import {CartContextProvider} from './context/CartContext'
import Checkout from './components/Checkout/Checkout.js';

function App() {

  return (
    <div >
      <CartContextProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element = {<ItemListContainer />} />
            <Route path='/category/:categoryId' element = {<ItemListContainer />} />
            <Route path='/item/:productId' element = {<ItemDetailContainer />} />
            <Route path='/item/:*' element = {<h2>No hay productos que conincidan con este criterio. Haz click en el logo para volver al inicio.</h2>}/>
            <Route path='/cart' element = {<Cart />} />
            <Route path='/checkout' element = {<Checkout />} />
            <Route path='*' element = {<h2> ERROR 404 - NOT FOUND</h2>}/>

          </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}

export default App;
