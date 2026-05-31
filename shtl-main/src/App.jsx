import React, { useEffect, useState } from 'react'
import Hero, { PremiumBackground } from './sections/Hero'
import AboutSection from './sections/About'
import Services from './sections/Services'
import ExperienceSection from './sections/ExperienceSection'
import TechStack from './sections/TechStack'
import gsap from "gsap";
import { useMediaQuery } from 'react-responsive'
import Button from './components/Button'


const App = () => {

 const isMobile= useMediaQuery({query:'(max-width:768px)'})

 const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  
useEffect(() => {
    // Loading time = 4 sec
    const duration = 4000;
    const intervalTime = 40;

    let current = 0;

    const interval = setInterval(() => {
      current += 1;

      const value = Math.min(
        Math.round((current * intervalTime * 100) / duration),
        100
      );

      setProgress(value);

      if (value >= 100) {
        clearInterval(interval);

        setTimeout(() => {
          setIsLoading(false);
        }, 200);
      }
    }, intervalTime);

    // Image scale animation
    gsap.fromTo(
      ".loader-image",
      {
        scale: 0.3,
        opacity: 0,
      },
      {
        scale: 1,
        opacity: 1,
        duration: 4,
        ease: "power3.out",
      }
    );

    return () => clearInterval(interval);
  }, [isMobile]);

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
    <>{
      isLoading ? (
        <section
          style={{
            height: "100vh",
            width: "100%",
            position: "fixed",
            top: 0,
            left: 0,
            background: "#000",
            color: "#fff",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999,
            overflow: "hidden",
          }}
        >
          <div
            style={{
              width: "100%",
              maxWidth: "500px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "30px",
              padding: "20px",
            }}
          >
            {/* Image */}
            <div  className="loader-image">
            <img
             src='/images/shtl-logo.png'
              alt="logo"
              
              style={{
                width: "180px",
                height: "180px",
                objectFit: "contain",
              }}
            />
              <span className='text-2xl font-serif italic'>SH TECH LABS</span>
              </div>

            {/* Loading Text */}
            <h1
              style={{
                fontSize: "32px",
                fontWeight: "bold",
                letterSpacing: "2px",
              }}
            >
              Loading...
            </h1>

            {/* Progress Bar */}
            <div
              style={{
                width: "100%",
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "8px",
                  background: "#222",
                  borderRadius: "999px",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    width: `${progress}%`,
                    height: "100%",
                    background: "#fff",
                    transition: "width 0.04s linear",
                  }}
                />
              </div>

              {/* Percent */}
              <div
                style={{
                  marginTop: "12px",
                  textAlign: "right",
                  fontSize: "18px",
                  fontWeight: "600",
                }}
              >
                {progress}%
              </div>
            </div>
          </div>
        </section>
      ) :
     (<div style={{ position: 'relative' }}>

      {/* header */}
     <div className={`
  flex items-center justify-between ${isMobile ? 'py-3' : 'p-1'}
  fixed top-0 w-[100vw] z-50 fit-content 

  backdrop-blur-xl
  bg-gradient-to-b from-black/70 via-black/40 to-transparent

  
`}>
        <p className={`flex-1 text-white flex items-center justify-start cursor-pointer ${isMobile ? 'pl-6' : 'pl-15 '}`}
         onClick={() => smoothScrollTo(window.innerHeight * 0)}>
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


      {/* content */}
         <Hero />
         
           <div id='services' className="relative z-10">

          <div className="sticky top-0">
            <div className="h-screen" />
            <Services />
          </div>

      </div>

           <div id='about' className="relative z-15">

          <div className="sticky top-0">
            <AboutSection />
          </div>

       
     

      </div>

         <div id='experience' className="relative z-15 bg-black">
         <div className="sticky top-0">
            <ExperienceSection />
            
          </div>
      </div>

      
       </div>)
       
      } </>
  )
}

export default App