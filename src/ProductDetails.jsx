import axios  from 'axios';
import React, { useEffect, useState } from 'react'
import {Link, NavLink, useParams} from 'react-router-dom'
import Header from './common/Header';

export default function ProductDetails() {
    let [product,setProducts]=useState({})
    let [selectedImageIndex, setSelectedImageIndex] = useState(0);
    let {id}=useParams();
    let getsingleProducts=()=>{
        axios.get(`https://api.escuelajs.co/api/v1/products/${id}`)
       .then((res)=>{
        setProducts(res.data)
    })
    console.log(product)
        
    }
    useEffect(()=>{
        getsingleProducts()
    },[])

    let handleImageClick=(index)=>{
        setSelectedImageIndex(index);
    }
  return (
    <div className='w-full h-[100%] bg-[#111111]'>
      <Header/>
       <div className='grid place-items-center h-[100%] py-[43px]'>
        <div className="bg-[#1c1c1c] w-full p-4 max-w-[1320px] min-h-[74vh] py-[40px]'">
           <div className=" grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 md:px-[30px] ">
            <div className=" lg:h-[60vh] w-[100%]">
            {product.images && product.images.length > 0 && (
                <img src={product.images[selectedImageIndex]} className='lg:h-[90%] md:w-[90%] h-[200px] rounded-[15px] lg:w-[90%]  w-[60%] sm:mx-auto' />
              )}
                <div className='lg:flex md:flex hidden w-full lg:h-[30%] md:h-[15%] gap-[30px] py-4  lg:ms-7 md:ms-6'>

                {   
                product.images &&
                    product.images.map((image, index) => 
                    (
                    <img key={index} src={image} className='rounded-[15px] ' 
                    onClick={()=>handleImageClick(index)}
                    />
                  ))
                }

                </div>
                </div>
            <div className=" sm:max-w-[450px] sm:mx-auto pt-[20px] text-white lg:text-left  md:text-left ">
                <h2 className='lg:text-[30px] md:text-[20px] font-semibold'>{product.title}</h2>
                <p className='lg:text-[18px] md:text-[13px] text-justify my-2 '>{product.description}</p>
                <h4 className='text-[90%]  font-semibold my-4'>Price: {product.price} $</h4>
                
                {
                product.category ? (
                    <>
                    <h4 className='text-[20px] '>Category Name: <b className='font-semibold'>{product.category.name}</b></h4>
                    </>
                )
                :'loading'
                 }
               <Link to={'/'}> <button className='lg:p-3 p-[7px] bg-red-500 text-white mt-4 rounded-[10px] hover:bg-white hover:border-red-500 hover:border-[2px] hover:text-red-500'>Back to Home</button> </Link>
            </div>
           </div>
        </div>
        </div>
    </div>
  )
}
