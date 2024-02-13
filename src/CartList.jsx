import React, { useContext, useState } from "react";
import { CartContext } from "./context/Maincontext";
import Header from "./common/Header";

export default function CartList() {

 let {Cart,setCart}=useContext(CartContext)

 let FinalCart=Cart.map((cartDetails,i)=>{
  return( <CartItems cartDetails={cartDetails} index={i}/>)
 })

  return (
    <div className="w-full bg-black h-[100vh]">
        <Header/>
     <div className="max-w-[1320px] mx-auto ">
      <h2 className="text-[30px] text-center">Carts</h2>
      

<div className="relative overflow-x-auto">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Product name
                </th>
                <th scope="col" className="px-6 py-3">
                    Product Image
                </th>
                <th scope="col" className="px-6 py-3">
                    Category
                </th>
                <th scope="col" className="px-6 py-3">
                    qty
                </th>
                <th scope="col" className="px-6 py-3">
                    Price
                </th>
                <th scope="col" className="px-6 py-3">
                    Total
                </th>
                <th scope="col" className="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
          {FinalCart}
         
           
        </tbody>
    </table>
</div>

     </div>
      
    </div>
  );
}
function CartItems({cartDetails,index}){

  let{Cart,setCart}=useContext(CartContext)
  let [Cartqty,setCartqty]=useState(cartDetails.qty)

  let handledelete=()=>{
    let filteredData=Cart.filter((v,i)=>i!==index)
    setCart(filteredData)
  }
  
  return(
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        {cartDetails.name}
    </th>
    <td className="px-6 py-4">
       <img src={cartDetails.image} alt="" className="w-[50px] h-[40px]" />
    </td>
    <td className="px-6 py-4">
        Laptop
    </td>
    <td className="px-6 py-4">
       <input type="number" value={2} className="text-black ps-2"/>
    </td>
    <td className="px-6 py-4">
        $2999
    </td>
    <td className="px-6 py-4">
        $2999
    </td>
    <td className="px-6 py-4">
       <button onClick={handledelete} className="bg-white px-3 py-2 text-black">delete</button>
    </td>
</tr>
  )
}
