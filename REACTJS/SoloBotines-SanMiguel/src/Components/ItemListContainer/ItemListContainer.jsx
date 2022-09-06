//import { ItemCount } from "../ItemCount/ItemCount"
import React, {useEffect,useState} from "react"
import { ItemList } from "../ItemList/ItemList"
import { botinesData } from "../botinesData"

export const  ItemListContainer = () =>     {
    /*function onAdd(contador){
        console.log(`Se agregaron ${contador} par/es de botines`);
    }*/
    const [botines, setBotines] = useState([])
    //const [cargando,setCargando] = useState(true)

    useEffect(()=>{
        const dataBotines = new Promise ((res,rej)=> {
            setTimeout(() => {
                res(botinesData)
                rej("error")
            }, 2000);
        })
        dataBotines.then((res)=> (setBotines(res)))
        //, setCargando(false)
        .catch((err)=> console.log(err))

    },[])

    return (
    <ItemList list={botines}/>
    )
        //<ItemCount stock={6} onAdd={onAdd}/>
}