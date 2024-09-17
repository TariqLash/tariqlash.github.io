import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


const Form = () => {

    const form = useRef(0);

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm('service_nmug1k2', 'template_8usygax', form.current, {
          publicKey: 'iDd8Q8bfNO2VETgYi',
        })
        .then(
          () => {
            console.log('SUCCESS!');
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    };

    return (
        <div id='contact' className='formContainer flex flex-col justify-center items-center h-screen p-5'>
            <h1 className='sectionHeading text-6xl m-3'>Contact</h1>
            <form ref={form} onSubmit={sendEmail} className="contactForm card bg-base-300 sm:w-5/6 shadow-xl p-8 ">
                <div className='flex flex-col space-y-3'>
                    <h1 className='text-xl'>Full Name</h1>
                    <div className='grid grid-cols-2 gap-3 justify-between'>
                        <input name='firstname' type="text" placeholder="First Name" className="input input-bordered w-full roboto" />
                        <input name='lastname' type="text" placeholder="Last Name" className="input input-bordered w-full roboto" />
                    </div>
                    <h1 className='text-xl'>Email</h1>
                    <input name='email' type="email" placeholder="Email" className="input input-bordered w-full roboto" />
                    <h1 className='text-xl'>Message</h1>

                    <textarea name='message' className="textarea textarea-bordered h-56 roboto" placeholder="Message"></textarea>
                    <input type="submit" className='btn btn-primary w-1/2 mx-auto text-xl' value="Submit" />

                    {/* <input type="submit" className='btn btn-primary w-1/2 mx-auto text-xl'>Submit</input> */}
                </div>
            </form>
        </div>

    )
}

export default Form