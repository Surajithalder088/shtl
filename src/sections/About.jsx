import React, { useEffect, useState, useRef } from 'react'

const AboutSection = () => {
  const [isFixed, setIsFixed] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return

      const top = ref.current.getBoundingClientRect().top

      // when touches top
      if (top <= 0) {
        setIsFixed(true)
      } else {
        setIsFixed(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div ref={ref} className="h-screen w-full rounded-t-4xl border-t border-white/20
    shadow-[0_-30px_80px_rgba(255,255,255,0.18),0_-10px_30px_rgba(255,255,255,0.12)]">

      <section id='aboute'
        className={`
          h-screen w-full bg-blue-200 text-black
          rounded-t-4xl
          flex items-center justify-center
          transition-all duration-300
          ${isFixed ? 'fixed top-0 left-0 z-30' : 'relative'}
        `}
      >
        <div className='absolute  w-[350px] left-[20vw] rounded-2xl'>
          <img src='/images/hand-1.avif' className='rounded-2xl'/>
        </div>
        <div style={{textAlign:"right"}} className={`max-w-4xl  py-36 text-center space-y-6 z-16 ${!isFixed?"overflow-hidden":"overflow-y-auto"}  h-full no-scrollbar`}>

          <h2 className="text-9xl font-bold italic px-6">Our Motive</h2>

          <p style={{textAlign:"right"}}  className="text-3xl text-black font-semibold font-serif pl-[20vw] italic">
          At SH Tech Labs, our motive is to bridge the critical gap between sophisticated technical architecture and tangible business growth. We operate with the firm conviction that software should never be a mere utility; it must be a powerful, competitive asset that drives efficiency, scalability, and long-term value.
Our commitment to our clients is rooted in precision and high-impact engineering. By integrating rigorous agile methodologies with a "zero-bug" philosophy, we transform complex operational challenges into streamlined, secure, and intuitive digital ecosystems. We exist to empower visionary enterprises—from high-growth startups to established industry leaders—by providing the technical infrastructure required to dominate their markets.
We don't just write code; we architect the future of your operations. Driven by global standards of transparency and excellence, SH Tech Labs is dedicated to ensuring that every line of code we deliver accelerates your objectives and sustains your competitive advantage in an ever-evolving global economy.
          </p>

          <p className="text-gray-600">
            This section becomes fixed when it reaches the top.
          </p>

        </div>
      </section>

    </div>
  )
}

export default AboutSection