import React from "react"
import './item.css'

export const Item = ({botines}) =>{
    const {marca,modelo,precio,image,id} = botines
    return(
        <div className="card w-25 cards" >
                    <img src={image} className="card-img-top img" alt={marca}></img>
                            <p className="card-text font cardtext">{marca} {modelo}<br/>${precio}</p> 
                            <button className=" button"> Ver detalles</button>
                        </div>
    )
}