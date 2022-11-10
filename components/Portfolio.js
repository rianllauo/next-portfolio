import React from 'react'
import Image from 'next/image'

// icons
import jsIcon from '/public/icons/js.png'
import githubIcon from '/public/icons/github.png'

const Portfolio = () => {
  return (
      <div id='portfolio' className='mt-16 w-full py-12 px-6 bg-gradient-to-b from-indigo-500 to-violet-500'>
         
         <div className='text-center'>
            <h2 className='text-sm text-white'>My Work</h2>
            <h1 className='text-2xl font-medium text-white'>See My Portfolio</h1>
         </div>
        

         <div className='mt-8 mx-auto grid grid-rows-1 gap-3 place-items-center place-content-evenly md:grid-cols-2 md:max-w-screen-md lg:max-w-screen-lg lg:grid-cols-3'>

            <div className='w-[310px] md:w-[335px] mx-auto p-6 bg-white rounded-xl'>
               <div className='flex justify-between items-center'>
                  <div className='flex items-center'>
                     <div className='flex items-center justify-center w-[30px] h-[30px] rounded-full overflow-hidden'>
                        <Image src={jsIcon} alt="js" width='30px' height='30px' />
                     </div>
                     <div className='flex flex-col justify-center ml-3'>
                        <h1 className='text-base font-medium leading-4'>Dashboard Admin</h1>
                        <a href="" className='text-sm text-gray-500 '>dashboard.vercel.app</a>
                     </div>
                  </div>
                  <Image src={githubIcon} alt="github" width='25px' height='25px'/>
               </div>

               <div className='my-5'>
                  <p className='text-xs text-gray-500'>Etiam magna tellus, fermentum vel diam a, scelerisque mattis eros.</p>
               </div>
               <div className='w-full flex items-center justify-end'>
                  <button className='px-4 py-2 bg-indigo-500 text-white text-sm rounded-md'>Visit Site</button>
               </div>
            </div>

            <div className='w-[310px] md:w-[335px] mx-auto p-6 bg-white rounded-xl'>
               <div className='flex justify-between items-center'>
                  <div className='flex items-center'>
                     <div className='flex items-center justify-center w-[30px] h-[30px] rounded-full overflow-hidden'>
                        <Image src={jsIcon} alt="js" width='30px' height='30px' />
                     </div>
                     <div className='flex flex-col justify-center ml-3'>
                        <h1 className='text-base font-medium leading-4'>Dashboard Admin</h1>
                        <a href="" className='text-sm text-gray-500 '>dashboard.vercel.app</a>
                     </div>
                  </div>
                  <Image src={githubIcon} alt="github" width='25px' height='25px'/>
               </div>

               <div className='my-5'>
                  <p className='text-xs text-gray-500'>Etiam magna tellus, fermentum vel diam a, scelerisque mattis eros.</p>
               </div>
               <div className='w-full flex items-center justify-end'>
                  <button className='px-4 py-2 bg-indigo-500 text-white text-sm rounded-md'>Visit Site</button>
               </div>
            </div>

            <div className='w-[310px] md:w-[335px] mx-auto p-6 bg-white rounded-xl'>
               <div className='flex justify-between items-center'>
                  <div className='flex items-center'>
                     <div className='flex items-center justify-center w-[30px] h-[30px] rounded-full overflow-hidden'>
                        <Image src={jsIcon} alt="js" width='30px' height='30px' />
                     </div>
                     <div className='flex flex-col justify-center ml-3'>
                        <h1 className='text-base font-medium leading-4'>Dashboard Admin</h1>
                        <a href="" className='text-sm text-gray-500 '>dashboard.vercel.app</a>
                     </div>
                  </div>
                  <Image src={githubIcon} alt="github" width='25px' height='25px'/>
               </div>

               <div className='my-5'>
                  <p className='text-xs text-gray-500'>Etiam magna tellus, fermentum vel diam a, scelerisque mattis eros.</p>
               </div>
               <div className='w-full flex items-center justify-end'>
                  <button className='px-4 py-2 bg-indigo-500 text-white text-sm rounded-md'>Visit Site</button>
               </div>
            </div>

         </div>

         <div className='mt-12 w-full mx-auto flex items-center justify-center'>
            <a href='/project' className='text-sm bg-white py-3 px-4 rounded-md font-medium'>View More</a>
         </div>
      </div>
  )
}

export default Portfolio