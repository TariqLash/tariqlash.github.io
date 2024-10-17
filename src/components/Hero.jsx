import React from 'react'
import { Github, ChevronDown } from 'lucide-react';

const Hero = () => {
    return (
        <div className='heroScreen roboto-regular'>
            <div className='flex flex-col justify-center items-center h-full w-full'>
                <h1 className='heroText roboto-bold text-center'>I Build Digital Solutions</h1>
                <div>
                <a href='https://github.com/TariqLash' className='btn justify-center m-1'>Github <Github className='w-5'/></a>
                <a href='#projects' className='btn justify-center m-1'>Projects <ChevronDown className='w-5'/></a>
                </div>
            </div>

        </div>
    )
}

export default Hero