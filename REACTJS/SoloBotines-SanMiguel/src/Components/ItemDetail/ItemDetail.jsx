import React from "react";
import { ItemCount } from "../ItemCount/ItemCount";
import './ItemDetail.css';

export const ItemDetail = ({item})=>{
    const {image,marca,modelo,precio,stock,detalles} = item
    return(

        <div className="card mb-3 cardimg">
                <h5 className="card-title title"> {marca} {modelo}</h5>
                <img className="card-img-top imagen" src= {image} alt={image}/>
        <div className="card-body">
                <p className="card-text precio"> $ {precio} </p>
                <p className="card-text detalles"> Stock: {stock} </p>
                <ItemCount botines={item}/>
                <p className="card-text detalles"> {detalles} </p>
                
        </div>
        </div>
    )

}