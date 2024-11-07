import React from 'react'
import { ArrowDown } from 'lucide-react';


const Hero = () => {
  return (
    <div className='h-screen flex flex-col items-center justify-center hero' >
      <div className='mb-80 md:mb-40'>
        
        <div className='flex flex-col items-center text-sm md:text-lg mb-5'>
          <p>Tariq Lashley</p>
          <p className='text-muted-foreground'>Full-Stack Developer</p>
        </div>
        <div className='playfair flex flex-col items-center text-4xl md:text-6xl lg:text-8xl text-center'>
          <p>I build web apps</p>
          <p>that solve real world</p>
          <span className='bg-red-500/50'>problems</span>
        </div>
        <div className='mt-5 flex justify-center text-sm md:text-lg text-muted-foreground'>
          <p>Backend, Frontend and everything in between</p>
        </div>
      </div>
      <a href="#work" className='w-full flex justify-center absolute bottom-10'>
        <ArrowDown className='size-8 animate-bounce'/>
      </a>
    </div>
  )
}

export default Hero