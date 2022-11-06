import React from 'react'
import Image from 'next/image'

import devImage from '/public/img/undraw_dev.svg'

const AboutSection = () => {
  return (
    <div className='mt-16'>
      <div className='flex flex-col items-center justify-center text-center'>
        <h3 className='text-indigo-500 font-medium'>{`Hey...it's Rian`}</h3>
        <h1 className='text-2xl lg:text-3xl font-medium my-3'>Potensional Developer</h1>
        <p className='text-xs text-gray-500 max-w-md'>Lorem ipsum dolor sit amet, sedo eiusmod tempor incididunt.</p>
        <div className='w-full h-[1px] bg-gray-300 mt-8'></div>
      </div>

      <div className='mt-10 flex flex-col gap-16 md:gap-6 md:flex-row-reverse items-center'>
        <div className='w-full'>
          <h1 className='text-xl font-medium mb-4'>About Me</h1>
          <p className='text-xs text-gray-500 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
          <p className='text-xs text-gray-500 mt-4 mb-8'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
          </p>
          <a href="" className='px-4 py-3 mr-2 font-semibold bg-indigo-500 text-white shadow-lg shadow-indigo-400 rounded-md text-sm hover:bg-indigo-800 hover:shadow-indigo-500 transition duration-300'>View More</a>
        </div>
        <div className='w-full'>
          <Image src={devImage} alt="img" width='600px' height='400px' />
        </div>
      </div>

      
    </div>
  )
}

export default AboutSection