import React from 'react'
import { useState } from 'react'
import Image from 'next/image'

// component
import PopUpAbout from './PopUpAbout'

// image
import devImage from '/public/img/undraw_dev.svg'

const AboutSection = () => {

  const [popUp, setPopUp] = useState(false) 

  function showPopUp(){
    if(popUp === true){
      setPopUp(false)
    }else{
      setPopUp(true)
    }
  }

  function closePopUp(){
    setPopUp(false)
  }

  return (
    <div id='about' className='pt-16'>
      <div className='flex flex-col items-center justify-center text-center'>
        <h3 className='text-indigo-500 font-medium'>{`Hey...it's Rian`}</h3>
        <h1 className='text-2xl lg:text-3xl font-medium my-3'>Potensional Developer</h1>
        <p className='text-xs text-gray-500 max-w-md md:text-sm'>Lorem ipsum dolor sit amet, sedo eiusmod tempor incididunt.</p>
        <div className='w-full h-[1px] bg-gray-300 mt-8'></div>
      </div>

      <div className='mt-10 flex flex-col gap-16 md:gap-6 md:flex-row-reverse items-center'>
        <div className='w-full'>
          <h1 className='text-xl font-medium mb-4'>About Me</h1>
          <p className='text-xs md:text-sm text-gray-500 mb-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
          <button onClick={showPopUp} className='px-4 py-3 mr-2 font-semibold bg-indigo-500 text-white shadow-lg shadow-indigo-400 rounded-md text-sm hover:bg-indigo-800 hover:shadow-indigo-500 transition duration-300'>View More</button>
        </div>
        <div className='w-full'>
          <Image src={devImage} alt="img" width='600px' height='400px' />
        </div>
      </div>

      {/* pop up about */}
      <PopUpAbout popUp={popUp} close={closePopUp}/>
      
    </div>
  )
}

export default AboutSection