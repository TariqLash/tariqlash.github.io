import React from 'react'

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
                        <div className="rounded-full">
                            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                        </div>
                    </div>
                    <h1 className="mb-5 text-5xl font-bold">Hi, I'm Tariq!</h1>

                    <p className="mb-5 px-8">
                        I’m a web developer passionate about building innovative digital solutions that make a difference. 
                        Let’s create something great together!
                    </p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    )
}

export default Hero