import { ItemCount } from "../ItemCount/ItemCount"
export function ItemListContainer(){
    function onAdd(contador){
        console.log(`Se agregaron ${contador} par/es de botines`);
    }
    return(
        <ItemCount stock={6} onAdd={onAdd}/>
    )
}