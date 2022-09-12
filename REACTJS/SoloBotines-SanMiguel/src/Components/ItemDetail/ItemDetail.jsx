import React,{useState} from 'react'
import { ItemCount } from "../ItemCount/ItemCount";
import { Link } from "react-router-dom"
import './ItemDetail.css';

export const ItemDetail = ({item})=>{
    const [cantidad, setCantidad] = useState(0)
    const {image,marca,modelo,precio,stock,detalles} = item

    const onAdd = (cant) =>{
        console.log(`Se ingresaron al carrito: ${cant} botines`)
        setCantidad(cant)
    }

    return(

        <div className="card mb-3 cardimg">
                <h5 className="card-title title"> {marca} {modelo}</h5>
                <img className="card-img-top imagen" src= {image} alt={image}/>
        <div className="card-body">
                <p className="card-text precio"> $ {precio} </p>
                <p className="card-text detalles"> Stock: {stock} </p>
                {cantidad > 0 ? <button className=' btn btn-primary'><Link className="nav-link" to="/cart"> Ir al carrito </Link> </button> : <ItemCount initial={1} stock={item.stock} onAdd={onAdd} />}
                <p className="card-text detalles"> {detalles} </p>
                
        </div>
        </div>
    )

}