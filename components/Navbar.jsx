"use client"
import React from 'react'
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Menu } from 'lucide-react';
import { Badge } from "@/components/ui/badge"


const Navbar = () => {
  return (
    <nav className='flex items-center justify-between navbar bg-[#f6f3f2]/95 p-5 px-7 font-bold'>
      <a href="/" className='flex items-center'>
      <img src="locked.png" alt="logo" width={60} height={60} />
      <Badge variant="warning" className="h-8 ml-3">Page in Development</Badge>

      </a>
      <div className='hidden md:flex'>
        <ul className='flex justify-around space-x-10 items-center text-sm'>
          <li className='opacity-50 hover:opacity-100 transition'><a href="#work">WORK</a></li>
          <li className='opacity-50 hover:opacity-100 transition'><a href="">ABOUT</a></li>
          <li className='opacity-50 hover:opacity-100 transition'><a href="/resume.pdf" target='blank'>RESUME</a></li>
          <a href="mailto:tariqlashley@gmail.com">
            <Button className="rounded-none p-6 font-bold text-md">EMAIL</Button>
          </a>
        </ul>
      </div>
      <div className='flex md:hidden'>
      <DropdownMenu>
  <DropdownMenuTrigger>
    <Menu  className='size-8'/>
  </DropdownMenuTrigger>
  <DropdownMenuContent className="mr-3" onCloseAutoFocus={event => event.preventDefault()}>
    <DropdownMenuItem><a href="#work">WORK</a></DropdownMenuItem>
    <DropdownMenuItem><a href="#work">ABOUT</a></DropdownMenuItem>
    <DropdownMenuItem><a href="/resume.pdf" target='blank'>RESUME</a></DropdownMenuItem>
    <DropdownMenuItem>
      <a href="mailto:tariqlashley@gmail.com">
        EMAIL
      </a>
    </DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
      
      </div>
    </nav>
  )
}

export default Navbar