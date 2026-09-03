import React from 'react'
import { useMediaQuery } from 'react-responsive'
import Button from '../components/Button'
import WhyUs from '../sections/WhyUs'
import StartProject from '../sections/StartProject'
import FaQ from '../sections/FaQ'
import Footer from '../sections/Footer'

import Header from '../components/Header'
import ProjectList from '../sections/ProjectList'

const Projects = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  return (
       <>
   <div className='relative'>

   <Header/>


      {  <section style={{position: "relative"}}
        className={`
          ${isMobile ? 'h-[60vh]' : 'h-[60vh]'} w-full rounded-t-4xl 
          flex items-center justify-center
          relative overflow-hidden
          transition-all duration-300
           
        `}
      >

        {/* 🔥 FULL BACKGROUND VIDEO */}
        
        <div    className="absolute flex justify-center items-start inset-0 w-full h-full object-cover h-[60vh]">
            <img
            alt='logo-default'
            src='/images/shtl-dark-logo (1).jpeg'
            className={`w-[70%] h-full ${isMobile?'object-contain':'object-cover'}`}/>

        </div>


      

      </section>}
     <ProjectList/>
      <WhyUs/>
      <FaQ/>
      <Footer/>

   </div>
   </>
  )
}

export default Projects