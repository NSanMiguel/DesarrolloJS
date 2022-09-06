import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { botinesData } from '../botinesData';
import { ItemDetail } from '../ItemDetail/ItemDetail';

export const ItemDetailContainer = () => {
    const [botin, setBotines] = useState([])
    
    //const {id} = useParams()

    const getItem = () => new Promise ((resolve,rej)=>{
        setTimeout(()=>{ resolve(botinesData.find(botines => botines.id === 4))
        rej("error")}, 2000)  
    }) 

    useEffect(() => {
        getItem()
            .then(response => setBotines(response))
            .catch(error => console.error(error))
    }, []);

    return(
        <ItemDetail item={botin}/>
    )
}