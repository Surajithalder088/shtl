import React,{useState,useEffect,useRef} from 'react'
import { PremiumBackground } from './Hero'
import GlowCard from '../components/GlowCard'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)
 const expCards=[
    {
        review:"lorem100 ipsum dolor sit amet consectetur adipisicing elit. ",
        imgPath:"/images/vision.png",
        title:"Software Engineer",
        date:"January 2020-Decmber 2025",
        responsibilities:[
            "Developed and maintained web applications using React and Node.js.",
            "Collaborated with cross-functional teams to design and implement new features.",
            "Optimized application performance, resulting in a 30% reduction in load times."
        ]
    },
     {
        review:"lorem100 ipsum dolor sit amet consectetur adipisicing elit. ",
        imgPath:"/images/exp1.png",
        title:"Software Engineer",
        date:"January 2020-Decmber 2025",
        responsibilities:[
            "Developed and maintained web applications using React and Node.js.",
            "Collaborated with cross-functional teams to design and implement new features.",
            "Optimized application performance, resulting in a 30% reduction in load times."
        ]
    },
     {
        review:"lorem100 ipsum dolor sit amet consectetur adipisicing elit. ",
        imgPath:"/images/exp1.png",
        title:"Software Engineer",
        date:"January 2020-Decmber 2025",
        responsibilities:[
            "Developed and maintained web applications using React and Node.js.",
            "Collaborated with cross-functional teams to design and implement new features.",
            "Optimized application performance, resulting in a 30% reduction in load times."
        ]
    },
     {
        review:"lorem100 ipsum dolor sit amet consectetur adipisicing elit. ",
        imgPath:"/images/exp1.png",
        title:"Software Engineer",
        date:"January 2020-Decmber 2025",
        responsibilities:[
            "Developed and maintained web applications using React and Node.js.",
            "Collaborated with cross-functional teams to design and implement new features.",
            "Optimized application performance, resulting in a 30% reduction in load times."
        ]
    },
   
]

const ExperienceSection = () => {

    const [isFixed, setIsFixed] = useState(false)
    const ref2 = useRef(null)
  
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
   <section ref={ref2} style={{ overflow:isFixed?"relative":"hidden",height:"fit-content",
   // background: 'radial-gradient(ellipse 120% 80% at 50% 10%, #07122b 0%, #020812 55%, #000000 100%)',
    background:"black"
  }}
    className='w-full md:pt-40 pt-20 h-[100vh] section-padding xl:px-0 rounded-t-4xl overflow-y-auto no-scrollbar'>
   
    <div className='w-full h-full md:px-20 px-3'>
        <div className='flex flex-col items-center gap-4'>
      <div className='hero-badge'>
        <p>Our Process For Delivering Results</p>
      </div>
      <div className='font-semibold md:text-5xl text-3xl text-center'>
         <p>HOW WE WORK</p>
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
                    Responsibilities
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

      </div>
       
        
        </div>
        
    </div>

  


   </section>
  )
}

export default ExperienceSection