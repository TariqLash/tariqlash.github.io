import React from 'react'
import buyMeCoffee from '../assets/buyMeCoffee.png'
import jjjpainting from '../assets/jjjpainting.png'


const Projects = () => {
  return (
    <div className='p-3 flex flex-wrap justify-center bg-red-100'>
      <div className="card m-3 p-1 bg-base-100 w-96 shadow-xl">
        <figure>
          <img
            src={jjjpainting}
            alt="Coffee themed website" />
        </figure>
        <div className="card-body">
          <a className="card-title">JJJ Painting</a>
          <p>A responsive landing page created for a local painting company.</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">More Info</button>
          </div>
        </div>
      </div>

      <div className="card m-3 p-1 bg-base-100 w-96 shadow-xl">
        <figure>
          <img
            src={buyMeCoffee}
            alt="Coffee themed website" />
        </figure>
        <div className="card-body">
          <a className="card-title">Buy Me A Coffee</a>
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