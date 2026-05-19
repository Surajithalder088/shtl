import React from 'react'
import { PremiumBackground } from './Hero'

const ExperienceSection = () => {
  return (
   <section style={{ background:
          'radial-gradient(ellipse 120% 80% at 50% 10%, #07122b 0%, #020812 55%, #000000 100%)',
      }}
    className='w-full md:pt-40 pt-20 h-[100vh] section-padding xl:px-0 rounded-t-4xl overflow-y-auto no-scrollbar'>
   
    <div className='w-full h-full md:px-20 px-5'>
        <div className='flex flex-col items-center gap-4'>
      <div className='hero-badge'>
        <p>Our Process For Delivering Results</p>
      </div>
      <div className='font-semibold md:text-5xl text-3xl text-center'>
         <p>HOW WE WORK</p>
      </div>

      <div className='mt-32 relative'>
        <div className='relative z-50 xl:space-y-32 space-y-10'>

        </div>

      </div>
       
        
        </div>
        
    </div>

  


   </section>
  )
}

export default ExperienceSection