import React from 'react';
import './App.css';
import {NavBar} from './NavBar/NavBar';
import { ItemDetailContainer } from './ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import { ItemListContainer } from './ItemListContainer/ItemListContainer';
import { Cart } from './Cart/Cart';


export function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<ItemListContainer/>}></Route>
        <Route path="/category/:marca" element={<ItemListContainer/>}></Route>
        <Route path="/detalles/:id" element={<ItemDetailContainer/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}


