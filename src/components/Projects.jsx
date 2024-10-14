import React from 'react'
import lockedin from '../assets/lockedin.png'
import buyMeCoffee from '../assets/buyMeCoffee.png'
import jjjpainting from '../assets/jjjpainting.png'
import comingSoon from '../assets/comingSoon.png'
import { SiReact, SiSolidity, SiTailwindcss, SiGithub } from "react-icons/si";



const Projects = () => {
  return (
    <div id='projects' className='flex flex-col justify-center items-center projectContainer'>
      <h1 className='sectionHeading bg-neutral-300'>LATEST WORK</h1>
      <div className='flex flex-col sm:flex-row justify-normal w-full'>
      <a href='https://locked-in-rouge.vercel.app/' target='_blank' className='cursor-pointer w-full md:w-1/3 2xl:w-1/4'>
          <img
            src={lockedin}
            alt="Coffee themed website"
            className='w-full'
          />
        </a>
        <a href='https://jjjpainting.com/' target='_blank' className='cursor-pointer w-full md:w-1/3 2xl:w-1/4'>
          <img
            src={jjjpainting}
            alt="Painting themed website"
            className='w-full' 
          />
        </a>
        <a href='https://coffee-app888.netlify.app/' target='_blank' className='cursor-pointer w-full md:w-1/3 2xl:w-1/4'>
          <img
            src={buyMeCoffee}
            alt="Coffee themed website"
            className='w-full'
          />
        </a>
        <a className='cursor-pointer w-full md:w-1/3 2xl:w-1/4'>
          <img
            src={comingSoon}
            alt="More Coming Soon Stay Tuned!"
            className='w-full'
          />
        </a>
        {/* <div className="card m-3 p-1 bg-base-300 w-5/6 sm:w-96 shadow-xl">
          <figure>
            <img
              src={jjjpainting}
              alt="Coffee themed website" />
          </figure>
          <div className="card-body">
            <a href='https://www.jjjpainting.com/services' className="text-3xl cursor-pointer underline">JJJ Painting</a>
            <p className='roboto'>A responsive landing page created for a local painting company.</p>
            <div className="flex items-center justify-between ">
              <div className='h-full flex items-center text-2xl sm:text-3xl'>
                <SiReact className='mx-1 rounded-full p-1' />
                <SiTailwindcss className='mx-1 rounded-full p-1' />
              </div>
              <a href='https://github.com/TariqLash/jjjpainting' className="btn btn-primary rounded-full text-2xl"><SiGithub /></a>
            </div>
          </div>
        </div> */}

        {/* <div className="card m-3 p-1 bg-base-300 w-5/6 sm:w-96 shadow-xl">
          <div>

          </div>
          <div className="card-body">
            <a href='https://coffee-app888.netlify.app/' className="text-3xl cursor-pointer underline">Buy Me A Coffee</a>
            <p className='roboto'>A simple donation website using blockchain smart contracts for secure, transparent transactions.</p>
            <div className="flex items-center justify-between ">
              <div className='h-full flex items-center text-2xl sm:text-3xl'>
                <SiReact className='mx-1 rounded-full p-1' />
                <SiTailwindcss className='mx-1 rounded-full p-1' />
                <SiSolidity className='mx-1 rounded-full p-1' />
              </div>
              <a href='https://github.com/TariqLash/buyMeCoffee' className="btn btn-primary rounded-full text-2xl"><SiGithub /></a>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  )
}

export default Projects