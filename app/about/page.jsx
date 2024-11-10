import Navbar from '@/components/Navbar'
import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
    <div>
      <Navbar />
      <div className='max-w-screen-xl mx-auto'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mt-10'>
          <div className='px-8 lg:aspect-square  flex flex-col justify-center'>
            <h1 className='text-5xl playfair mb-8'>I'm <span className='bg-red-500/50'>Tariq Lashley</span></h1>
            <p className='text-lg text-muted-foreground pr-12 lg:pr-0'>
              I am an aspiring full-stack developer passionate about building web apps that are both functional
              and visually polished. I enjoy creating solutions that solve real problems and enhance people’s lives.
              Most recently, I designed a landing page for a local painting company, applying principles of digital
              persuasion and human psychology to maximize conversion rates and visitor engagement.
            </p>
          </div>
          <div className='px-8 lg:aspect-square flex justify-center items-center'>
            <Image
              src="/about.png"
              width={1000}
              height={1000}
              alt="picture of me"
            />
          </div>
        </div>
        <div className='px-8 flex flex-col justify-center space-y-4 mt-10 py-16'>
          <h1 className='text-5xl playfair mb-4'>My Career Story</h1>
          <p className='text-lg text-muted-foreground'>
            I’ve always been drawn to puzzles and challenges. As a kid, I loved Legos, origami, and Rubik’s cubes, which naturally led me to software development. Programming felt like the perfect way to channel my logical thinking and creativity.
          </p>
          <p className='text-lg text-muted-foreground'>
            My background in computer science gives me confidence in tackling complex tasks and solving technical challenges. I take pride in designing and developing fully functional websites that are visually appealing and user-friendly.
          </p>
          <p className='text-lg text-muted-foreground'>
            What sets me apart is my mindset. I always take responsibility for my progress and strive to improve in every area. I believe in becoming undeniable by constantly working on my skills until success becomes inevitable. This approach drives me to push boundaries in everything I do, whether it’s in development or life.
          </p>
        </div>
      </div>
    </div>
  )
}

export default page