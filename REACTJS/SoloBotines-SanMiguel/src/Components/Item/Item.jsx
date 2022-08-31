import React from "react"
import './item.css'

export const Item = ({botines}) =>{
    return(
        <div className="card text-white bg-dark cards" >
                <div className="card-header">SOLO BOTINES</div>
                <img src={botines.image} className="card-img-top" alt={botines.marca}></img>
                    <div className="card-body">
                        <p className="card-text">Marca: {botines.marca}</p>
                        <p className="card-text">Modelo: {botines.modelo}</p>
                        <p className="card-text">Precio: ${botines.precio}</p>
                </div>
            </div>
    )
}