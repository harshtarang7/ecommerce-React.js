import React, { createContext, useState } from 'react'
let CartContext=createContext();

export default function Maincontext(props) {
    let[Cart,setCart]=useState([])
  return (
    <div>
        <CartContext.Provider value={{Cart,setCart}}>
        
        {props.children}
        </CartContext.Provider>
    </div>
  )
}
export {CartContext}