import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import {useMediaQuery} from 'react-responsive'
import { Room } from './Room'
import { Phone } from './Phone'

const HeroExperience = () => {
    const isTablet= useMediaQuery({query:'(max-width:1024px)'})
                const isMobile= useMediaQuery({query:'(max-width:768px)'})

    return (
   <div className=' realtive w-[20vw] h-[50vh]  border-amber-50 object-contain overflow-hidden  rounded-2xl'>
       {/* <Room scale={2} position={[0, -3, 0]} /> */}

      <video
           className="w-full h-full object-cover object-bottom"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/images/hero.mp4" type="video/mp4" />
        </video>
          <div className='
    sticky inset-0 w-[20vw] h-[50vh]
    bg-black/40
    backdrop-blur-[0.4px]
  ' />
       </div> 
  
  )
}

export default HeroExperience