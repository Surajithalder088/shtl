import React, { useEffect, useState, useRef } from 'react'
import { PremiumBackground } from './Hero'
import GlowCard from '../components/GlowCard'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import TechStack from './TechStack'

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
        review:"Production-grade APIs and system integrations built for performance and reliability.",
        imgPath:"/images/api-icon.png",
        title:"API Development & Integration",
        date:"Node.js   Express   FastAPI   PostgreSQL   Redis   Docker",
        responsibilities:[
            "RESTful API design & development",
            "API gateway & rate limiting",
            "Third-party API integration"
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
    {
        review:"Pixel-perfect interfaces and design systems that scale across your product surface.",
        imgPath:"/images/uiux-icon.png",
        title:"UI/UX Engineering",
        date:"React   TailwindCSS   Framer Motion   GSAP   Figma   TypeScript",
        responsibilities:[
            "Design system architecture",
            "Animation & micro-interactions",
            "Reusable component libraries"
        ]
    },
   
]
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
    <div ref={ref1} className={`h-fit w-full rounded-t-full border-t     border-cyan-300/50

    shadow-[0_-60px_180px_rgba(0,255,255,0.55),
            0_-30px_120px_rgba(0,255,255,0.45),
            0_-10px_60px_rgba(255,255,255,0.25)]`}>

      <section style={{position:isFixed ? "fixed" : "relative"}}
        className={`
          h-[60vh] w-full rounded-t-4xl 
          flex items-center justify-center
          relative overflow-hidden
          transition-all duration-300
          ${isFixed ? "fixed top-0 left-0 z-20" : "relative"}
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
          <source src="/images/services.mp4" type="video/mp4" />
        </video>
          <div className="absolute inset-0">
    <div className="absolute inset-0 backdrop-blur-[1px] bg-gradient-to-b from-black/80 via-black/40 to-transparent" />
    <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/10" />
  </div>
        

        {/* 🔥 DARK OVERLAY <h1 className='absolute bottom-6 text-4xl font-semibold border-white-50
    shadow-[0_-30px_80px_rgba(255,255,255,0.18),0_-10px_30px_rgba(255,255,255,0.12)]`
        '>Major Services we provide</h1> */}
        {/* <div className="absolute inset-0 bg-black/50" /> */}

        {/* CONTENT */}
        {/* <div className="absolute bottom-10 z-10 text-black text-center flex justify-around px-6 w-full">
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

        </div> */}
        

      </section>

      <div className="h-fit w-full relative z-22 overflow-y-auto no-scrollbar">
      {isFixed && <div style={{height:"60vh"}}/> }

         <section
    className='w-full relative md:pt-20 pt-10 min-h-[100vh]  xl:px-0  overflow-y-auto no-scrollbar bg-black'>
         <div className='w-full h-full md:px-20 px-30'>
                <div className='flex flex-col items-center gap-4'>
              
          <div className='hero-badge'>
                <p>We provide services on these domain</p>
              </div>
              <div className='font-semibold md:text-5xl text-3xl text-center'>
                 <p>WE WORK ON</p>
              </div>
              <div className='mt-32 relative'>
              
                <div className='relative z-50 xl:space-y-22 space-y-10'>
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
                          <h1 className='font-semibold text-3xl'>{card.title}</h1>
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

    </div>
  )
}

export default Services