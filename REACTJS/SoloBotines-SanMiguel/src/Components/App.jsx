import React from 'react';
import './App.css';
import { ItemListContainer } from './ItemListContainer/ItemListContainer';
import {NavBar} from './NavBar/NavBar';
import { ItemDetailContainer } from './ItemDetailContainer/ItemDetailContainer';


export function App() {
  return (
    
    <div className="div1">
      <NavBar/>
      <ItemDetailContainer/>
    </div>
  );
}


