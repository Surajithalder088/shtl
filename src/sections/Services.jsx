import React, { useEffect, useState, useRef } from 'react'

const Services = () => {
  const [isFixed, setIsFixed] = useState(false)
  const ref1 = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!ref1.current) return

      const top = ref1.current.getBoundingClientRect().top

      if (top <= 0) {
        setIsFixed(true)
        console.log(true);
        
      } else {
        setIsFixed(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
  const interval = setInterval(() => {
    setIndex((prev) => (prev + 1) % words.length)
  }, 1500)

  return () => clearInterval(interval)
}, [])

  return (
    <div ref={ref1} className="h-screen w-full ">

      <section style={{position:isFixed ? "fixed" : "relative"}}
        className={`
          h-screen w-full rounded-t-4xl
          flex items-center justify-center
          relative overflow-hidden
          transition-all duration-300
          ${isFixed ? "fixed top-0 left-0 z-20" : "relative"}
        `}
      >

        {/* 🔥 FULL BACKGROUND VIDEO */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/images/services.mp4" type="video/mp4" />
        </video>

        {/* 🔥 DARK OVERLAY */} <h1 className='absolute top-16 text-5xl font-semibold'>Services we provide</h1>
        {/* <div className="absolute inset-0 bg-black/50" /> */}

        {/* CONTENT */}
        <div className="absolute bottom-10 z-10 text-black text-center flex justify-around px-6 w-full">
                <div className='flex justify-between items-center p-2 bg-white-50 rounded-2xl w-fit gap-3'>
                    
                    <img src='/images/debug.png' className='size-6'/>
                    <p className='text-3xl font-semibold'>Testing</p>
                    </div>


                 <div className='flex justify-between items-center p-2 bg-white-50 rounded-2xl w-fit gap-3'>
                    
                    <img src='/images/seo.png' className='size-6'/>
                    <p className='text-3xl font-semibold'>Seo</p>
                    </div>
                 <div className='flex justify-between items-center p-2 bg-white-50 rounded-2xl w-fit gap-3'>
                    
                    <img src='/images/support.png' className='size-6'/>
                    <p className='text-3xl font-semibold'>Support</p>
                    </div>

        </div>

      </section>

    </div>
  )
}

export default Services