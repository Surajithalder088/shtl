import React from 'react'
import Techicons from '../components/Models/Techicons'

const textStackIcone=[
   
    {name:"React",modelPath:"/models/react.glb",scale:1,rotation:[0,0,0]},
    {name:"Node.js",modelPath:"/models/room.glb",scale:1,rotation:[0,0,0]},
    {name:"Python",modelPath:"/models/python.glb",scale:0.07,rotation:[0,0,0]},
    {name:"Docker",modelPath:"/models/docker.glb",scale:23,rotation:[0,0,0]},
    {name:"Typescript",modelPath:"/models/typescript.glb",scale:24,rotation:[0,0,0]},
]

const TechStack = () => {
  return (
    <div className="flex-center section-padding bg-black relative">
        <div className='flex flex-col items-center gap-4 w-full h-full md:px-10 px-5'>
             <div className='hero-badge'>
        <p>What we bring to the table</p>
      </div>
      <div className='font-semibold md:text-5xl text-3xl text-center'>
         <p>Technologies we use</p>
      </div>

      <div className="text-grid flex items-center gap-2">
        {textStackIcone.map((icon,index)=>(
            <div key={index} className="card-border tech-card overflow-hidden group md:rounded-full xl:rounded-lg rounded-lg">
                {/* <div className="tech-card-animated-bg"/> */}
                    <div className="tech-card-content">
                        <div className="tech-icon-wrapper">
                            <Techicons model={icon}/>
                        </div>
                        <div className="padding-x w-full">
                             <p> {icon.name}</p>
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