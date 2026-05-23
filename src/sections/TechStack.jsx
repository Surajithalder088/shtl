import React from 'react'
import Techicons from '../components/Models/Techicons'

const textStackIcone=[
    {name:"React",modelPath:"/images/react.png",scale:1,rotation:[0,0,0]},
    {name:"Node.js",modelPath:"/images/node.png",scale:1,rotation:[0,0,0]},
    {name:"Python",modelPath:"/images/python.png",scale:1,rotation:[0,0,0]},
    {name:"Django",modelPath:"/images/django.png",scale:1,rotation:[0,0,0]},
    {name:"MongoDB",modelPath:"/images/mongodb.png",scale:1,rotation:[0,0,0]},
]

const TechStack = () => {
  return (
    <div className="flex-center section-padding bg-black">
        <div className='flex flex-col items-center gap-4 w-full h-full md:px-10 px-5'>
             <div className='hero-badge'>
        <p>What we bring to the table</p>
      </div>
      <div className='font-semibold md:text-5xl text-3xl text-center'>
         <p>Technologies we use</p>
      </div>

      <div className="text-grid">
        {textStackIcone.map((icon,index)=>(
            <div key={index} className="card-border tech-card overflow-hidden group xl:rounded-full rounded-lg">
                <div className="tech-card-animated-bg"/>
                    <div className="tech-card-content">
                        <div className="tech-icon-wrapper">
                            <Techicons model={icon}/>
                        </div>

                    </div>
            </div>
        ))}
      </div>
        </div>

    </div>
  )
}

export default TechStack