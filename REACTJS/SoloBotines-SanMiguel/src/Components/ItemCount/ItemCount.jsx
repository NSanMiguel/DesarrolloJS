import React,{useState} from 'react'
import './ItemCount.css'
export function ItemCount({botines}) {
    const [cantidad, setCantidad] = useState(1)

    const agregarAlCarrito = (botines,cantidad) =>{
        const botinesCarrito = {id: botines.id, cantidad: cantidad}
        console.log(botinesCarrito)
    }

    const cantidadBotines = (operar) => {
        if (operar == "+"){
            if(cantidad < botines.stock){
                setCantidad(cantidad + 1)
            }
        }else{
            if (cantidad > 1){
                setCantidad(cantidad - 1)
            }
        }
    }

    return(
      <div>
        <div className='card-btn'>
            <p className="stock">
                {cantidad}
            </p>
            <button className="btn btn-outline-danger text-white " onClick={() => cantidadBotines ("+") }> + </button> 
            <button className="btn btn-outline-danger text-white"  onClick={() => cantidadBotines ("-")}> - </button>
        </div>
            <button className='btn btn-danger ' onClick={() => agregarAlCarrito(botines,cantidad)}> Comprar </button>
        </div>
    )
}