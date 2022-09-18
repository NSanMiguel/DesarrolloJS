import React,{useContext} from 'react';
import { CartContext } from '../../Context/CartContext';
import { CardCart } from '../CardCart/CardCart';
import { CartVacio } from './CartVacio/CartVacio';

export const Cart = () => {
    const {cart,getTotal,clearAll} = useContext(CartContext)
    return cart.length > 0 ? (
        <div>
             <h1> SU CARRITO DE COMPRAS</h1>
             <div className='card-container row'>
                {cart.map((carrito,indice)=> {
                     return <CardCart key={indice} cart={carrito}/>
                 })}
             </div>
             <div className='card-container' style={{width: "50%"}}>
                 <div className='card-body'>
                 <h2> PRECIO TOTAL: $ {getTotal()}</h2>
                 <button className='botonEliminar'> Confirmar Compra</button>
                 <button className='botonEliminar' onClick={() => clearAll()}>Vaciar Carrito</button>
                 </div>
             </div>
             </div>
    ):(
        <div> 
            <CartVacio/>
        </div>
        )}       
