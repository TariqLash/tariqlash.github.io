import React from 'react'
import logo from '../assets/logo.png';

import { House, CircleUserRound, GalleryVerticalEnd, Send, CircleDollarSign, Linkedin, Github } from 'lucide-react';


const Navbar = () => {
  return (
    <div className='fixed flex items-start left-0 bg-black h-screen z-50 nav'>
      <ul className="menu px-0">
        <div className='flex justify-center mt-2 w-full'>
          <img src={logo} alt="Tariq Lashley Logo" className='logo w-12'/>

        </div>
        <li className='mt-4 w-full'>
          <a href='#home' className='text-7xl navEffect navLinks'>
            HOME
          </a>
          <a href='#home' className='navEffect navIcons'>            
          <House className='navIcon'/></a>
        </li>
        <li className='mt-4 w-full'>
          <a className='text-7xl navEffect navLinks'>
           ABOUT
          </a>
          <a id='' className='navEffect navIcons'><CircleUserRound className='navIcon'/></a>
        </li>
        <li className='mt-4 w-full'>
          <a className='text-7xl navEffect navLinks'>
           WORK
          </a>
          <a href='#projects' className='navEffect navIcons'><GalleryVerticalEnd className='navIcon'/></a>
        </li>
        <li className='mt-4 w-full'>
          <a className='text-7xl navEffect navLinks'>
           CONTACT
          </a>
          <a href='#contact' className='navEffect navIcons'><Send className='navIcon'/></a>
        </li>
        <li className='mt-4 w-full'>
          <a className='text-7xl navEffect navLinks'>
           PRICING
          </a>
          <a href='#contact' className='navEffect navIcons'><CircleDollarSign className='navIcon'/></a>
        </li>
        <h2 className='m-auto text-4xl mt-20 redFont cursor-default navLinks'>FOLLOW:</h2>
        <li className='mt-4 w-full'>
          <a className='text-7xl navEffect navLinks'>
           LinkedIn
          </a>
          <a href='https://www.linkedin.com/in/tariqlashley' target="_blank" className='navIcons'><Linkedin className='navIcon redFont'/></a>
        </li>
        {/* <li className='mt-4 w-full'>
          <a className='text-7xl navEffect navLinks'>
           Github
          </a>
          <a  href='https://github.com/TariqLash' target="_blank" className='navEffect navIcons'><Github className='navIcon redFont'/></a>
        </li> */}
      </ul>
    </div>
  )
}

export default Navbar