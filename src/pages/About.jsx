import React, { useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import Button from '../components/Button'
import Footer from '../sections/Footer.jsx'
import FaQ from '../sections/FaQ.jsx'
import ExperienceSection from '../sections/ExperienceSection.jsx'
import WhyUs from '../sections/WhyUs.jsx'
import { useLocation } from "react-router-dom";





const About = () => {
   const isMobile= useMediaQuery({query:'(max-width:768px)'})
    const[headerMenuOpen,setHeaderMenuOpen]=useState(false)
    const location = useLocation();
    const currentPath = location.pathname;
  return (
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
          <a   style={{borderBottom: currentPath === '/about' ? '1px solid grey' : 'none'}} 
           className="cursor-pointer hover:opacity-70 transition"
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
          <a  style={{borderBottom: currentPath === '/about' ? '1px solid grey' : 'none'}} 
          className="cursor-pointer hover:opacity-70 transition text-sm"
           href='/about' 
       >About</a>
          <a   className="cursor-pointer hover:opacity-70 transition"
           href='/services'>Services</a>
          <a   className="cursor-pointer hover:opacity-70 transition"
           href='/contact'>Connect</a>

      
      
        </div>
       )}


      </div>

        <div className="relative w-full h-[100vh] overflow-hidden">

  {/* Background Image */}
  <img
    src="/images/about-hero.jpeg"
    alt="About SH TECH LABS"
    className="absolute inset-0 w-full h-full object-cover z-0"
  />

  {/* Dark Overlay */}
  <div className="absolute inset-0 z-10">
    <div className="absolute inset-0 backdrop-blur-[1px] bg-gradient-to-b from-black/80 via-black/40 to-transparent" />
    <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/70" />
  </div>

  {/* Content */}
  <div className="relative z-20 w-full h-full flex flex-col items-center justify-center px-6 md:px-30 text-white">
        <h1 className="text-5xl md:text-7xl font-bold text-center mb-8">About Us</h1>
    <h1 className="text-3xl md:text-5xl font-bold text-center mb-6">
      We Build 
       <span className="text-transparent bg-clip-text bg-gradient-to-r px-5 from-blue-400 to-emerald-400">
                Digital Solutions 
              </span>
       That Help Businesses Grow
    </h1>

    <p className="max-w-4xl text-center text-base md:text-lg leading-relaxed text-white">
      At SH TECH LABS, we help businesses turn their ideas and challenges
      into practical digital solutions. From professional websites and
      custom software to modern applications and business automation,
      we create technology designed around real business needs. Our goal
      is simple: make your business more visible, efficient, and ready to
      grow in the digital world. Whether you're a startup, local business,
      clinic, school, restaurant, or growing company, we combine thoughtful
      design, reliable technology, and a business-focused approach to
      deliver solutions that create lasting value.
    </p>

  </div>

</div>
<WhyUs/>
      

   <FaQ/>
       <Footer/>
    </div>
  )
}

export default About