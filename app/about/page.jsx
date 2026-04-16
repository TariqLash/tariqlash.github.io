'use client'

import Navbar from '@/components/Navbar'
import React, { useRef, useCallback } from 'react'

const sections = [
  {
    label: 'About',
    text: "I'm Tariq, a Computer Science graduate and full-stack developer based in Calgary. I build web applications, solve problems, and I'm always learning something new.",
  },
  {
    label: 'My Story',
    text: "I grew up in Trinidad and Tobago, spending a lot of time at the beach getting flipped by waves until my dad decided swim lessons were a better idea. I took to it fast. What started as a safety measure turned into over 15 years of competitive swimming, representing Canada and Trinidad and Tobago internationally. I eventually moved to Canada, studied Computer Science at the University of Regina, and somewhere along the way fell in love with building things on the web.",
  },
  {
    label: 'How I Work',
    text: "I've always been drawn to puzzles — crosswords, board games, Legos, origami, Rubik's cubes. Anything that required patience and a bit of lateral thinking. Software development felt like a natural extension of that. It's the same satisfaction, just with higher stakes and no ceiling. There's always a cleaner solution, a better approach, something to optimize. My favourite language is Python for its simplicity and how naturally it integrates with other tools, though I spend most of my time in Next.js, React, and MongoDB. I like working independently, I pay close attention to detail, and I don't move on from a problem until it's actually solved.",
  },
  {
    label: 'Outside of Code',
    text: "I'm into fitness and nutrition, follow the UFC closely, and spend a lot of time on board games and puzzles. Old habits from the pool.",
  },
  {
    label: 'Currently',
    text: "I'm actively looking for my next role in software development or IT. I hold AWS Cloud Practitioner and CompTIA Security+ certifications and I'm open to opportunities in Calgary and beyond.",
  },
]

const page = () => {
  const overlayRef = useRef(null)

  const handleMouseMove = useCallback((e) => {
    if (!overlayRef.current) return
    const rect = overlayRef.current.parentElement.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    overlayRef.current.style.clipPath = `circle(80px at ${x}px ${y}px)`
  }, [])

  const handleMouseLeave = useCallback(() => {
    if (!overlayRef.current) return
    overlayRef.current.style.clipPath = 'circle(0px at 0px 0px)'
  }, [])

  return (
    <div>
      <Navbar />
      <div
        className='relative cursor-none'
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {/* Gray layer (base) */}
        <div className='max-w-2xl mx-auto px-8 py-20 space-y-6'>
          {sections.map((s) => (
            <div key={s.label} className='space-y-1'>
              <h2 className='text-sm uppercase tracking-widest text-muted-foreground'>{s.label}</h2>
              <p className='text-lg text-muted-foreground text-justify'>{s.text}</p>
            </div>
          ))}
        </div>

        {/* Black reveal layer, clipped to cursor circle */}
        <div
          ref={overlayRef}
          className='absolute inset-0 pointer-events-none'
          style={{ clipPath: 'circle(0px at 0px 0px)', backgroundColor: 'black', color: 'white' }}
        >
          <div className='max-w-2xl mx-auto px-8 py-20 space-y-6'>
            {sections.map((s) => (
              <div key={s.label} className='space-y-1'>
                <h2 className='text-sm uppercase tracking-widest opacity-50'>{s.label}</h2>
                <p className='text-lg text-justify'>{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default page
