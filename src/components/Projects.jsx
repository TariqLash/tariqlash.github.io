import React from 'react'
import jjjPaintingMockup from "../assets/jjjPaintingMockup.png"
import lockedInMockup from "../assets/lockedInMockup.png"
import fintoss from "../assets/fintoss.png"
import buyMeCoffeeMockup from "../assets/buyMeCoffeeMockup.png"

import { Globe, Play, PlayIcon } from 'lucide-react'
const Projects = () => {
  return (
    <div id='projects' className='projectScreen flex flex-col justify-center items-center mx-auto rounded-xl'>
      {/* Finto */}
      <div  className="card lg:card-side glass shadow-xl projectCard my-12 lg:mb-44">
        <figure>
          <a href="https://personal-finance-five-mocha.vercel.app/">
          <img
            src={fintoss}
            alt="Album" />
          </a>
        </figure>
        <div className="card-body">
          <h2 className="card-title">Finto</h2>
          <p>A finance applications that allows you to sort and visualize transaction dat.</p>
          <div className="card-actions justify-end">
            <a href="https://locked-in-rouge.vercel.app/">
            <button className="btn justify-between px-3 btn-primary btn-outline mt-3">Website <Globe/></button>
            </a>
            {/* <button className="btn justify-between px-3 btn-primary ml-3">Demo <PlayIcon /></button> */}
          </div>
        </div>        
      </div>
      {/* LockedIn */}
      <div  className="card lg:card-side glass shadow-xl projectCard my-12 lg:mb-44">
        <figure>
          <a href="https://locked-in-rouge.vercel.app/">
          <img
            src={lockedInMockup}
            alt="Album" />
          </a>
        </figure>
        <div className="card-body">
          <h2 className="card-title">Locked-In</h2>
          <p>A habit tracker app that uses a heatmap to visualize consistency, helping users build and maintain routines.</p>
          <div className="card-actions justify-end">
            <a href="https://locked-in-rouge.vercel.app/">
            <button className="btn justify-between px-3 btn-primary btn-outline mt-3">Website <Globe/></button>
            </a>
            {/* <button className="btn justify-between px-3 btn-primary ml-3">Demo <PlayIcon /></button> */}
          </div>
        </div>        
      </div>
      {/* JJJPainting */}
      <div className="card lg:card-side glass shadow-xl projectCard my-12 lg:mb-44">
        <figure>
          <a href="https://jjjpainting.com">
          <img
            className=''
            src={jjjPaintingMockup}
            alt="Album" />
          </a>
        </figure>
        <div className="card-body">
          <h2 className="card-title">JJJ-Painting</h2>
          <p>A landing page for a Saskatchewan-based painting company, showcasing their services and providing easy contact options.</p>
          <div className="card-actions justify-end">
            <a href="https://jjjpainting.com">            
            <button className="btn justify-between px-3 btn-primary btn-outline mt-3">Website <Globe/></button>
            </a>
            {/* <button className="btn justify-between px-3 btn-primary ml-3">Demo <PlayIcon /></button> */}
          </div>
        </div>
        
      </div>
{/* Buy Me a Coffee */}
{/* JJJPainting */}
<div className="card lg:card-side glass shadow-xl projectCard my-12 lg:mb-44">
        <figure>
          <a href="https://coffee-app888.netlify.app/">
          <img
          className=''
            src={buyMeCoffeeMockup}
            alt="Album" />
          </a>
        </figure>
        <div className="card-body">
          <h2 className="card-title">Buy Me A Coffee</h2>
          <p>A blockchain app for making small donations and sending messages to creators, built on Sepolia test net.</p>
          <div className="card-actions justify-end">
            <a href="https://coffee-app888.netlify.app/">
            <button className="btn justify-between px-3 btn-primary btn-outline mt-3">Website <Globe/></button>
            </a>
            {/* <button className="btn justify-between px-3 btn-primary ml-3">Demo <PlayIcon /></button> */}
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Projects



