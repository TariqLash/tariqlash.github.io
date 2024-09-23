import React from 'react'
import { FaExternalLinkAlt } from "react-icons/fa";
import { House } from 'lucide-react';


const Navbar = () => {
  return (
    <div className='fixed flex items-center left-0 bg-black h-screen  z-50'>
      <ul className="menu">
        <li>
          <a className='text-7xl navlinks'>
            HOME
          </a>
        </li>
        <li>
          <a className='text-7xl navlinks'>
           ABOUT
          </a>
        </li>
        <li>
          <a className='text-7xl navlinks'>
           WORK
          </a>
        </li>
        <li>
          <a className='text-7xl navlinks'>
           CONTACT
          </a>
        </li>
      </ul>
    </div>
    // <div className="navbar p-5 bg-base-100">
    //   <div className="navbar-start">
    //     <div className="dropdown">
    //       <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
    //         <svg
    //           xmlns="http://www.w3.org/2000/svg"
    //           className="h-5 w-5"
    //           fill="none"
    //           viewBox="0 0 24 24"
    //           stroke="currentColor">
    //           <path
    //             strokeLinecap="round"
    //             strokeLinejoin="round"
    //             strokeWidth="2"
    //             d="M4 6h16M4 12h8m-8 6h16" />
    //         </svg>
    //       </div>
    //       <ul
    //         tabIndex={0}
    //         className="menu text-lg menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
    //         <li><a href='#projects'>Projects</a></li>
    //         <li><a href='https://www.linkedin.com/in/tariqlashley'>LinkedIn</a></li>
    //         <li><a href='https://github.com/TariqLash'>Github</a></li>
    //       </ul>
    //     </div>
    //     <a href='/' className="border-0 text-xl sm:text-3xl ml-3">Tariq Lashley</a>
    //   </div>
    //   <div className="navbar-center hidden lg:flex">
    //     <ul className="menu text-lg menu-horizontal px-1 ">
    //       <li><a href='#projects'>Projects</a></li>
    //       <li><a href='https://www.linkedin.com/in/tariqlashley'>LinkedIn<FaExternalLinkAlt className='externalIcon'/></a></li>
    //       <li><a href='https://github.com/TariqLash'>Github<FaExternalLinkAlt className='externalIcon'/></a></li>
    //     </ul>
    //   </div>
    //   <div className="navbar-end">
    //     <a href='#contact' className=" border-0 text-lg sm:text-xl">Contact Me</a >
    //   </div>
    // </div>
  )
}

export default Navbar