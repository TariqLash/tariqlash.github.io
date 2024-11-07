"use client"

import React from 'react'
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Separator } from './ui/separator'
import { Menu } from 'lucide-react';
import { useState } from 'react';


const Navbar = () => {

  const [openSheet, setOpenSheet] = useState(false);


  return (
    <nav className='flex items-center justify-between navbar bg-[#f6f3f2]/95 p-5 px-7 font-bold'>
      <img src="locked.png" alt="logo" width={60} height={60} />
      <div className='hidden md:flex'>
        <ul className='flex justify-around space-x-10 items-center text-sm'>
          <li className='opacity-50 hover:opacity-100 transition'><a href="">WORK</a></li>
          <li className='opacity-50 hover:opacity-100 transition'><a href="">ABOUT</a></li>
          <li className='opacity-50 hover:opacity-100 transition'><a href="/resume.pdf" target='blank'>RESUME</a></li>
          <a href="mailto:tariqlashley@gmail.com">
            <Button className="rounded-none p-6 font-bold text-md">EMAIL</Button>
          </a>
        </ul>
      </div>
      <div className='flex md:hidden'>

      <Sheet open={openSheet} onOpenChange={setOpenSheet}>
        <SheetTrigger>   
           <Menu  className='size-8'/>
        </SheetTrigger>
        <SheetTitle></SheetTitle>

        <SheetContent onCloseAutoFocus={event => event.preventDefault()}>
          
        <div className='text-2xl my-4 mt-10'>
          <a href="#work" onClick={() => {setOpenSheet(false)}}>
            WORK
          </a>
        </div>
        <Separator/>
        <div className='text-2xl my-4'>
          <a href="#work" onClick={() => {setOpenSheet(false)}}>
            ABOUT
          </a>
        </div>
          <Separator/>
          <div className='text-2xl my-4'>
          <a href="/resume.pdf" target='blank' onClick={() => {setOpenSheet(false)}}>
          RESUME
          </a>
        </div>
          <Separator/>
          <a href="mailto:tariqlashley@gmail.com">
            <Button className="rounded-none p-6 font-bold text-md mt-4 w-full text-center h-14">EMAIL ME</Button>
          </a>
        </SheetContent>
      </Sheet>
      </div>
    </nav>
  )
}

export default Navbar