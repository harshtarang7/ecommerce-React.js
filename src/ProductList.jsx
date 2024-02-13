import logo from './logo.svg';
import './App.css';
import Axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ProductDetails from './ProductDetails';
import Header from './common/Header';
import { cartContext } from './context/Maincontext';




export default function ProductList()  {
  
  let[products,setProducts]=useState([])
  
  let [categories,setCategories]=useState([])
  let[currPage,setCurrPage]=useState(1)
  let[ProductPerPage]=useState(15)

  

  let getproducts=()=>{
    Axios.get('https://api.escuelajs.co/api/v1/products')
    .then((res)=>res.data)
    .then((finalres)=>{
      setProducts(finalres)
    })
  }
  useEffect(()=>{
    getproducts();
  },[])

  let getCategory=(i)=>{
    Axios.get('https://api.escuelajs.co/api/v1/categories/')
    .then((res)=>res.data)
    .then((finalres)=>{
      setCategories(finalres)
    })
  }
  
  useEffect(()=>{
    getCategory();
  },[])
  const addtoCart=(data)=>{
    console.log(data)
  }
  return (
    <div className=''>
      <Header/>
    {/* banner */}
    
       <div className='w-full  bg-gradient-to-r from-gray-300 to-gray-50 '>
      
        <div className='max-w-[1320px] mx-auto py-4 overflow-hidden relative'>
          <div className='grid grid-cols-2 place-items-center '>
            
            <div className='text-center'> 
              <h4 className='font-[Pacifico] text-red-700 text-[30px]'>Fashion Sale</h4>
              <h3 className='text-[35px] font-bold'>Minimal Style</h3>
              <p className='px-[85px] text-gray-700'>Discover the latest trends and exclusive deals on our shopping platform, offering a diverse range of products to cater to your every need with just a click away.</p>
            </div>

            <div className=''> 
              <img src={require('../src/asset/PngItem_384661.png')} className='h-[450px] scale-110' />
            </div>

          </div>
        </div>
       </div>

  <div className='max-w-[1320px] mx-auto mt-[20px] bg-gray-800'>
    
      {
        categories.slice(0,7).map((v,i)=>{
          return(
            <button className="bg-black me-3 text-white px-3 py-2">{v.name}</button>
          )
        })
      }
    
  </div>
    <div className='max-w-[1320px] mx-auto mt-[40px]'>
      
      <div className="grid grid-cols-4 gap-8 ">
      {
        products.slice(0,35).map((v,i)=>{
          return(
                <CardsProduct value={v} />              
                )
              })
            }
      </div>
      </div>
    </div>
  );
}

function CardsProduct({value}){
 
  let [Cart,setCart]=useContext(CartContext)
  console.log(Cart)
  const addtoCart=()=>{
    
   let filterData=Cart.filter((v,i)=>v.name=value.title)
   if(filterData.length==1){
    let filterfinaldata=Cart.filter((v,i)=>{
        if(v.name==value.title){
            v.qty+=1
        }
        return v;
    })
    setCart(filterfinaldata)
   }
   else{
    let cartDetails={
        name:value.title,
        image:value.images[0],
        price:value.price,
        qty:1,
    }
    setCart([...Cart,cartDetails])
   }
  }
  return(
    <div class="bg-yellow-100  w-[300px] ">
      <img class="w-full h-[270px] object-cover" src={value.images[1]} alt="Sunset in the mountains"/>
      <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2">{value.title}</div>
      <p class="text-gray-700 text-base">
       {value.description.slice(0,65)}.....
      </p>
      </div>
      <div class="px-4 py-3">
        <button className='bg-green-800 text-white rounded-[10px] px-4 py-2 me-3' onClick={addtoCart}>Add to cart</button>
        <Link to={`/ProductDetails/${value.id}`}><button className='bg-red-500 px-4 py-2 rounded-[10px] text-white'>see details</button></Link>
      </div>
    </div>
  )
}
