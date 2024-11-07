import React from 'react'
import Image from 'next/image'
import { Play, Code } from 'lucide-react';
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { SiNextdotjs, SiHono, SiDrizzle, SiClerk, SiReact, SiTailwindcss, SiMongodb } from "react-icons/si";

const Work = () => {
  return (
    <div id='work'>
      <h1 className='mx-auto w-fit pt-6'>Selected Projects</h1>
      <h1 className='mx-auto w-fit text-muted-foreground'>2023-2024</h1>
      <div className='grid grid-cols-1 lg:grid-cols-2 p-14 pt-8 gap-8 gap-y-16' >
        <div>
          <div className='relative zoom-img aspect-4/3 w-full flex justify-end'>
            <Image
              src="/finto1.png"
              alt="finance app dashboard"
              fill
            />
          </div>
          <div>


            <h1 className='playfair text-4xl mt-8 '>Finto</h1>
            <p className='text-muted-foreground text-lg mt-4'>A finance applications that allows you to sort and visualize transaction data.
            </p>
            <div className='mt-4 flex justify-between items-center'>
              <div>
                <TooltipProvider delayDuration={100}>
                  <Tooltip>
                    <TooltipTrigger className="mr-2 lg:mr-4 text-black/75 hover:text-black">
                      <SiNextdotjs className="size-9" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Nextjs</p>
                    </TooltipContent>
                  </Tooltip>
                  <Tooltip>
                    <TooltipTrigger className="mr-2 lg:mr-4 text-black/60 hover:text-black">
                      <SiHono className="size-9" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Honojs</p>
                    </TooltipContent>
                  </Tooltip>
                  <Tooltip>
                    <TooltipTrigger className="mr-2 lg:mr-4 text-black/60 hover:text-black">
                      <SiDrizzle className="size-9" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Drizzle</p>
                    </TooltipContent>
                  </Tooltip>
                  <Tooltip>
                    <TooltipTrigger className="mr-2 lg:mr-4 text-black/60 hover:text-black">
                      <SiClerk className="size-9" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Clerk</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              <div>
                <a href="https://github.com/TariqLash/personal-finance">
                  <Button variant="outline">Code<Code /></Button>
                </a>
                <Dialog>
                  <DialogTrigger className="h-9 px-4 py-2 bg-primary text-primary-foreground 
                            shadow hover:bg-primary/90 inline-flex items-center justify-center gap-2 
                            whitespace-nowrap text-sm font-medium transition-colors 
                            focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring 
                            disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none 
                            [&_svg]:size-4 [&_svg]:shrink-0 ml-2">
                    Demo<Play />
                  </DialogTrigger>
                  <DialogContent className="max-w-fit">
                    <DialogHeader>
                      <DialogTitle>Finto</DialogTitle>
                      <DialogDescription>
                        Finance app of the future
                      </DialogDescription>
                    </DialogHeader>
                    <iframe src="https://www.loom.com/embed/427491250971427b9e8b9dd38320d6ad?sid=c2e41224-ed1c-490a-84a9-f91da427dfc6" className="aspect-video dialogVideo"></iframe>
                  </DialogContent>
                </Dialog>
              </div>

            </div>


          </div>
        </div>
        <div>
          <div className='relative zoom-img aspect-4/3 w-full flex justify-end'>
            <Image
              src="/jjjpainting.png"
              alt="jjjpainting homepage"
              fill
            />
          </div>
          <div>


            <h1 className='playfair text-4xl mt-8 '>JJJ-Painting</h1>
            <p className='text-muted-foreground text-lg mt-4'>A landing page for a Saskatchewan-based painting company, showcasing their services.
            </p>
            <div className='mt-4 flex justify-between items-center'>
              <div>
                <TooltipProvider delayDuration={100}>
                  <Tooltip>
                    <TooltipTrigger className="mr-2 lg:mr-4 text-black/60 hover:text-black">
                      <SiReact className="size-9" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>React</p>
                    </TooltipContent>
                  </Tooltip>
                  <Tooltip>
                    <TooltipTrigger className="mr-2 lg:mr-4 text-black/60 hover:text-black">
                      <SiTailwindcss className="size-9" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>TailwindCSS</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              <div>
                <a href="https://github.com/TariqLash/jjjpainting">
                  <Button variant="outline">Code<Code /></Button>
                </a>
                <Dialog>
                  <DialogTrigger className="h-9 px-4 py-2 bg-primary text-primary-foreground 
                            shadow hover:bg-primary/90 inline-flex items-center justify-center gap-2 
                            whitespace-nowrap text-sm font-medium transition-colors 
                            focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring 
                            disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none 
                            [&_svg]:size-4 [&_svg]:shrink-0 ml-2">
                    Demo<Play />
                  </DialogTrigger>
                  <DialogContent className="max-w-fit">
                    <DialogHeader>
                      <DialogTitle>JJJ-Painting</DialogTitle>
                      <DialogDescription>
                        Landing Page
                      </DialogDescription>
                    </DialogHeader>
                    <iframe src="https://www.loom.com/embed/427491250971427b9e8b9dd38320d6ad?sid=c2e41224-ed1c-490a-84a9-f91da427dfc6" className="aspect-video dialogVideo"></iframe>
                  </DialogContent>
                </Dialog>
              </div>

            </div>


          </div>
        </div>
        <div>
          <div className='relative zoom-img aspect-4/3 w-full flex justify-end'>
            <Image
              src="/lockedin.png"
              alt="habit tracked dashboard"
              fill
            />
          </div>
          <div>


            <h1 className='playfair text-4xl mt-8 '>Locked-In</h1>
            <p className='text-muted-foreground text-lg mt-4'>A habit tracker app that uses a heatmap to visualize consistency, helping users build and maintain routines.
            </p>
            <div className='mt-4 flex justify-between items-center'>
              <div>
                <TooltipProvider delayDuration={100}>
                  <Tooltip>
                    <TooltipTrigger className="mr-2 lg:mr-4 text-black/75 hover:text-black">
                      <SiNextdotjs className="size-9" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Nextjs</p>
                    </TooltipContent>
                  </Tooltip>
                  <Tooltip>
                    <TooltipTrigger className="mr-2 lg:mr-4 text-black/60 hover:text-black">
                      <SiMongodb className="size-9" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>MongoDB</p>
                    </TooltipContent>
                  </Tooltip>
                  <Tooltip>
                    <TooltipTrigger className="mr-2 lg:mr-4 text-black/60 hover:text-black">
                      <SiTailwindcss className="size-9" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>TailwindCSS</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              <div>
                <a href="https://github.com/TariqLash/locked-in">
                  <Button variant="outline">Code<Code /></Button>
                </a>
                <Dialog>
                  <DialogTrigger className="h-9 px-4 py-2 bg-primary text-primary-foreground 
                            shadow hover:bg-primary/90 inline-flex items-center justify-center gap-2 
                            whitespace-nowrap text-sm font-medium transition-colors 
                            focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring 
                            disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none 
                            [&_svg]:size-4 [&_svg]:shrink-0 ml-2">
                    Demo<Play />
                  </DialogTrigger>
                  <DialogContent className="max-w-fit">
                    <DialogHeader>
                      <DialogTitle>Locked-In</DialogTitle>
                      <DialogDescription>
                        Habit Tracker
                      </DialogDescription>
                    </DialogHeader>
                    <iframe src="https://www.loom.com/embed/427491250971427b9e8b9dd38320d6ad?sid=c2e41224-ed1c-490a-84a9-f91da427dfc6" className="aspect-video dialogVideo"></iframe>
                  </DialogContent>
                </Dialog>
              </div>

            </div>


          </div>
        </div>

      </div>
    </div>
  )
}

export default Work

