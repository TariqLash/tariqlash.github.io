import React from 'react'
import logo from '../assets/logo.png';
import logoFull from '../assets/logoFull.png';

import { House, CircleUserRound, GalleryVerticalEnd, Send, CircleDollarSign, Linkedin, Github } from 'lucide-react';


const Navbar = () => {
  return (
    <div className='fixed flex items-start left-0 bg-black h-screen z-50 nav'>
      <ul className="menu px-0">
        <div className='flex justify-center mt-2 w-full'>
          <img src={logo} alt="Tariq Lashley Logo" className='logo w-12' />

          <div className='logoFull flex items-center'>
            <img src={logo} alt="Tariq Lashley Logo" className='bigLogo' />

            <div className='flex flex-col justify-center w-fit h-full'>
              <h2 className='navFirstname text-white pt-3'>TARIQ</h2>
              <h2 className='text-4xl mx-auto navLastname'>LASHLEY</h2>
            </div>

          </div>

        </div>
        <li className='mt-4 w-full lg:w-fit'>
          <a href='#home' className='text-7xl navEffect navLinks'>
            HOME
          </a>
          <a href='#home' className='navEffect navIcons'>            
          <House className='navIcon'/></a>
        </li>
        {/* <li className='mt-4 w-full lg:w-fit'>
          <a href='#about' className='text-7xl navEffect navLinks'>
           ABOUT
          </a>
          <a href='#about' className='navEffect navIcons'><CircleUserRound className='navIcon'/></a>
        </li> */}
        <li className='mt-4 w-full lg:w-fit'>
          <a href='#projects' className='text-7xl navEffect navLinks'>
           WORK
          </a>
          <a href='#projects' className='navEffect navIcons'><GalleryVerticalEnd className='navIcon'/></a>
        </li>
        {/* <li className='mt-4 w-full lg:w-fit'>
          <a href='#pricing' className='text-7xl navEffect navLinks'>
           PRICING
          </a>
          <a href='#pricing' className='navEffect navIcons'><CircleDollarSign className='navIcon'/></a>
        </li> */}
        <li className='mt-4 w-full lg:w-fit'>
          <a href='#contact' className='text-7xl navEffect navLinks'>
           CONTACT
          </a>
          <a href='#contact' className='navEffect navIcons'><Send className='navIcon'/></a>
        </li>
        
        <h2 className='mt-16 mb-8 redFont cursor-default navLinks navFollow'>FOLLOW:</h2>
        <a href='https://www.linkedin.com/in/tariqlashley' target="_blank" className='text-7xl navLinks'>
          <Linkedin className='followLinks redFont' />
        </a>
        <a href='https://github.com/TariqLash' target="_blank" className='text-7xl navLinks'>
          <Github className='followLinks redFont' />
        </a>
        

        <li className='mt-4 w-full'>
          
        <a  href='https://github.com/TariqLash' target="_blank" className='navEffect navIcons'><Github className='navIcon redFont'/></a>
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