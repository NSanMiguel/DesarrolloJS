import React,{useContext} from 'react';
import { CartContext } from '../../Context/CartContext';
import  './CardCart.css'

export const CardCart = ({cart}) => {
    const {image,marca,modelo,precio,cantidad,id} = cart
    const {removeItem,clearAll} = useContext(CartContext)


    return (
        
        <div className="card" style={{ width: "18rem" }}>
                <img className="card-img-top" src={image} alt={image} />
                <div className="card-body">
                    <p className="card-text">{marca} {modelo}</p>
                    <p className="card-text">$ {precio}</p>
                    <p className="card-text">Cantidad: {cantidad}</p>
                </div>
                <div >
                <button className='botonEliminar' onClick={() => removeItem({id})}>Eliminar Producto</button>
                <button className='botonEliminar' onClick={() => clearAll()}>Vaciar Carrito</button>
                </div>
        </div>
    );
}


