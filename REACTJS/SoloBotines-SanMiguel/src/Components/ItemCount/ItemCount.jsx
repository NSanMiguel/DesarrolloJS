import {useState} from 'react'
export function ItemCount({stock, onAdd}) {
    const [contador, setContador] = useState(1)
    function suma(){
        if (contador < stock)
        setContador(contador + 1)
    }

    function resta(){
        if (contador > 1){
        setContador(contador - 1)
        }
    }

    function reset(){
        setContador(1)
    }

    return(
        <div className="card text-white bg-primary mb-3" style={{ maxWidth: "20rem" }}>
            <div className="card-header">
                SOLO BOTINES
            </div> 
        <div className="card-body">
            <h4 className="card-title"> BOTINES PREDATOR EDGE.3 </h4>
            <p className="card-text">Stock: {stock} </p>
            <p className="card-text">Cantidad: {contador} </p>
        </div>
        <div>
            <button className="btn-primary" onClick={suma}> + </button>
            <button className="btn-primary" onClick={reset}> Reset </button>
            <button className="btn-primary" onClick={resta}> - </button>
        </div>
        <div>
            <button className='btn-primary' onClick={()=>onAdd(contador)}> Confirmar</button>
        </div>
        </div>
    )
}