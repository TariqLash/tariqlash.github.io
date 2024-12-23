import React from 'react'
import { SiGithub, SiLinkedin, SiX } from "react-icons/si";
import { Button } from "@/components/ui/button"

const Footer = () => {
  return (
    <div className='footer mb-32 lg:mb-0 mt-32 border-t-2 mx-16 pt-28 flex flex-col-reverse lg:grid grid-cols-3 justify-between '>
        <div className='flex flex-col items-center lg:items-start'>
            <h1 className='text-sm md:text-lg font-semibold'>Tariq Lashley</h1>
            <p className='mt-1 text-sm md:text-lg text-muted-foreground'>Full Stack Developer</p>
            <div className='mt-3 flex'>
            <a href="https://www.linkedin.com/in/tariqlashley/" className='mr-2 p-2 border opacity-70 hover:opacity-100 hover:border-2 hover:border-black transition'>
                    <SiLinkedin className='size-6'/>
            
            </a>
            <a href="https://x.com/tariqlash" className='mr-2 p-2 border opacity-70 hover:opacity-100 hover:border-2 hover:border-black transition'>
                    <SiX className='size-6'/>
            
            </a>
            <a href="https://github.com/TariqLash" className='mr-2 p-2 border opacity-70 hover:opacity-100 hover:border-2 hover:border-black transition'>
                    <SiGithub className='size-6'/>
            
            </a>
            </div>
        </div>
        <div className='col-span-2 text-center lg:text-left font-bold'>
        <h1 className='playfair text-4xl lg:text-6xl mb-12'>If you like what you see, let's <span className='bg-red-500/50'>work together</span></h1>
        <a href="mailto:tariqlashley@gmail.com">
          <Button className="rounded-none p-6 md:p-8 font-bold text-md md:mb-0 mb-8">EMAIL ME</Button>
        </a>
        </div>
    </div>
  )
}

export default Footer