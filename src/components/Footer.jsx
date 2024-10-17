import React from 'react'
import logoGray from '../assets/logoGray.png';
import { GithubIcon, LinkedinIcon } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer bg-black text-neutral-content p-10">
  <aside>
   <img src={logoGray} alt="" className='w-20'/>
    <p>
      Tariq Lashley Ltd.
      <br />
      Providing reliable tech since 2023
    </p>
  </aside>
  <nav>
    <h6 className="footer-title">Social</h6>
    <div className="grid grid-flow-col gap-4">
      <a href='https://github.com/TariqLash'>
        <GithubIcon/>
      </a>
      <a href='https://www.linkedin.com/in/tariqlashley/'>
        <LinkedinIcon/>
      </a>
    </div>
  </nav>
</footer>
  )
}

export default Footer