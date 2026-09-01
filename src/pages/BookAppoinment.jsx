import React, { useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import Button from '../components/Button'
import WhyUs from '../sections/WhyUs'
import StartProject from '../sections/StartProject'
import FaQ from '../sections/FaQ'
import Footer from '../sections/Footer'
import { useNavigate } from 'react-router-dom'
import { useLocation } from "react-router-dom";




const BookAppoinment = () => {
     const isMobile= useMediaQuery({query:'(max-width:768px)'})
    const navigate = useNavigate();
        const[headerMenuOpen,setHeaderMenuOpen]=useState(false)
        const location = useLocation();
        const currentPath = location.pathname;

  return (
   <>
   <div className='relative'>
              <div className={`
  flex flex-col ${isMobile ? 'py-3' : 'p-1'}
  fixed top-0 w-[100vw] z-90 fit-content 

  backdrop-blur-xl
  bg-gradient-to-b from-black/70 via-black/40 to-transparent

  
`}>
      <div className='flex items-center justify-between w-full '> 
         <a className={`flex-1 text-white flex items-center justify-start cursor-pointer ${isMobile ? 'pl-6' : 'pl-15 '}`}
         href='/'>
          <img src='/images/shtl-logo.png'    className={`${isMobile ? 'size-6' : 'size-12'}`}/>
          <span className={`${isMobile ? 'text-md' : 'text-2xl'} font-serif italic`}>SH TECH LABS</span></a>


       {!isMobile ? (
        <div className='flex items-center justify-around gap-2 w-1/2'>
          <a   className="cursor-pointer hover:opacity-70 transition"
           href='/about' 
       >About</a>
          <a   className="cursor-pointer hover:opacity-70 transition"
           href='/services'>Services</a>
          <a   className="cursor-pointer hover:opacity-70 transition"
           href='/contact'>Connect</a>

           <Button />
        </div>):
        <div className='flex items-center justify-end gap-2 w-1/2 pr-8'>
          <p className="cursor-pointer hover:opacity-70 transition text-white font-semibold p-0"
          onClick={() => setHeaderMenuOpen(!headerMenuOpen)}>{headerMenuOpen ? 'X' : <img src='/images/main-menu.png' className='size-4' />}</p>
        </div>
        }</div>

       {headerMenuOpen && (
        <div style={{display:'flex',alignItems:'center',justifyContent:'space-around',padding:'5px 0px',borderTop:"0.3px solid #262626"}}
        classnamwe='flex items-center justify-around w-[100vw] gap-2  transition-smooth duration-300 ease-in-out '>
          <a   className="cursor-pointer hover:opacity-70 transition text-sm"
           href='/about' 
       >About</a>
          <a   className="cursor-pointer hover:opacity-70 transition"
           href='/services'>Services</a>
          <a   className="cursor-pointer hover:opacity-70 transition"
           href='/contact'>Connect</a>

      
      
        </div>
       )}


      </div>


      {  <section style={{position: "relative"}}
        className={`
          ${isMobile ? 'h-[60vh]' : 'h-[60vh]'} w-full rounded-t-4xl 
          flex items-center justify-center
          relative overflow-hidden
          transition-all duration-300
           
        `}
      >

        {/* 🔥 FULL BACKGROUND VIDEO */}
        <video
          className="absolute inset-0 w-full h-full object-cover h-[60vh]"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={isMobile ? "https://res.cloudinary.com/dbxx49ers/video/upload/v1788252057/service-m_wombzg.mp4" :
           "https://res.cloudinary.com/dbxx49ers/video/upload/v1788252057/service-w_s9kvey.mp4"} 
          type="video/mp4" />
        </video>
          <div className="absolute inset-0">
    <div className="absolute inset-0 backdrop-blur-[1px] bg-gradient-to-b from-black/80 via-black/40 to-transparent" />
    <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/10" />
  </div>

      </section>}
      <StartProject/>
      <WhyUs/>
      <FaQ/>
      <Footer/>

   </div>
   </>
  )
}

export default BookAppoinment