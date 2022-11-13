import React from 'react'
import Image from 'next/image'
import { useTheme } from 'next-themes'

// icons
import email from '/public/icons/mail.svg'
import emailDark from '/public/icons/mail-dark.svg'

const Footer = () => {
   const {theme, setTheme} = useTheme()

  return (
    <div className='pt-16'>

      <div className='max-w-xl mx-auto w-full px-6 flex flex-col items-center justify-center'>

         <div className='w-full flex items-center justify-evenly text-sm text-gray-600 dark:text-gray-400'>
            <a className='' href="">Project</a>
            <a href="">Journey</a>
            <a href="">Service</a>
            <a href="">Contact</a>
         </div>

         <div className='mt-8 flex items-center'>
            <div className='flex items-center justify-center mr-3'>
               {
                  theme === 'dark' ?
                  <Image src={emailDark} alt="email" width="25px" height="25px" />
                  :
                  <Image src={email} alt="email" width="25px" height="25px" />
               }
            </div>
            <a className='text-base font-medium underline' href="">rianllauo@gmail.com</a>
         </div>

         <div className='mt-8 text-sm text-gray-500'>
            <a href="">Privacy</a>
            <span className='mx-2'>|</span>
            <a href="">Term of Conditions</a>
         </div>
      </div>
     
      <div className='w-full h-0.5 mt-6 bg-gray-300 dark:bg-gray-600 dark:h-[1px]'></div>

      <div className='py-4 flex items-center justify-center text-gray-500 text-sm'>
         <p>©rianlauo 2022. All rights reserved</p>
      </div>


    </div>
  )
}

export default Footer