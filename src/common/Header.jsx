import React, { useContext, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { CartContext } from '../context/Maincontext'

export default function Header() {
  let [mobilemenu,setMobileMenu]=useState(false)

  let setToggle=(()=>{
    setMobileMenu(!mobilemenu)
  })
  let {Cart}=useContext(CartContext)
  return (
    <div className='w-full sticky top-0 z-[20]'>
      <header className='bg-[black] text-[white] hidden  mx-auto lg:flex w-full lg:items-center lg:justify-between  shadow-lg p-8'>
       
       <div className='basis-1/4'>
        
        <div className="">
             <h4 className='font-[Pacifico]'>SHOPPER</h4>
        </div>

        </div> 
        <div className='basis-1/4 lg:flex gap-6 items-center '>
        <NavLink to={'/'} className={`nav-link ${window.location.pathname === '/' ? 'px-3 py-2 bg-black border-[1px] border-white text-white' : ''}`}>home</NavLink>
        <NavLink to={'/about'}>about</NavLink>
        <NavLink to={'/Cart'}> <button className={`bg-[#eeffcc] border border-black text-black px-4 py-2 rounded-[10px] relative `}>Cart<sup className='absolute p-2 bg-red-700 text-white rounded-[20px] text-[15px]'>{Cart.length}</sup> </button> </NavLink>
        </div>


        

      </header> 
     {/*  */}
     <div className='flex lg:hidden w-full bg-[black] text-[white]  mx-auto w-full items-center justify-between  shadow-lg p-8'>
     <div className='basis-1/4 '>
             <h4 className='font-[Pacifico]'>SHOPPER</h4>
      </div> 
        <div className='basis-1/4 relative'>
          <button className='text-white px-3 py-2 bg-black border-[1px] border-white ' onClick={()=>setMobileMenu(!mobilemenu)}>Menu</button>
         
            {
              mobilemenu && (
                <div className='flex absolute flex-col aborder-[1px] border-white w-[100%]'>
                    <NavLink to={'/'} className={`nav-link ${window.location.pathname === '/' ? 'px-3 py-2  bg-black border-[1px] border-white text-white' : ''}`}>home</NavLink>
                    <NavLink to={'/about'} className='px-3 py-2  bg-black border-[1px] border-white text-white'>about</NavLink>
                    <NavLink to={'/Cart'} className={'px-3 py-2  bg-black border-[1px] border-white text-white'}> <button >Cart<sup className='p-2  text-white rounded-[20px] text-[15px]'>{Cart.length}</sup> </button> </NavLink>
                </div>
              )
            }
       
          
        </div>
     </div>
    </div>
  )
}
