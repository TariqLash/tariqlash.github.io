import React from 'react'
import buyMeCoffee from '../assets/buyMeCoffee.png'
import jjjpainting from '../assets/jjjpainting.png'
import { SiReact, SiSolidity, SiTailwindcss, SiGithub } from "react-icons/si";



const Projects = () => {
  return (
    <div id='projects' className='flex flex-col justify-center items-center py-12 projectContainer'>
      <h1 className='sectionHeading text-6xl'>Projects</h1>
      <div className='flex flex-wrap justify-center w-full'>
        <div className="card m-3 p-1 bg-base-300 w-5/6 sm:w-96 shadow-xl">
          <figure>
            <img
              src={jjjpainting}
              alt="Coffee themed website" />
          </figure>
          <div className="card-body">
            <a href='https://www.jjjpainting.com/services' className="text-4xl cursor-pointer underline">JJJ Painting</a>
            <p className='roboto'>A responsive landing page created for a local painting company.</p>
            <div className="flex items-center justify-between ">
              <div className='h-full flex items-center text-3xl'>
                <SiReact className='mx-1 rounded-full p-1' />
                <SiTailwindcss className='mx-1 rounded-full p-1' />
              </div>
              <a href='https://github.com/TariqLash/jjjpainting' className="btn btn-primary rounded-full text-2xl"><SiGithub /></a>
            </div>
          </div>
        </div>

        <div className="card m-3 p-1 bg-base-300 w-96 shadow-xl">
          <figure>
            <img
              src={buyMeCoffee}
              alt="Coffee themed website" />
          </figure>
          <div className="card-body">
            <a href='https://coffee-app888.netlify.app/' className="text-4xl cursor-pointer underline">Buy Me A Coffee</a>
            <p className='roboto'>A simple donation website using blockchain smart contracts for secure, transparent transactions.</p>
            <div className="flex items-center justify-between ">
              <div className='h-full flex items-center text-3xl'>
                <SiReact className='mx-1 rounded-full p-1' />
                <SiTailwindcss className='mx-1 rounded-full p-1' />
                <SiSolidity className='mx-1 rounded-full p-1' />
              </div>
              <a href='https://github.com/TariqLash/buyMeCoffee' className="btn btn-primar size-10 rounded-full text-2xl"><SiGithub /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects