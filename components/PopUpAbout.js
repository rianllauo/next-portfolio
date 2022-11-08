import React from 'react'
import Image from 'next/image'

import iconClose from '/public/icons/icon-close.svg'

const popUpAbout = ({popUp, close}) => {
  return (
   <div className={`${popUp === false ? 'hidden' : 'block'} fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-auto md:w-96 p-4 bg-indigo-600 rounded-lg shadow-xl z-20`}>
      
      <div className=' mx-auto'>
        <div className='flex justify-between items-center pb-3'>
          <h1 className='text-xl text-white font-medium'>Detail</h1>
          <button onClick={close} className="flex items-center justify-center p-2 rounded-full bg-white">
            <Image src={iconClose} alt="menu" width="25px" height="25px" />
          </button>
        </div>

        <div className='mt-3 px-2 w-full  mx-auto rounded-md text-white'>

            <div className='flex items-center justify-between'>
              <div className=''>
                <div className='flex flex-col mb-3'>
                  <h1 className='text-xs text-indigo-200 font-medium'>My Name: </h1>
                  <p className='text-sm font-medium'>Rian Lauo</p>
                </div>

                <div className='flex flex-col mb-3'>
                  <h1 className='text-xs text-indigo-200 font-medium'>My Email: </h1>
                  <p className='text-sm font-medium'>rianllauo@gmail.com</p>
                </div>

                <div className='flex flex-col mb-3'>
                  <h1 className='text-xs text-indigo-200 font-medium'>Language: </h1>
                  <p className='text-sm font-medium'>Indonesia, English</p>
                </div>
              </div>

              <div className=''>
                <div className='flex flex-col mb-3'>
                  <h1 className='text-xs text-indigo-200 font-medium'>My Phone No: </h1>
                  <p className='text-sm font-medium'>+62 882 1225 3403</p>
                </div>

                <div className='flex flex-col mb-3'>
                  <h1 className='text-xs text-indigo-200 font-medium'>Adress: </h1>
                  <p className='text-sm font-medium'>Tangerang</p>
                </div>

                <div className='flex flex-col mb-3'>
                  <h1 className='text-xs text-indigo-200 font-medium'>Nationality </h1>
                  <p className='text-sm font-medium'>Indonesia</p>
                </div>
              </div>

            </div>

            <div className='my-4 '>
              <a href="#" className='py-2 px-3 bg-white rounded-md text-black text-sm font-medium'>Download CV</a>
            </div>
            
            

        </div>
      </div>

      

      
      
   </div>
  )
}

export default popUpAbout