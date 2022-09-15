import React, {createContext,useState} from 'react';

const CartContext = createContext()
const CartProvider = (props) => {
     
    const [cart, setCart] = useState([]);

    const addItem = (botin) =>{
        const cartBis = cart
        if (cartBis !== ""){
            cartBis.find((botines) => botines.id === botin.id)
            if(cartBis === true){
                cartBis.cantidad++
                cartBis.push(botin)
                setCart(cartBis)
            }else{
                cartBis.push(botin)
                setCart(cartBis)
                    
            }
        }else{
            cartBis.push(botin)
            setCart(cartBis)
        }
    }

    const removeItem = (botin) => {
        const deleteCartBis = cart
        let indice = deleteCartBis.findIndex((botines)=> botines.id === botin.id)
        deleteCartBis.splice(indice)
        setCart(deleteCartBis)
    }

    const clearAll = () =>{
        let borrarCart = cart
        borrarCart = []
        setCart(borrarCart)
    }
    

    return (
        <>
        <CartContext.Provider value={{cart,addItem,removeItem,clearAll}}>
            {props.children}
        </CartContext.Provider>
        </>
        
    );
}

export  {CartContext, CartProvider};
