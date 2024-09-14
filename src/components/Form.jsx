import React from 'react'

const Form = () => {
    return (
        <div className='flex flex-col justify-center items-center h-screen p-5 bg-red-100'>
            <h1 className='text-6xl m-3 text-primary'>Contact Me!</h1>
            <form className="contactForm card bg-base-300 w-5/6 shadow-xl p-8 ">
                <div className='flex flex-col space-y-2'>
                    <h1>Full Name</h1>
                    <div className='grid grid-cols-2 gap-3 justify-between'>
                        <input type="text" placeholder="First Name" className="input input-bordered w-full" />
                        <input type="text" placeholder="Last Name" className="input input-bordered w-full" />
                    </div>
                    <h1>Email</h1>
                    <input type="email" placeholder="Email" className="input input-bordered w-full" />
                    <h1>Message</h1>

                    <textarea className="textarea textarea-bordered h-56" placeholder="Message"></textarea>
                </div>
            </form>
        </div>

    )
}

export default Form