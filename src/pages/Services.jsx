import React, { useEffect, useState, useRef } from 'react'
import { useMediaQuery } from 'react-responsive'
import Button from '../components/Button'

import GlowCard from '../components/GlowCard'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import TechStack from '../sections/TechStack.jsx'
import Footer from '../sections/Footer.jsx'
import WhyUs from '../sections/WhyUs.jsx'
import ExperienceSection from '../sections/ExperienceSection.jsx'
import FaQ from '../sections/FaQ.jsx'

gsap.registerPlugin(ScrollTrigger)

 const expCards=[
    {
        review:"End-to-end web application development using modern frameworks and battle-tested architectures. ",
        imgPath:"/images/web-icon.png",
        title:"Full Stack Web Development",
        date:"Next.js React TypeScript Node.js PostgreSQL Redis Docker",
        responsibilities:[
            "React & Next.js single-page applications",
            "RESTful  API development & Server-side rendering",
            "Database architecture & optimization"
        ]
    },
     {
        review:"Cross-platform mobile application development with high-performance native experiences for iOS and Android. ",
        imgPath:"/images/app-icon.png",
        title:" Mobile App Development",
        date:"React Native  Expo  TypeScript  Node.js  FastAPI  PostgreSQL  Firebase  Redux  Docker",
        responsibilities:[
            "Cross-platform iOS & Android app development",
            "App performance optimization & animations",
            "App Store & Play Store deployment"
        ]
    },
     {
        review:"Intelligent applications powered by LLMs, RAG pipelines, and custom AI integrations. ",
        imgPath:"/images/ai-icon.png",
        title:"AI-Powered Applications",
        date:"Python  FastAPI  LangChain  OpenAI  Pinecone  PostgreSQL  React",
        responsibilities:[
            "LLM integration (OpenAI, Anthropic, open-source)",
            "FastAPI & Node.js backend development",
            "Semantic search implementation"
        ]
    },


    {
        review:"Scalable multi-tenant SaaS platforms with billing, analytics, and enterprise-grade security.",
        imgPath:"/images/saas-icon.png",
        title:"SaaS Application Development",
        date:"Next.js   React   Node.js   Stripe   Auth0   PostgreSQL   Redis",
        responsibilities:[
            "Multi-tenant architecture design",
            "Usage analytics & dashboards",
            "Third-party API integration"
        ]
    },
   
   
]


const Services = () => {
    const [isFixed, setIsFixed] = useState(false)
    const ref1 = useRef(null)
    const isMobile= useMediaQuery({query:'(max-width:768px)'})
   
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

     useGSAP(()=>{
       gsap.utils.toArray(".timeline-card").forEach((card)=>{
          gsap.from(card,{
           xPercent:-100,
           opacity:0,
           transformOrigin:"left left",
           duration:1,
           ease:'power2.inOut',
           scrollTrigger:{
             trigger:card,
             start:"top 80%",
           }
          })
       })
   
       gsap.to(".timeline",{
         transformOrigin:"bottom bottom",
         ease:'power2.inOut',
         scrollTrigger:{
           trigger:".timeline",
           start:"top center",
           end:"70% center",
           onUpdate:(self)=>{
             gsap.to(".timeline",{
               scaleY:1-self.progress,
             })
         }
         },
         
       })
   
   
           gsap.utils.toArray(".expText").forEach((text)=>{
          gsap.from(text,{
           xPercent:0,
           opacity:0,
           duration:1,
           ease:'power2.inOut',
           scrollTrigger:{
             trigger:text,
             start:"top 60%",
           }
          })
       })
      
     },[])
  
  return (
    <div className='relative'>
       <div className={`
  flex items-center justify-between ${isMobile ? 'py-3' : 'p-1'}
  fixed top-0 w-[100vw] z-90 fit-content 

  backdrop-blur-xl
  bg-gradient-to-b from-black/70 via-black/40 to-transparent

  
`}>
        <a className={`flex-1 text-white flex items-center justify-start cursor-pointer ${isMobile ? 'pl-6' : 'pl-15 '}`}
         href='/'> 
          <img src='/images/shtl-logo.png'    className={`${isMobile ? 'size-6' : 'size-12'}`}/>
          <span className={`${isMobile ? 'text-md' : 'text-2xl'} font-serif italic`}>SH TECH LABS</span></a>


       {!isMobile && (
        <div className='flex items-center justify-around gap-2 w-1/2'>
          <a   className="cursor-pointer hover:opacity-70 transition"
           href='/about' 
       >About</a>
          <a   className="cursor-pointer hover:opacity-70 transition"
           href='/services'>Services</a>
          <a   className="cursor-pointer hover:opacity-70 transition"
           href='/contact'>Connect</a>

           <Button />
        </div>)}
      </div>
      
         <div className="relative ">
             <video style={{height:isMobile?'60vh':'60vh',objectFit:'cover'}}
          className=" inset-0 w-full  object-cover "
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={isMobile ? "/images/service-m.mp4" : "/images/service-w.mp4"} type="video/mp4" />
        </video>
         <section
            className='w-full relative md:pt-5 pt-5 min-h-[100vh]  xl:px-0 px-0 overflow-y-auto no-scrollbar bg-black'>
                 <div className={`w-full h-full ${isMobile?'px-6':'p-20'}`}>
                        <div className='flex flex-col items-center gap-4'>
                      
                  <div className='hero-badge'>
                        <p>WHAT WE BUILD</p>
                      </div>
                      <div className='font-semibold md:text-5xl text-3xl text-center'>
                         <p>Enterprise-grade services</p>
                      </div>
                      <div className='font-semibold md:text-5xl text-3xl text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400'>
                         <p>for modern teams</p>
                      </div>
                      <div style={{width:"100%"}} className='mt-32 relative'>
                      
                        <div style={{width:"100%"}} className='relative z-50 xl:space-y-22 space-y-10'>
                        {expCards.map((card,index)=>
                          <div key={index} className="exp-card-wrapper">
                           <div className='xl:w-2/6 '>
                           <GlowCard card={card} index={index}>
                            <div>
                              <img src={card.imgPath} alt={card.title} />
                            </div>
                
                           </GlowCard>
                            </div>
                            <div className="xl:w-4/6 ">
                            <div className="flex items-start">
                              <div className="timeline-wrapper">
                                <div className="timeline"/>
                                <div className="gradient-line w-1 h-full"/>
                              </div>
                
                              <div className="expText flex xl:gap-20 md:gap-10 gap-5 relative z-20">
                                <div className="timeline-logo">
                                   <img src={card.imgPath} alt={card.title} />
                                </div>
                                <div>
                                  <h1 className='font-semibold text-3xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400'>{card.title}</h1>
                                  <p className=' my-5 text-white-50'>
                                    {card.date}
                                  </p>
                                  <p className="text-[#839cb5] italic">
                                    Key Capabilities
                                  </p>
                                  <ul className="list-disc ms-5 mt-5 flex flex-col gap-5 text-white-50">
                                    {card.responsibilities.map((responsibility)=>(
                                      <li key={responsibility} className='text-lg'>{responsibility}</li>
                                    ))}
                                  </ul>
                                </div>
                
                              </div>
                            </div>
                
                            </div>
                           
                            </div>
                        )}
                        </div>
        
                        <div className="h-fit py-14">
                            <TechStack/>
                        </div>
                
                      </div>
                       
                        
                        </div>
                        
                    </div>
            </section>
          </div>
             <ExperienceSection />
            <FaQ/>
    <Footer/>
    </div>
  )
}

export default Services