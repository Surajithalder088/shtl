import React from 'react'
import { useMediaQuery } from 'react-responsive'
import Button from '../components/Button'
import WhyUs from '../sections/WhyUs'
import StartProject from '../sections/StartProject'
import FaQ from '../sections/FaQ'
import Footer from '../sections/Footer'
import { useNavigate } from 'react-router-dom'

const BookAppoinment = () => {
     const isMobile= useMediaQuery({query:'(max-width:768px)'})
    const navigate = useNavigate();

  return (
   <>
   <div className='relative'>
        <div className={`
  flex items-center justify-between ${isMobile ? 'py-3' : 'p-1'}
  fixed top-0 w-[100vw] z-50 fit-content 

  backdrop-blur-xl
  bg-gradient-to-b from-black/70 via-black/40 to-transparent

  
`}>
        <p className={`flex-1 text-white flex items-center justify-start cursor-pointer ${isMobile ? 'pl-6' : 'pl-15 '}`}
         onClick={() => navigate("/")}>
          <img src='/images/shtl-logo.png'    className={`${isMobile ? 'size-6' : 'size-12'}`}/>
          <span className={`${isMobile ? 'text-md' : 'text-2xl'} font-serif italic`}>SH TECH LABS</span></p>


       {!isMobile && (
        <div className='flex items-center justify-around gap-2 w-1/2'>
          <p    className="cursor-pointer hover:opacity-70 transition"
           onClick={() => smoothScrollTo(window.innerHeight * 1)}
       >About</p>
          <p   className="cursor-pointer hover:opacity-70 transition"
           onClick={() => smoothScrollTo(window.innerHeight * 2)}>Services</p>
          <p   className="cursor-pointer hover:opacity-70 transition"
           onClick={() => smoothScrollTo(window.innerHeight * 3)}>Connect</p>

           <Button />
        </div>)}
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
          <source src={isMobile ? "/images/service-m.mp4" : "/images/service-w.mp4"} type="video/mp4" />
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