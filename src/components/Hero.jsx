import React from 'react';
import avatar from '../assets/avatar.jpg';
import { IoIosArrowDown } from "react-icons/io";



const Hero = () => {
    return (
        <div
            className="hero h-screen">
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-neutral-content text-center">
                <div className="">
                    <div className="avatar mb-5">
                        <div className="rounded-2xl">
                            <img src={avatar} />
                        </div>
                    </div>
                    <h1 className="sectionHeading mb-5 text-6xl xl:text-8xl font-bold">Hi, I'm Tariq</h1>

                    <p className="mb-5 px-8 text-xl max-w-xl roboto">
                        A web developer passionate about creating innovative digital solutions that make a difference. Let’s build something great together!
                    </p>
                    <button className="btn btn-outline btn-primary border-0 rounded-lg text-5xl"><IoIosArrowDown /></button>
                </div>
            </div>
        </div>
    )
}

export default Hero