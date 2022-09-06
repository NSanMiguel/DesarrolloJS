import React from "react";
import './ItemDetail.css';

export const ItemDetail = ({item})=>{
    const {image,marca,modelo,precio,detalles} = item
    return(

        <div className="card mb-3 cardimg">
                <h5 className="card-title title"> {marca} {modelo}</h5>
                <img className="card-img-top imagen" src= {image} alt={marca}></img>
        <div className="card-body">
                <p className="card-text precio"> $ {precio} </p>
                <p className="card-text detalles"> {detalles} </p>
                <button className="btn btn-warning"> AGREGAR AL CARRITO </button>
        </div>
        </div>
    )

}