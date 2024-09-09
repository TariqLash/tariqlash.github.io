import React from 'react'
import portrait from '../assets/portrait.png'


const Hero = () => {
    return (
        <div
            className="hero h-screen"
            style={{
                backgroundImage: "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
            }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-neutral-content text-center">
                <div className="">
                    <div className="avatar mb-5">
                        <div className="rounded-3xl">
                            <img src={portrait} />
                        </div>
                    </div>
                    <h1 className="mb-5 text-6xl xl:text-8xl font-bold">Hi, I'm Tariq</h1>

                    <p className="mb-5 px-8 text-xl max-w-xl">
                        A web developer passionate about creating innovative digital solutions that make a difference. Let’s build something great together!
                    </p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    )
}

export default Hero