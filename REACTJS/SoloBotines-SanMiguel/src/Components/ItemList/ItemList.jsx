import React from "react"
import {Item} from '../Item/Item'

export const ItemList = ({list}) =>{
    return(
        <div className=" container">
        <div className="row col-xl-20">
            {list.map((botin) =>(
                <Item botines={botin} key={botin.id}/>
            ))}
        </div>
        </div>
    )
}

