import React,{useContext} from 'react';
import { CartContext } from '../../Context/CartContext';
import { CardCart } from '../CardCart/CardCart';

export const Cart = () => {
    const {cart} = useContext(CartContext)

    return (
        <>
        <h1> SU CARRITO DE COMPRAS</h1>
        <div className='row'>
            {cart.map((carrito,index)=>(
                <CardCart key={index} cart={carrito}/>)
            )}
        </div>

        </>   
            
    );  
}


