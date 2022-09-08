import React from "react"
import {Item} from '../Item/Item'
import './ItemList.css'

export const ItemList = ({list}) =>{
    return(
        <div className="cardgeneral">
            <div className="row segundacard">
            {list.map((botin,indice) =>(
                <Item botines={botin} key={indice}/>
            ))}
        </div>
        </div>
    )
}

