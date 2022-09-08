import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { botinesData } from '../botinesData';
import { ItemDetail } from '../ItemDetail/ItemDetail';

export const ItemDetailContainer = () => {
    const [botin, setBotines] = useState([{}])
    const [cargando, setCargando] = useState(true)
    const {id} = useParams()

    useEffect(() => {
        const getItem =  new Promise ((resolve,rej)=>{
            setTimeout(()=> resolve(botinesData.find(botines => botines.id === Number(id)))
            , 2000)  
        }) 
        getItem
        .then(response => {setBotines(response) 
            setCargando(false)})
            .catch(error => console.error(error))
    }, []);

    return(
       cargando ? <h1> Cargando ... </h1> : <ItemDetail item={botin}/>
    )
}