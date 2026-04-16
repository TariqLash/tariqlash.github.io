'use client'

import React, { useRef, useEffect, useState } from 'react'
import Image from 'next/image'
import { Play, Code, ExternalLink } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { SiNextdotjs, SiHono, SiDrizzle, SiClerk, SiReact, SiTailwindcss, SiMongodb, SiTypescript } from "react-icons/si"

const projects = [
  {
    title: 'ContractLens',
    description: 'AI-powered smart contract security analyzer. Paste any Solidity contract and get an instant security audit with findings categorized by severity, actionable recommendations, and an overall risk assessment.',
    image: '/contractlens.png',
    tech: [
      { icon: SiNextdotjs, name: 'Next.js' },
      { icon: SiTypescript, name: 'TypeScript' },
      { icon: SiTailwindcss, name: 'Tailwind' },
    ],
    code: 'https://github.com/TariqLash/contract-lens',
    live: 'https://contract-lens-pi.vercel.app',
  },
  {
    title: 'Locked-In',
    description: 'A habit tracker app that uses a heatmap to visualize consistency, helping users build and maintain routines.',
    image: '/lockedin.png',
    tech: [
      { icon: SiNextdotjs, name: 'Next.js' },
      { icon: SiMongodb, name: 'MongoDB' },
      { icon: SiTailwindcss, name: 'Tailwind' },
    ],
    code: 'https://github.com/TariqLash/locked-in',
    live: 'https://locked-in-rouge.vercel.app/',
  },
  {
    title: 'Finto',
    description: 'A finance application that allows you to sort and visualize transaction data.',
    image: '/finto1.png',
    tech: [
      { icon: SiNextdotjs, name: 'Next.js' },
      { icon: SiHono, name: 'Hono' },
      { icon: SiDrizzle, name: 'Drizzle' },
      { icon: SiClerk, name: 'Clerk' },
    ],
    code: 'https://github.com/TariqLash/personal-finance',
    demo: 'https://www.loom.com/embed/0449cf8f1be24c379c309535e96f4529?sid=8b68ce8d-fbb6-49c4-a754-8eb1bfa4de8d',
  },
  {
    title: 'JJJ Painting',
    description: 'A landing page for a Saskatchewan-based painting company, showcasing their services.',
    image: '/jjjpainting.png',
    tech: [
      { icon: SiReact, name: 'React' },
      { icon: SiTailwindcss, name: 'Tailwind' },
    ],
    code: 'https://github.com/TariqLash/jjjpainting',
    demo: 'https://www.loom.com/embed/4a040a00a37245848842758911c84c91?sid=c03a9596-82a4-4c0a-9604-154c16d4ec22',
  },
]

function ProjectCard({ project, index }) {
  const cardRef = useRef(null)
  const [active, setActive] = useState(false)
  const [hovered, setHovered] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setActive(entry.isIntersecting),
      { threshold: 0.5, rootMargin: '-10% 0px -10% 0px' }
    )
    if (cardRef.current) observer.observe(cardRef.current)
    return () => observer.disconnect()
  }, [])

  const floatDuration = 5 + index * 0.9

  return (
    <div
      className='card-float'
      style={{
        animationDelay: `${index * 1.2}s`,
        animationDuration: `${floatDuration}s`,
        animationPlayState: hovered ? 'paused' : 'running',
        borderRadius: '0.75rem',
        boxShadow: hovered
          ? '0 30px 70px rgba(0,0,0,0.28)'
          : '0 20px 50px rgba(0,0,0,0.18)',
        transition: 'box-shadow 0.4s ease',
      }}
    >
      <div
        ref={cardRef}
        className='relative rounded-xl aspect-video w-full overflow-hidden transition-transform duration-400'
        style={{ transform: hovered ? 'scale(1.02)' : 'scale(1)', transition: 'transform 0.4s ease' }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <Image src={project.image} alt={project.title} fill className='object-cover object-top' />

        {/* Info overlay */}
        <div className={`absolute inset-0 z-10 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex flex-col justify-end p-8 transition-all duration-500 pointer-events-none ${active || hovered ? 'opacity-100' : 'opacity-0'}`}>
          <div className={`transition-all duration-500 ${active || hovered ? 'translate-y-0' : 'translate-y-4'}`}>
            <h2 className='text-white text-3xl font-semibold mb-2'>{project.title}</h2>
            <p className='text-white/70 mb-5 max-w-xl'>{project.description}</p>
            <div className='flex items-center justify-between flex-wrap gap-4'>
              <div className='flex flex-wrap gap-4'>
                {project.tech.map(({ icon: Icon, name }) => (
                  <div key={name} className='flex items-center gap-1.5 text-white/60 text-sm'>
                    <Icon className='size-4' />
                    <span>{name}</span>
                  </div>
                ))}
              </div>
              <div className='flex gap-2 pointer-events-auto'>
                <a href={project.code} target="_blank" rel="noopener noreferrer">
                  <Button size="sm" variant="outline" className='border-white/30 text-white bg-transparent hover:bg-white/10 hover:text-white'>
                    Code <Code />
                  </Button>
                </a>
                {project.live && (
                  <a href={project.live} target="_blank" rel="noopener noreferrer">
                    <Button size="sm" className='bg-white text-black hover:bg-white/90'>
                      Live <ExternalLink />
                    </Button>
                  </a>
                )}
                {project.demo && (
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button size="sm" className='bg-white text-black hover:bg-white/90'>
                        Demo <Play />
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-fit">
                      <DialogHeader><DialogTitle /></DialogHeader>
                      <iframe src={project.demo} className="aspect-video dialogVideo" />
                    </DialogContent>
                  </Dialog>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const Work = () => {
  return (
    <div id='work' className='py-16'>
      <h1 className='mx-auto w-fit mb-12'>Selected Projects</h1>
      <div className='flex flex-col gap-10 max-w-4xl mx-auto px-4 md:px-8'>
        {projects.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </div>
    </div>
  )
}

export default Work
