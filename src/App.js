import logo from './logo.svg';
import './App.css';
import Axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from './common/Header';
import { CartContext } from './context/Maincontext';
import 'react-notifications/lib/notifications.css';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import AOS from 'aos';
import 'aos/dist/aos.css';



function App() {
  AOS.init({
    offset: 200,
    duration: 600,
    easing: 'ease-in-sine',
    delay: 100,
  });
  
  let[products,setProducts]=useState([])
  let [Cart,setCart]=useState([])
  let [categories,setCategories]=useState([])
  let [selectedCategory, setSelectedCategory] = useState(null);
  
 

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
    Axios.get(`https://api.escuelajs.co/api/v1/categories/`)
    .then((res)=>res.data)
    .then((finalres)=>{
      setCategories(finalres)
      console.log(finalres)
    })
  }
  
  useEffect(()=>{
    getCategory();
  },[])

  let getCategoryProducts=(categoryId)=>{
    Axios.get(`https://api.escuelajs.co/api/v1/categories/${categoryId}/products`)
    .then((res)=>res.data)
    .then((finalres)=>{
   setProducts(finalres)

    })
  }
  
  const handleCategoryClick = (categoryId) => {
    setSelectedCategory(categoryId);
    getCategoryProducts(categoryId);
  };

 
  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div className='bg-[black] '>
      
       
        <Header/>
       
      <div className='max-w-[1320px] mx-auto py-4 overflow-hidden  '>
          <div className='text-center '>
            
            <div className='text-center'> 
              <h4 className='font-[Pacifico] text-red-700 text-[36px]' data-aos="fade-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">Wear Clothes that matter</h4>
              <p className='w-[40%] mx-auto font-extrabold text-transparent text-[18px] bg-clip-text bg-gradient-to-b from-gray-400 to-gray-950'>Discover the latest trends and exclusive deals on our shopping platform, offering a diverse range of products to cater to your every need with just a click away.</p>
            </div>

            <div data-aos="zoom-in" data-aos-duration="2000" className='banner-image relative'> 
              <img src={require('../src/asset/Free  Bow, Tie, Covering Background Images, Suit Garment Clothing Necktie Background Photo Background PNG and Vectors.jpeg')} className='h-[450px] mx-auto ' />
              
            </div>

          </div>
         
        </div>
     

  <div className='max-w-[1320px] mt-[20px] lg:text-left text-center mx-[40px]' >
   <h2 className='text-white text-center lg:text-left'>Categories</h2>
      {
        categories.slice(0,5).map((v,i)=>{
          return(
            <button className={`bg-[black] me-3 text-white font-semibold px-3 py-2 rounded-[10px]  ${selectedCategory === v.id ?'border-[1px] border-white' :''}`} onClick={()=>handleCategoryClick(v.id)}>{v.name}</button>
          )
        })
      }
   
  </div>
    <div className='max-w-[1320px] mx-auto mt-[40px]  pb-[30px]'>
      
      <div className="grid lg:grid-cols-4 md:grid-cols-2  mx-[20px] gap-8 ">
      {
        products.slice(0,35).map((v,i)=>{
          return(
                <CardsProduct value={v} />              
                )
              })
            }
      </div>
      </div>
      
      
    {/* banner */}
    
      
      

      <NotificationContainer/>
    </div>
  );
}

export default App;
function CardsProduct({value}){
 
  let {Cart,setCart}=useContext(CartContext)
  const addtoCart=()=>{
    
    let filterData=Cart.filter((v,i)=>v.name==value.title)

    if(filterData.length==1)
    {
     let filterfinaldata=Cart.filter((v,i)=>{
         if(v.name==value.title){
             v.qty=v.qty+1
         }
         return v;
     })
     setCart(filterfinaldata)
    }

    else{
      // if not then add it
      NotificationManager.success(value.title +'added successfully')
     let cartDetails={
         name:value.title,
         image:value.images[0],
         price:value.price,
         qty:1
     }
     setCart([...Cart,cartDetails])
    }

   }

  return(
    <div class="bg-[#212121] text-[#fff] w-[100%] ">
      <div className=' h-[50%] overflow-hidden'>

      <img class="w-full h-[270px] object-cover hover:scale-125 hover:transition ease-in-out" src={value.images[1]} alt="Sunset in the mountains"/>
      </div>
      <div class="px-6 py-4">
      <div class="font-semibold text-xl mb-2">{value.title}</div>
      <p class="text-white text-base">
       {value.description.slice(0,65)}.....
      </p>
      </div>
      <div class="px-4 py-3">
        <button className='bg-[#00bfff] text-white rounded-[10px] px-4 py-2 me-3' onClick={addtoCart}>Add to cart</button>
        <Link to={`/ProductDetails/${value.id}`}><button className='bg-[#ee6060] px-4 py-2 rounded-[10px] text-[#ededfc]'>see details</button></Link>
      </div>
    </div>
  )
}
