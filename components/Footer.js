import React from 'react'
import Image from 'next/image'

// icons
import email from '/public/icons/mail.svg'

const Footer = () => {
  return (
    <div className='pt-16'>

      <div className='w-full px-6 flex flex-col items-center justify-center'>

         <div className='w-full flex items-center justify-evenly text-sm text-gray-600'>
            <a className='' href="">Project</a>
            <a href="">Journey</a>
            <a href="">Service</a>
            <a href="">Contact</a>
         </div>

         <div className='mt-8 flex items-center'>
            <div className='flex items-center justify-center mr-3'>
               <Image src={email} alt="email" width="25px" height="25px" />
            </div>
            <a className='text-base font-medium underline' href="">rianllauo@gmail.com</a>
         </div>

         <div className='mt-8 text-sm text-gray-500'>
            <a href="">Privacy</a>
            <span className='mx-2'>|</span>
            <a href="">Term of Conditions</a>
         </div>
      </div>
     
      <div className='w-full h-0.5 mt-8 bg-gray-300 '></div>

      <div className='py-4 flex items-center justify-center text-gray-500 text-sm'>
         <p>©rianlauo 2022. All rights reserved</p>
      </div>


    </div>
  )
}

export default Footer