//import { ItemCount } from "../ItemCount/ItemCount"
import React, {useEffect,useState} from "react"
import { ItemList } from "../ItemList/ItemList"
import { botinesData } from "../botinesData"
import { useParams } from "react-router-dom"

export const  ItemListContainer = () =>     {
    const [botines, setBotines] = useState([])
    const [cargando,setCargando] = useState(true)

    const {marca} = useParams()
    console.log(marca)

    useEffect(()=>{
        const dataBotines = new Promise ((res,rej)=> {
            if(marca){
                setTimeout(() => res(botinesData.filter(botin => botin.marca === marca))
                , 2000);
            }else{
                setTimeout(() => res(botinesData)
                , 2000);
            }
        })
        dataBotines.then((res)=> {setBotines(res) 
            setCargando(false)})
        .catch((err)=> console.log(err))

    },[marca])

    return (
     cargando ? <h1> Cargando ... </h1> : <ItemList list={botines}/>
    )
}