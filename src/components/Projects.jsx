import React from 'react'
import buyMeCoffee from '../assets/buyMeCoffee.png'
import jjjpainting from '../assets/jjjpainting.png'


const Projects = () => {
  return (
    <div className='p-8 flex flex-wrap justify-center'>
      <div className="card m-3 p-1 bg-base-300 w-96 shadow-xl">
        <figure>
          <img
            src={jjjpainting}
            alt="Coffee themed website" />
        </figure>
        <div className="card-body">
          <a className="text-4xl">JJJ Painting</a>
          <p>A responsive landing page created for a local painting company.</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">More Info</button>
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
          <a className="text-4xl">Buy Me A Coffee</a>
          <p>A simple donation website using blockchain smart contracts for secure, transparent transactions.</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">More Info</button>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Projects