import React from 'react'
import { Link } from 'react-router-dom'
import Header from './common/Header'
import videoUrl from './asset/social-media.mp4'
import { DefaultPlayer as Video } from 'react-html5video';
import 'react-html5video/dist/styles.css';
import '../src/App.css'

export default function Aboutus() {
  return (
    <div className='w-[100vw] h-[100vh] bg-black'>
      <Header/>
        <div className='grid place-items-center h-auto py-[50px]'>
        <div className="bg-[#212121] text-[#fff] w-full p-4 max-w-[1320px]">
           <div className="lg:flex md:block text-center lg:text-left ">
            <div className="basis-2/5">
            <div className=''>
              
            <Video autoPlay loop muted className='mix-blend-difference lg:w-full w-[300px] mx-auto'>
               <source src={videoUrl} type="video/mp4" />
           
        </Video>
            </div>

                </div>
            <div className="basis-3/5 pt-[50px] px-6">
                <h3 className='text-[30px] font-semibold'>ABOUT US</h3>
                <p className='text-gray-500'>Join us on this exciting journey as we continue to redefine the art of online shopping, providing not just products but a curated lifestyle that speaks to the heart of our diverse and discerning clientele. At Jimmy and Joy, we invite you to discover the world of possibilities that await you – where every click is a step toward expressing your unique style and making a statement of individuality.</p>
                
               <Link to={'/'}> <button className='p-3 bg-red-500 text-white mt-4 rounded-[10px] hover:bg-white hover:border-red-500 hover:border-[2px] hover:text-red-500'>Back to Home</button> </Link>
            </div>
           </div>
        </div>
        </div>
    </div>
  )
}
