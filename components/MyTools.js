import React from 'react'
import Image from 'next/image'

import html from '/public/icons/html-5.png'
import css from '/public/icons/css-3.png'
import js from '/public/icons/js.png'
import tailwind from '/public/icons/tailwind.png'
import react from '/public/icons/react.png'
import reactNative from '/public/icons/react-native.png'



const MyTools = () => {
  return (
    <div className='pt-16'>
      <div className='w-full flex flex-col items-center justify-center'>
         <h2 className='text-sm text-indigo-500 font-medium'>My Tools</h2>
         <h1 className='text-2xl font-medium'>What Tools I Use</h1>
      </div>

      <div className='max-w-2xl mx-auto pt-8 flex flex-wrap gap-4 items-center justify-center'>

         <div className='px-12 py-4 bg-white shadow-2xl flex flex-col items-center justify-center rounded-xl hover:bg-indigo-500 hover:text-white hover:shadow-xl hover:shadow-indigo-300 transition duration-300 '>
            <Image src={html} alt="html" width='45px' height='45px' />
            <h1 className='mt-3 text-lg font-medium'>HTML</h1>
         </div>

         <div className='px-12 py-4 bg-white shadow-2xl flex flex-col items-center justify-center rounded-xl hover:bg-indigo-500 hover:text-white hover:shadow-xl hover:shadow-indigo-300 transition duration-300 '>
            <Image src={css} alt="css" width='45px' height='45px' />
            <h1 className='mt-3 text-lg font-medium'>CSS</h1>
         </div>

         <div className='px-6 py-4 bg-white shadow-2xl flex flex-col items-center justify-center rounded-xl hover:bg-indigo-500 hover:text-white hover:shadow-xl hover:shadow-indigo-300 transition duration-300 '>
            <Image src={js} alt="js" width='45px' height='45px' />
            <h1 className='mt-3 text-lg font-medium'>JavaScript</h1>
         </div>

         <div className='px-8 py-4 bg-white shadow-2xl flex flex-col items-center justify-center rounded-xl hover:bg-indigo-500 hover:text-white hover:shadow-xl hover:shadow-indigo-300 transition duration-300 '>
            <Image src={react} alt="react" width='45px' height='45px' />
            <h1 className='mt-3 text-lg font-medium'>React JS</h1>
         </div>

         <div className='px-8 py-4 bg-white shadow-2xl flex flex-col items-center justify-center rounded-xl hover:bg-indigo-500 hover:text-white hover:shadow-xl hover:shadow-indigo-300 transition duration-300 '>
            <Image src={tailwind} alt="tailwind" width='45px' height='45px' />
            <h1 className='mt-3 text-lg font-medium'>Tailwind</h1>
         </div>

         <div className='px-5 py-4 bg-white shadow-2xl flex flex-col items-center justify-center rounded-xl hover:bg-indigo-500 hover:text-white hover:shadow-xl hover:shadow-indigo-300 transition duration-300 '>
            <Image src={reactNative} alt="react native" width='45px' height='45px' />
            <h1 className='mt-3 text-lg font-medium'>React Native</h1>
         </div>

        

       
      
      </div>
    </div>
  )
}

export default MyTools