import React from 'react'
import Hero, { PremiumBackground } from './sections/Hero'
import AboutSection from './sections/About'
import Services from './sections/Services'
import ExperienceSection from './sections/ExperienceSection'



const App = () => {



  const smoothScrollTo = (targetY, duration = 400) => {
  const startY = window.scrollY
  const distance = targetY - startY
  let startTime = null

  const easeInOutCubic = (t) =>
    t < 0.5
      ? 4 * t * t * t
      : 1 - Math.pow(-2 * t + 2, 3) / 2

  const animate = (currentTime) => {
    if (!startTime) startTime = currentTime

    const timeElapsed = currentTime - startTime
    const progress = Math.min(timeElapsed / duration, 1)

    const easedProgress = easeInOutCubic(progress)

    window.scrollTo(0, startY + distance * easedProgress)

    if (timeElapsed < duration) {
      requestAnimationFrame(animate)
    }
  }

  requestAnimationFrame(animate)
}



  return (
     <div style={{ position: 'relative' }}>

      {/* header */}
     <div className="
  flex items-center justify-between p-1
  fixed top-0 w-[100vw] z-50

  backdrop-blur-xl
  bg-gradient-to-b from-black/70 via-black/40 to-transparent

  
">
        <p className='flex-1 text-white flex items-center cursor-pointer pl-15'
         onClick={() => smoothScrollTo(window.innerHeight * 0)}>
          <img src='/images/shtl-logo.png' className='size-12'/>
          <span className='text-2xl font-serif italic'>SH TECH LABS</span></p>


        <div className='flex items-center justify-around gap-2 w-1/2'>
          <p    className="cursor-pointer hover:opacity-70 transition"
           onClick={() => smoothScrollTo(window.innerHeight * 1)}
       >About</p>
          <p   className="cursor-pointer hover:opacity-70 transition"
           onClick={() => smoothScrollTo(window.innerHeight * 2)}>Services</p>
          <p   className="cursor-pointer hover:opacity-70 transition"
           onClick={() => smoothScrollTo(window.innerHeight * 3)}>Connect</p>
        </div>
      </div>


      {/* content */}
         <Hero />
           <div id='about' className="relative z-10">

        {/* THIS creates scroll space equal to hero */}
        <div className="h-screen" />

        {/* About comes after scroll space */}
       
    

          <div className="sticky top-0">
            <AboutSection />
          </div>

       
     

      </div>

           <div id='services' className="relative z-15">

        {/* THIS creates scroll space equal to hero */}
       

        {/* About comes after scroll space */}
       
    

          <div className="sticky top-0">
            <Services />
          </div>

       
     

      </div>

         <div id='services' className="relative z-15">
         <div className="sticky top-0">
            <ExperienceSection />
          </div>

       
     

      </div>

      
       </div>
  )
}

export default App