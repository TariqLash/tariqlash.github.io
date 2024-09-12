import React from 'react'

const Form = () => {
    return (
        <div className='flex flex-col justify-center items-center h-screen p-8'>
            <h1 className='text-4xl m-3 text-secondary'>Contact Me!</h1>
            <form className="card bg-base-300 w-2/3 h-2/3 shadow-xl">
                <div className="card-body roboto">
                    <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                    <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                </div>
            </form>
        </div>

    )
}

export default Form