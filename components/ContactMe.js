import React from 'react'

const ContactMe = () => {
  return (
    <div id='contact' className='pt-20'>
      <div className='px-6 md:px-10 py-8 flex flex-col items-start md:items-center justify-between md:flex-row text-white bg-gradient-to-tr from-indigo-500 to-purple-500 rounded-lg '>
         <div className='max-w-md'>
            <h2 className='text-fuchsia-300 text-sm md:text-base font-medium'>Working With Me</h2>
            <h1 className='text-2xl lg:text-3xl font-medium my-2'>Have A Project Idea! <br/> Lets Work Together! </h1>
            <p className='text-sm text-gray-200'>Do you fancy saying hi to me or do you want to get started with your project and you need my help? Feel free to contact me.</p>
         </div>
         
         <div className='mt-6'>
            <a className='px-4 py-3 text-black font-medium text-sm md:text-base bg-white rounded-lg'>Contact Me</a>
         </div>
      </div>
    </div>
  )
}

export default ContactMe