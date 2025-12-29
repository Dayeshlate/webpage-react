import React from 'react'
import video from "../assets/video1.mp4"
import video2 from "../assets/video2.mp4"
import { navItems } from '../constants'

function Herosection() {
  return (
    <div className="flex flex-col item-center mt-6 lg:mt-20">
        <h1 className="text-4xl sm:text-6xl lg:text-8xl text-center tracking-wide">
            VirtualR build tools 
            <span className="ml-4 bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
                for devlopers
            </span>
        </h1>
        <p className="mt-10 text-2xl max-w-4xl text-neutral-500 sm:text-xl ml-35 lg:text-2xl text-center">
            Empower your creativity and bring your vit app ideas to life with our intutive devlopment tools Get started today and your imagination into immersive reality !
        </p>
        <div className="flex justify-center my-10">
        <a href='#' className="border py-2 px-4 mx-3 rounded-md text-xl bg-gradient-to-r from-orange-500 to-red-800"> start for free</a>
        <a href="#" className="py-3 px-4 mx-3 text-xl rounded-md border">Documentation</a>
        </div>
        <div className="mt-10 flex justify-center">
            <video autoPlay loop muted className='rounded-lg m-20 w-1/2 border border-orange-700 shdow-orange-400 mx-2 my-4'>
                <source src={video} type='video/mp4'/>
                Your browser not supported
            </video>
            <video autoPlay loop muted className='rounded-lg m-20 w-1/2 border border-orange-700 shdow-orange-400 mx-2 my-4'>
                <source src={video2} type='video/mp4'/>
                Your browser not supported
            </video>
        </div>
    </div>
  )
}

export default Herosection